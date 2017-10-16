import React, { Component } from 'react';
import ReactMapGL, {Popup} from 'react-map-gl';
import './App.css';
import mapBoxApiAccessToken from './mapBoxToken';
import * as d3 from 'd3-request';
import * as data from './data.json';
import PointGL from  './PointGL';
import Select from './Select';
import HistoChart from './Histogram';
import {HistoStyle} from './chartStyle';
import histoData from './histoData';


class App extends Component {
    constructor(props){
     super(props)

     this.state={
        viewpoint:{
          width: window.innerWidth,
          height: window.innerHeight,
          latitude: 37.0902,
          longitude: -95.7129,
          zoom:3

        },
        data:null,
        chartView:true,
        cordinates:[70,70],
        summary:'ever after',
        popOver:false,
        fatalities: 'na',
        injured: 'na',
        totalV: 'na'
      }
      this._resize=this._resize.bind(this);
      this._handleShowChart=this._handleShowChart.bind(this);
      this.setCordinates=this.setCordinates.bind(this);
    }

 _onViewPortChange(viewpoint){
   this.setState({viewpoint:{...this.state.viewpoint,...viewpoint}});

 }
  componentDidMount(){
  //this._processData(this.state.data)
  window.addEventListener('resize',this._resize);

  }

  componentWillMount(){
    console.log(data)
    let stateData=[];
    data.forEach((row)=>{
      stateData.push({
        position:[row.Longitude,row.Latitude],
        injured: row['Total victims'],
        mentalHealth:row['Mental Health Issues'],
        summary: row['Summary'],
        fatalities: row['Fatalities'],
        injured: row['Injured'],
        totalV: row["Total victims"]


      })
    })
   this.setState({data:stateData})

}



_onWindowChange(viewport){

  this.setState({viewpoint:{...this.state.viewpoint,...viewport}});
}
//this is a method for handling state change when chart view is selected off.
_handleShowChart(e){

  this.setState((prevState)=>({
    chartView: !prevState.chartView
  }));


}

_resize(){
    let viewpoint={
      width: window.innerWidth,
      height: window.innerHeight
    }


}


  setCordinates(info){
    console.log(info)
   this.setState({cordinates: info.lngLat})
   if(info.object){
   this.setState({popOver:true})
   this.setState({summary:info.object.summary})
   this.setState({fatalities:info.object.fatalities})
   this.setState({injured:info.object.injured})
   this.setState({totalV:info.object.totalV})


 }else{
   this.setState({popOver:false})
 }

  }


  render() {
    let Charts = null;
    if(this.state.chartView){

          Charts= <div> <HistoChart indoStyle={HistoStyle.race} data ={histoData.race} title={'Race of Shooter'} /><HistoChart indoStyle={HistoStyle.gender} data ={histoData.gender} title={'Gender of Shooter'} /><HistoChart indoStyle={HistoStyle.mentalHealth} data ={histoData.mentalHealth} title={'Mental health of Shooter'}  /></div>
          }
     let popOver=null;

    if(this.state.popOver){
        popOver =<Popup longitude={this.state.cordinates[0]}
               latitude={this.state.cordinates[1]}
               closeButton={false}
               tipSize={20}
        >
          <div>
          <p style={{color:'white',opacity:.8}}>
           Summary: {this.state.summary}
           <br></br>
           Fatalities:{this.state.fatalities}
           <br></br>
           Injured: {this.state.injured}
           <br></br>
           Total Victims:{this.state.totalV}
          </p>

          </div>
        </Popup>

    }
    return (
      <div className="App" style={{position: 'relative'}}>
        <Select showChart={this.state.chartView} onClick={this._handleShowChart}/>
         {Charts}
        <ReactMapGL
        {...this.state.viewpoint}
         onViewportChange={(viewpoint) => this._onViewPortChange(viewpoint)}
        mapboxApiAccessToken={mapBoxApiAccessToken}
        mapStyle={'mapbox://styles/mapbox/dark-v9'}>
          <PointGL  setCordinates={this.setCordinates} data={this.state.data} viewport={this.state.viewpoint} />
          {popOver}
       </ReactMapGL>
       </div>


    );
  }
}

export default App;

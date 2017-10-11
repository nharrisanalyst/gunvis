import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import './App.css';
import mapBoxApiAccessToken from './mapBoxToken';
import * as d3 from 'd3-request';
import * as data from './data.json';
import PointGL from  './PointGL';
import Select from './Select';

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
      }
      this._resize=this._resize.bind(this);
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
        mentalHealth:row['Mental Health Issues']

      })
    })
   this.setState({data:stateData})

}



_onWindowChange(viewport){

  this.setState({viewpoint:{...this.state.viewpoint,...viewport}});
}



_resize(){
    let viewpoint={
      width: window.innerWidth,
      height: window.innerHeight
    }


}

  render() {

    return (
      <div className="App" style={{position: 'relative'}}>
      

        <ReactMapGL
        {...this.state.viewpoint}
         onViewportChange={(viewpoint) => this._onViewPortChange(viewpoint)}
        mapboxApiAccessToken={mapBoxApiAccessToken}
        mapStyle={'mapbox://styles/mapbox/dark-v9'}>
          <PointGL data={this.state.data} viewport={this.state.viewpoint} />

       </ReactMapGL>
       </div>


    );
  }
}

export default App;

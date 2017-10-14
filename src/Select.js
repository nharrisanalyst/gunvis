import React, {Component} from 'react';
import {color2} from './constents';


const colorArray=[[color2.none,'None'],[color2.mentalHealth,'Mental Health Issues'],[color2.Unknown,'Unkown'],[color2.Unclear,'Unclear']];

class  ShowChart extends Component{
  constructor(props){
    super(props)

   this.showChartChange=this.showChartChange.bind(this);

  }

  showChartChange(e){
   this.props.handleChange(e)

  }

render(){
  return(
  <div width='200' style={{position: 'absolute',backgroundColor:'white'}}>
   <input
      onClick={this.showChartChange}
     type ="checkbox"
     checked={this.props.showChart} 
   /> Show Charts
   </div>
  )
}
}






export default class Select extends Component {
  constructor(props){
    super(props)

   this.showChart=this.showChart.bind(this);

  }

  showChart(e){
  this.props.onClick(e);
  console.log('clicked');
}

render(){
  return(  <div

         style={{backgroundColor:'white',position: 'absolute',zIndex: 1,width:'180px',height:'100px',boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'}}>
    <ShowChart handleChange={this.showChart} showChart={this.props.showChart}></ShowChart>
     <ColorsLegend></ColorsLegend>
    </div>)


}

}





const ColorsLegend = props =>{
    let legendHeart = colorArray.map((color)=>{
        return<div style={{display:'inline'}}><div style={{backgroundColor:color[0], width:'8px',height:'8px'}}></div><div>{color[1]}</div></div>;





    })

  return(
      <div id='legend'>
        {legendHeart}
        </div>)




}

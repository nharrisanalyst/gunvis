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

         style={{backgroundColor:'white',position: 'absolute',zIndex: 1,width:'180px',height:'160px',boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',opacity:.85}}>
    <ShowChart handleChange={this.showChart} showChart={this.props.showChart}></ShowChart>
     <ColorsLegend></ColorsLegend>
    <div style={{marginTop:'5px'}}> MouseOver for more info about each incedent</div>
    </div>)


}

}





const ColorsLegend = props =>{
    let legendHeart = colorArray.map((color)=>{
         const color2 = color[0];
          console.log(color2);
        return<div style={{postion:'inline',overflow: 'auto', marginTop:'5px'}} ><div style={{backgroundColor:color2, width:'12px',height:'12px', float: 'left'}}></div><div style={{height:'15px'}}>{color[1]}</div></div>;





    })

  return(
      <div style={{marginTop:'17px'}} id='legend'>
       <h5 style={{marginBottom:'2px'}}> Mental Health Legend </h5>
        {legendHeart}
        </div>)




}

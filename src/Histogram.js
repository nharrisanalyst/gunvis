import React, {Component} from 'react';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, VerticalBarSeries} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';







const HistoChart = ({visible, indoStyle, data, title}) =>{




  const keys = Object.keys(data);
  let barData=[];

  keys.forEach((key)=>{
    barData.push({x:key.toString(), y:data[key]})

  });
 let histoStyle = {height:400, width:300,  zIndex: 100}


    Object.keys(indoStyle).forEach((key)=>{
        histoStyle[key]=indoStyle[key];
    })

  return(

    <div className='chartClass' style={{...histoStyle}}>
      <div style={{height:25, width:300, backgroundColor:'white', textAlign:'center'}}> <h3>{title}</h3></div>
       <XYPlot height = {300} width={300} style={{backgroundColor:'white'}}
       yType="linear"
       xType="ordinal"

       >


         <HorizontalGridLines />
         <VerticalGridLines />
         <XAxis tickLabelAngle={75} tickPadding={30}/>
         <YAxis />
        <VerticalBarSeries  data={barData} />
       </XYPlot>
    </div>



  )
}

export default HistoChart

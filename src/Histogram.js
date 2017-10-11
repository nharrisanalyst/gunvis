import React, {Component} from 'react';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, BarSeries}
import * as data from './data.json';

xScale = d3scale.scaleBand().domain(['NA','Asian','White','Black','Latino']).paddingOuter(.1).paddingInner(.1);


class HistoChart = props =>{



  return(
    <div>
       <XYPlot height ={300} width={300}>
         <HorizontalGridLines />
         <VerticalGridLines />
         <XAxis />
         <YAxis />
        <BarSeries data={barData} />
       </XYPlot>
    </div>


  )
}

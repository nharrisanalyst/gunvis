import React, {Component} from 'react';
import DeckGL, {ScatterplotLayer} from 'deck.gl';
import {color} from './constents';





export default class PointGL extends Component{
  constructor(props){
   super(props)
   this.setCordinates=this.setCordinates.bind(this);

 }



  _initialize(gl) {
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
  }

  setCordinates(info){
    console.log(info);
    this.props.setCordinates(info);

  }
  render(){
    if(this.props.data===null){
      return null
    }
    console.log('data');
    console.log(this.props.data[0].position)

    const layer = new ScatterplotLayer({
      id: 'scatterplot',
   getPosition: d => d.position,
   getColor: d => d.mentalHealth ==='Yes'?color.mentalHealth: d.mentalHealth==='No'?color.none:d.mentalHealth==='Unknown'?color.Unknown:d.mentalHealth==='Unclear'?color.Unclear:null,
   getRadius: d =>d.injured,
   opacity: .5,
   pickable: true,
   radiusMinPixels: 1,
   radiusMaxPixels: 100,
   radiusScale: 250,
   onHover: info => this.setCordinates(info),
   ...this.props

    })

     return(
       <DeckGL {...this.props.viewport} layers={[layer]} onWebGLInitialized={this._initialize} />

     )


  }



}

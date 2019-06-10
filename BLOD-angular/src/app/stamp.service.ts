import { Injectable } from '@angular/core';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';
import anime from 'animejs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class StampService {

  height: number;
  width: number;
  points: string;
  dim_bg: string;

  shapes: any;

  constructor() { 
    this.height=window.innerHeight;
    this.width=window.innerWidth;
    this.dim_bg="0 0 "+this.width+" "+this.height;
    this.shapes = {
      origin: this.width+" "+this.height+" 478.62 "+this.height+" 0 "+this.height+" 0 708.08 0 417.1 0 0 "+(this.width-(1920-1486.56))+" 0 "+this.width+" 0 "+this.width+" 556.59 "+this.width+" "+this.height,
      signIn: ''+this.width+' '+this.height+' 478.62 '+this.height+' 0 '+this.height+' 0 708.08 0 417.1 0 0 '+(this.width-(1920-1486.56))+' 0 '+(this.width-390)+' 378 '+this.width+' '+556.59+' '+this.width+' '+this.height+'',
      signUp: ''+this.width+' '+this.height+' '+478.62+' '+this.height+' '+477+' '+(this.height-301)+' 327 '+(this.height-(1080-483))+' 0 '+(this.height-(1080-417.1))+' 0 0 '+(this.width-(1920-1486.56))+' 0 '+(this.width-390)+' 378 '+this.width+' '+556.59+' '+this.width+' '+this.height+''
    }    
  }

  connexionInit(){
    this.transformStampPointsTo(this.shapes.signIn);
  }
  connexionNewAccount(){
    this.transformStampPointsTo(this.shapes.signUp);
  }
  toOrigin(){
    console.log("toOrigin called");
    this.transformStampPointsTo(this.shapes.origin);
  }

  transformStampPointsTo(newShape: string){
    anime({
      targets: '.polymorphe',
      points: [
        { value: newShape }
      ],
      easing: 'easeOutQuad',//556.59
      duration: 1000,
      loop: false
    });
  }




}

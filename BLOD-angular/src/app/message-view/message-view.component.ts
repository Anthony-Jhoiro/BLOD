import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-message-view',
  templateUrl: './message-view.component.html',
  styleUrls: ['./message-view.component.scss']
})
export class MessageViewComponent implements OnInit {
  height: number;
  width: number;
  points: string;
  dim_bg: string;

  constructor() {
    // this.height = window.innerHeight;
    // this.width = window.innerWidth;
    // this.dim_bg = "0 0 " + this.width + " " + this.height;
    // this.points = "0 0 " + this.width + " 0 " + this.width + " " + this.height + " 0 " + this.height + " 0 0";
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // var morphing = anime({
    //   targets: '.polymorphe',
    //   points: [
    //     { value: "0 0 300 0 400 " + this.height + " 0 " + this.height + " 0 0" }
    //   ],
    //   easing: 'easeOutQuad',
    //   duration: 1000,
    //   loop: false
    // });
  }

}

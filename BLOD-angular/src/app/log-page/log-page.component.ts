import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import * as $ from 'jquery';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.scss']
})
export class LogPageComponent implements OnInit {

  constructor() {

  }
  ngAfterViewInit() {
    var morphing = anime({
      targets: '.polymorphe',
      points: [
        { value: '1920 3000 478.62 3000 0 3000 0 708.08 0 417.1 0 0 1486.56 0 1530 378 1920 556.59 1920 3000' }
      ],
      easing: 'easeOutQuad',
      duration: 1000,
      loop: false
    });
    $('#developpMenue').click(() => {
      anime({
        targets: '.polymorphe',
        points: [
          { value: '1920 3000 478.62 3000 477 723 327 483 0 417.1 0 0 1486.56 0 1530 378 1920 556.59 1920 3000' }
        ],
        easing: 'easeOutQuad',
        duration: 1000,
        loop: false
      });
      $('.sign-up').css('display', 'flex');
      
    });
  }

  ngOnInit() {
  }

}

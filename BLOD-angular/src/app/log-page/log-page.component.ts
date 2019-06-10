import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import * as $ from 'jquery';
import { StampService } from '../stamp.service';

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.scss']
})
export class LogPageComponent implements OnInit {

  height: number;
  width: number;
  points: string;
  dim_bg: string;

  constructor(private stamp: StampService) {  }
  ngAfterViewInit() {
    this.stamp.connexionInit();
    $('#developpMenue').click(() => {
      this.stamp.connexionNewAccount();
      $('.sign-up').css('display', 'flex');
      
    });    
  }

  ngOnInit() {
  }

}

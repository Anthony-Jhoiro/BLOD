import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss']
})
export class MessageBubbleComponent implements OnInit {

  @Input('autor') autor: string;
  @Input('content') content: string;
  @Input('dateTime') dateTime: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { SocketService } from 'src/app/socket.service';
import { ChatService } from 'src/app/chat.service';
//import { EventEmitter } from 'events';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.scss']
})
export class InputAreaComponent implements OnInit {

  @Output() sended = new EventEmitter<string>();

  constructor(private socket: SocketService, private chat: ChatService, private auth: AuthService) { }

  ngOnInit() {
    $('#send').click(()=>{
      this.socket.send($('#txtField').val(), this.chat.getCurrentChat());
      this.sended.emit($('#txtField').val());
    });
  }

}

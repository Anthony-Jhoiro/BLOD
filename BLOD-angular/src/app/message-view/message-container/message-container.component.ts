import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from 'src/app/socket.service';
import * as $ from 'jquery';
import { ChatService } from 'src/app/chat.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {

  contentMsg: any;

  

  constructor(private socket: SocketService, private route: ActivatedRoute, private chat: ChatService, private auth: AuthService) { 
    
  }

  ngOnInit() {
    let groupID = this.route.snapshot.paramMap.get('groupID');
    this.chat.setCurrentChat(groupID);
    this.socket.getMessagesContent(groupID, messages=> this.contentMsg = messages);
    this.socket.onNewMessage().subscribe(msg => {
      this.contentMsg.push(msg);
      console.log(msg);
    });
  }
  onSended(message){
    let messageData = {
      autor: this.auth.currentUser().name,
      content: message,
      datetime: Date.now().toString()
    }
    this.contentMsg.push(messageData);
    console.log(messageData);
  }

}

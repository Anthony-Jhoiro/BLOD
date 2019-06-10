import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: SocketIOClient.Socket;
  private currentGroup = "";

  constructor(private router: Router, private auth: AuthService) { 
    this.socket = io('http://localhost:8080');
    
  }

  //Emitter
  send(content: string, group: string){
    let data = {
      content: content,
      group: group,
      user: this.auth.currentUser()
    }
    console.log("Sending :", data);
    this.socket.emit('message', data);
  }
  newAccount(data){
    let isValid = false
    this.socket.emit('new_Account', data,  retour => {
      isValid = retour.result;
      if (isValid) console.log("Création du compte possible !");
      else console.log("Création du compte impossible.");

      if (isValid){
        console.log("navigation start");
        this.router.navigate(['/messages']);
      }
    });
  }
  login(data, callback){
    this.socket.emit('login', data, (rep, newData) => {
      callback(rep);
      if (rep) this.auth.connexion(newData.u_name, newData.u_id);
    });
  }

  connexion(groupID: string = ""){
    console.log("Connecting to :", groupID);
    this.socket.emit('changeroom', groupID);
    this.currentGroup = groupID;
  }

  getMessagesContent(id, rep){
    this.socket.emit('getMessagesContent', id, retour=> rep(retour));
    
  }

  //Handler
  
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('rep', msg => {
        observer.next(msg);
      });
    });
  }
  onPing() {
    return Observable.create(observer => {
      this.socket.on('ping', data => {
        console.log("Ping recieved !");
        observer.next(data);
      });
    });
  }
  
}

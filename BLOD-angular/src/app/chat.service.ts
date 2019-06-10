import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private current_chat = "";

  constructor(private socket: SocketService) { }

  setCurrentChat = a => {
    this.current_chat = a;
    this.socket.connexion(a);
  }

  getCurrentChat = () => this.current_chat;

  /*change_room(destination){
    //requete au serveur
    let req = {chat_name: destination, user_id: this.auth.currentUser}
    const headers = new HttpHeaders()
      //.set('Authorization', 'my-auth-token')
      .set('Content-Type', 'appplication/json');
    console.log("Demande envoyée");
    
    this.http.post('/api/verify', req).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured : ", err);
        throw err;
      }
    ); //rep du serveur
    this.current_chat = destination;
  }*/

}

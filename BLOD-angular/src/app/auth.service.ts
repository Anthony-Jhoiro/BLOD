import { Injectable } from '@angular/core';
import { ChatService } from './chat.service';
import { SocketService } from './socket.service';
import { callbackify } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected:boolean = false;

  private user = {
    id: 8,
    name: "Jhoiro"
  }

  constructor() { }

  canActivate(){
    return !this.connected;
  }

  connexion(user_name, user_id){
    this.user.id = user_id;
    this.user.name = user_name;
    console.log("Connecté en temps que :", this.user.name);
  }

  isConnected = () => this.connected;

  currentUser = () => this.user;

  newAccount(user_data){
    console.log(user_data);    
  }
}

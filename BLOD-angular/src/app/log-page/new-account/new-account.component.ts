import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';
import { SocketService } from 'src/app/socket.service';
import { AuthService } from 'src/app/auth.service';
import { ChatService } from 'src/app/chat.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {
  newForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    mail: new FormControl(''),
    birthDate: new FormControl(''),
    passwordConfirm: new FormControl('')
  });

  crypt(chaine): string{
    return chaine;
  }

  constructor(public auth: AuthService, public socket: SocketService, public chat: ChatService) { }

  ngOnInit() {
  }
  
  onSubmit(){
    let data = this.newForm.value;
    if (data.password === data.passwordConfirm){
      delete data.passwordConfirm;
      data.password = this.crypt(data.password);
      console.log("données envoyées :",data);
      this.socket.newAccount(data);

      this.newForm.reset(this.newForm.value);
    }
    //this.chat.change_room("Les petits pédestres");
  }

}

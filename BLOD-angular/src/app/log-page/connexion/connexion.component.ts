import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';
import { SocketService } from 'src/app/socket.service';
import { Router } from '@angular/router';
import { StampService } from 'src/app/stamp.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  connexionForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  crypt(chaine): string{
    return chaine;
  }

  onSubmit(){
    let data = this.connexionForm.value;
    data.password = this.crypt(data.password);
    this.socket.login(data, rep => {
      console.log(rep);      
      if (!rep) $("#error-login").show();
      else {
        this.stamp.toOrigin();
        this.router.navigate(['/messages/1']);
      }
    });

  }

  constructor(private auth: AuthService, private socket: SocketService, private router:Router, private stamp: StampService) { 
    
  }

  ngOnInit() {
    $("#error-login").hide();
  }

}

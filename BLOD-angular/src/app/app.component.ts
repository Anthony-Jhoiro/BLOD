import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BLOD-angular';
  height: number;
  width: number;
  points: string;
  dim_bg: string;


  constructor(private socket: SocketService) { 
    console.log("window.innerHeight"+window.innerHeight);
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.dim_bg = "0 0 "+this.width+" "+this.height;
    this.points = this.width+" "+this.height+" 478.62 "+this.height+" 0 "+this.height+" 0 708.08 0 417.1 0 0 "+(this.width-(1920-1486.56))+" 0 "+this.width+" 0 "+this.width+" 556.59 "+this.width+" "+this.height;

  }
  ngAfterViewInit() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
    this.dim_bg = "0 0 "+this.width+" "+this.height;
    this.points = this.width+" "+this.height+" 478.62 "+this.height+" 0 "+this.height+" 0 708.08 0 417.1 0 0 "+(this.width-(1920-1486.56))+" 0 "+this.width+" 0 "+this.width+" 556.59 "+this.width+" "+this.height;
  }

  ngOnInit() {
    this.socket.onPing().subscribe(rep => console.log(rep));
  }

  
}

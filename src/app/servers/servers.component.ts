import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `<app-server></app-server><app-server></app-server>`,
  templateUrl:"./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No servr was created";
  serverName = "";

  constructor() {
  setTimeout(()=>{
    this.allowNewServer = true;
  },2000);
}
  ngOnInit(): void {
  }
onCreateServer(){
  this.serverCreationStatus = "Server was Created Name is " + this.serverName;
}
onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
}
}

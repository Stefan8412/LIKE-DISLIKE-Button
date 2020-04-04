import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import {LikeDislikeComponent} from "./LikeDislike/likedislike.component";
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LikeDislikeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

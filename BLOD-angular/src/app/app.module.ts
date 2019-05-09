import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { MessageBubbleComponent } from './message-view/messages-container/message-bubble/message-bubble.component';
import { LogPageComponent } from './log-page/log-page.component';
import { ConnexionComponent } from './log-page/connexion/connexion.component';
import { NewAccountComponent } from './log-page/new-account/new-account.component';
import { MessagesContainerComponent } from './message-view/messages-container/messages-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageViewComponent,
    MessageBubbleComponent,
    LogPageComponent,
    ConnexionComponent,
    NewAccountComponent,
    MessagesContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

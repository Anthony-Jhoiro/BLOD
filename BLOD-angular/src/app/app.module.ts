import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { LogPageComponent } from './log-page/log-page.component';
import { ConnexionComponent } from './log-page/connexion/connexion.component';
import { NewAccountComponent } from './log-page/new-account/new-account.component';
import { AuthService } from './auth.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MessageContainerComponent } from './message-view/message-container/message-container.component';
import { ContactViewComponent } from './message-view/contact-view/contact-view.component';
import { ContactBubbleComponent } from './message-view/contact-view/contact-bubble/contact-bubble.component';
import { MessageBubbleComponent } from './message-view/message-container/message-bubble/message-bubble.component';
import { InputAreaComponent } from './message-view/message-container/input-area/input-area.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsContainerComponent } from './news-page/news-container/news-container.component';
import { NewsBubbleComponent } from './news-page/news-container/news-bubble/news-bubble.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageViewComponent,
    LogPageComponent,
    ConnexionComponent,
    NewAccountComponent,
    MessageContainerComponent,
    ContactViewComponent,
    ContactBubbleComponent,
    MessageBubbleComponent,
    InputAreaComponent,
    NewsPageComponent,
    NewsContainerComponent,
    NewsBubbleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

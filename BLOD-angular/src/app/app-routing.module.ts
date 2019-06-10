import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogPageComponent } from './log-page/log-page.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { AuthService } from './auth.service';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: 'connexion', component: LogPageComponent },
  { path: 'messages/:groupID', component: MessageViewComponent/* canActivate: [AuthService] */ },
  { path: 'messages', redirectTo: 'messages/1' },
  { path: 'news', component: NewsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

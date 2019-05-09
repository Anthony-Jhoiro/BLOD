import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogPageComponent } from './log-page/log-page.component';
import { MessageViewComponent } from './message-view/message-view.component';

const routes: Routes = [
  { path: 'connexion', component: LogPageComponent },
  { path: 'messages', component: MessageViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

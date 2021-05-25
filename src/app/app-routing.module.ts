import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {path : 'login',component : LoginFormComponent},
  {path : 'signup',component : SignupFormComponent},
  {path : 'chat',component : ChatRoomComponent},
  {path : '',redirectTo : '/login',pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

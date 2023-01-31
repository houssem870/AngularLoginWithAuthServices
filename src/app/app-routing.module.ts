import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './Guards/auth.guard';
import { ToastrService } from 'ngx-toastr';

const routes: Routes = [
  {path: 'login',
  component:LoginComponent },
  {path: 'home',
  component:HomeComponent   , canActivate:[AuthGuard]},
  {
    path: '**',
    redirectTo: 'login'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

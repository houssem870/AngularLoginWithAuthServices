import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service'
import { TokenServiceService } from '../Token/token-service.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



form = this.formBuilder.group({
  userName:'',
  password:''
})


constructor(
  private formBuilder: FormBuilder , 
  private userService: UserService , 
  private tokenService: TokenServiceService ,
  private router: Router,
  private toast: NgToastService)
{
  
}

  ngOnInit(): void {
   
  }

submitForm(): void {

this.userService.attemptAuth( this.form.value).subscribe({
  next:(res) =>{
    this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
    this.tokenService.saveToken(res.token)
    console.log(res.token)
    this.router.navigate(['home']);

  },
  error:(err) =>{
    this.toast.error({detail:"wrong !!",summary:'something wrong with your app !!',duration:4000});
        console.log(err)
  }
})
 
}


}

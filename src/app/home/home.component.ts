import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public users:any = [];
constructor(private usersevice: UserService ,private api : ApiService){

}
  ngOnInit(): void {
    this.api.getUsers()
    .subscribe(res =>{
      this.users = res ;
      console.log(this.users)
    })
  }

logout(){
  this.usersevice.signOut();
}

}

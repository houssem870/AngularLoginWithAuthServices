import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



const httpOptions = {
  headers: new HttpHeaders({
 'Content-Type': 'application/json'
})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl =  'https://localhost:7027/api/User/Login';

  constructor(private http: HttpClient, private router: Router) {
  }

  attemptAuth(credentials: any): Observable<any> {
    return this.http.post(this.loginUrl, credentials, httpOptions);
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])

  }

}

import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  public saveToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  public getToken() {
    return localStorage.getItem('token');
  }
  public isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
}

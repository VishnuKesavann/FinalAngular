import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Userlogin } from './userlogin';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  isLogin:Boolean;
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  constructor(private httpClient:HttpClient) { }

  public loginVerify(userlogin:Userlogin){
    //calling the api for checking username and password
    return this.httpClient.get<Userlogin>(environment.apiUrl+'api/AUserlogin/'+userlogin.UserName+ '/'+userlogin.Password)
       
  }
  setAuthenticationState(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }
}

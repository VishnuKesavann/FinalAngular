import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Userlogin } from './userlogin';
@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private httpClient:HttpClient) { }

  public loginVerify(userlogin:Userlogin){
    //calling the api for checking username and password
    return this.httpClient.get<Userlogin>(environment.apiUrl+'api/AUserlogin/'+userlogin.UserName+ '/'+userlogin.Password)
      }
}

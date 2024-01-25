import { Injectable } from '@angular/core';
import { Getidvm } from './getidvm';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GetidvmService {
  Getidvm:Getidvm[]
  getidvm1:Getidvm=new Getidvm();
  constructor(private httpClient:HttpClient) { }

  //Bind Get IDVM
  BindListIDVM(LabPrescId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl + 'api/LabReport/Get', { params: { labpresId: LabPrescId.toString() } });
  }
}

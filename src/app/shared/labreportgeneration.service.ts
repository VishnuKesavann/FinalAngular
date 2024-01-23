import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Labreportgeneration } from './labreportgeneration';

@Injectable({
  providedIn: 'root'
})
export class LabreportgenerationService {
  labreportgeneration: Labreportgeneration[];
  formData_L:Labreportgeneration =new Labreportgeneration();

  constructor(private httpClient:HttpClient) { }

  //Insert the labreport
  insertLabReport(lab: Labreportgeneration):Observable<any>{
    return this.httpClient.post(environment.apiUrl +"api/LabReport",lab)
  } 
}

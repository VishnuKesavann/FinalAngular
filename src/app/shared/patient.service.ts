import { Injectable } from '@angular/core';
import { Patient } from './patient';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
//Declared a patient class
  patients:Patient[];
  formData_P:Patient=new Patient();
  constructor(private httpClient:HttpClient) { }
  //for retriving the patient List
BindListPatients(){
  this.httpClient.get(environment.apiUrl+"api/RPatient").toPromise().then(
    response=>{
      this.patients=response as Patient[];
      console.log(this.patients);
    }
  ).catch(error=>{console.error('Error: ',error)});
}
//for adding the patient
insertEmployee(patient:Patient):Observable<any>{
  return this.httpClient.post(environment.apiUrl+"api/RPatient",patient);
}

}

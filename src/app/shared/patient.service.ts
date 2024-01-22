import { Injectable } from '@angular/core';
import { Patient } from './patient';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { error } from '@angular/compiler/src/util';
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
insertPatient(patient:Patient):Observable<any>{
  return this.httpClient.post(environment.apiUrl+"api/RPatient",patient);
}

//Populating Patient Records
getPatient(patientId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'api/RPatient/'+patientId);
}

//Updating Patient Records
updatePatient(patient1:Patient):Observable<any>{
  return this.httpClient.put(environment.apiUrl+'api/RPatient',patient1);
}

//disabling Patient Records
disablePatient(patientId: number) {
  return this.httpClient.patch(environment.apiUrl + 'api/RPatient/' + patientId, {});
}
//Get All Disabled Patient Records
BindDisabledPatientRecords(){
  this.httpClient.get(environment.apiUrl+'api/RPatient/GetDisabledPatient').toPromise().then(
    response=>{
      this.patients=response as Patient[];
      console.log(this.patients);
    }
  ).catch(error=>{
    console.error('Error: ',error);
  })
}

//Enable the Disabled Patient Records
enablePatient(patientId:number){
  return this .httpClient.patch(environment.apiUrl+'api/RPatient/Enable/'+patientId,{});
}
}

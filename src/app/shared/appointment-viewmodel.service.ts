import { Injectable } from '@angular/core';
import { Department } from './department';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { error } from '@angular/compiler/src/util';
import{AppointmentViewmodel} from 'src/app/shared/appointment-viewmodel'
import {Specialization} from 'src/app/shared/specialization'
import {Doctorviewmodel} from 'src/app/shared/doctorviewmodel'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentViewmodelService {
  departments:Department[];
  specializations:Specialization[];
  doctorviewModal:Doctorviewmodel[];
  formData_b:AppointmentViewmodel=new AppointmentViewmodel();
  formData_s:Specialization=new Specialization();
  formData_d:Doctorviewmodel=new Doctorviewmodel();
  constructor(private httpClient:HttpClient) { }

  //Get All Departments
  BindDeparment(){
    this.httpClient.get(environment.apiUrl+'api/RAppoinment/GetAllDepartments').toPromise().then(
      response=>{
        this.departments=response as Department[];
        console.log(this.departments);
      }
    ).catch(error=>{console.error('Error: ',error)});
  }

  //Get All Specialization By Id
  BindSpecializationByDepartmentId(deparmentId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'api/RAppoinment/GetSpecializationByDepartmentId/'+deparmentId);
  }
  //Bind All Doctors By SpecializationId
  BindDoctorBySpecializationId(specializationId:number):Observable<any>{
    return this.httpClient.get(environment.apiUrl+'api/RAppoinment/GetDoctorBySpecializationId/'+specializationId);
  }

  //To Add Appointment and Bill 
  insertAppointmentandBill(appointmentViewmodel:AppointmentViewmodel,isNewPatient:boolean):Observable<any>{
    return this.httpClient.post(environment.apiUrl+'api/RAppoinment/BookAppointment',appointmentViewmodel,{params:{isNewPatient:isNewPatient.toString()}});
  }
}

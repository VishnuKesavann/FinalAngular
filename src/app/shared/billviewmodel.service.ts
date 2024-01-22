import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Billviewmodel } from './billviewmodel';
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class BillviewmodelService {
  bill_rs:Billviewmodel[];
  bill_r:Billviewmodel=new Billviewmodel();
  constructor(private httpClient:HttpClient) { }
  //Populating Patient Records
getBill(BillId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+'api/RAppoinment/GetBillDetails/'+BillId);
}
//Get All Appointments in the clinic
BindAppointments(){
  return this.httpClient.get(environment.apiUrl+'api/RAppoinment/GetAllAppointments').toPromise().then(
    response=>{
      this.bill_rs=response as Billviewmodel[];
      console.log(this.bill_rs);
    },error=>{
      console.log(error);
    }
  );
}
//Canceling the Appointments
CancelAppointments(AppointmentId:number){
  return this.httpClient.patch(environment.apiUrl+'api/RAppoinment/cancelAppointment/'+AppointmentId,{});
}
}

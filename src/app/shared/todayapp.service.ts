import { Injectable } from '@angular/core';
import { Todayapp } from './todayapp';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodayappService {

  appointments:Todayapp[];

  constructor(private httClient:HttpClient) { }

  BindListAppointment()
  {
    this.httClient.get(environment.apiUrl + "api/DAppointment/GetAppointmentView/901")
    .toPromise().then(response =>{
      this.appointments = response as Todayapp[]
      console.log(this.appointments)
    });
  }
}

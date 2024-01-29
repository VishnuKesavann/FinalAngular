import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }
  cancelAppointments():Observable<any>{
    return this.httpClient.post(environment.apiUrl+'api/RAppoinment/cancel-appointments',{})
  }
}

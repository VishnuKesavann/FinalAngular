import { Injectable } from '@angular/core';
import { Patientview } from './patientview';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientviewService {

  patdetails = new Patientview();

  constructor(private httpClient : HttpClient) { }

  BindListDetails(AppointmentId : number)
  {
    this.httpClient.get(environment.apiUrl + "api/DAppointment/GetPatientView/" + AppointmentId)
    .toPromise().then(response =>
      {
        this.patdetails = response as Patientview;
        console.log(this.patdetails);
      });
  }
}

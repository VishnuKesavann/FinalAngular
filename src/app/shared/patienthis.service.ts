import { Injectable } from '@angular/core';
import { Patienthis } from './patienthis';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatienthisService {

  pathis : Patienthis[];

  constructor(private httpClient : HttpClient) { }

  BindListHistory(PatientId : number)
  {
    this.httpClient.get(environment.apiUrl + "api/DAppointment/" + PatientId)
    .toPromise().then(response =>
      this.pathis = response as Patienthis[]);
  }
}

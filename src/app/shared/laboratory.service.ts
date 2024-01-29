// laboratory.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratory } from './laboratory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  lab: Laboratory[];
  formData: Laboratory = new Laboratory();

  constructor(private httpClient: HttpClient) { }

  BindListLab() {
    this.httpClient.get(environment.apiUrl + "/api/ALaboratory")
      .toPromise().then(response => {
        this.lab = response as Laboratory[];
        console.log(this.lab);
      }).catch(error => {
        console.error('Error:', error);
      });
  }

  // add lab
  insertLabTest(lb: Laboratory): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/ALaboratory", lb);
  }

  // Get Lab
  getLab(testId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/ALaboratory/" + testId);
  }

  updateLab(lab: Laboratory): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/ALaboratory/", lab);
  }

  deleteLab(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/ALaboratory/" + id);
  }
}

import { Injectable } from '@angular/core';
import { Diagnosisform } from './diagnosisform';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Medicine } from 'src/app/shared/medicine';
import { Laboratory } from './laboratory';

@Injectable({ 
  providedIn: 'root'
})
export class DiagnosisformService {


  formDiagnosis : Diagnosisform = new Diagnosisform(); 
  labTests:Laboratory[];
  medicines:Medicine[];


  constructor(private httpClient : HttpClient) { }



    //Get all LabTests
    BindListLabTest()
    {
      this.httpClient.get(environment.apiUrl+ "api/ALaboratory")
      .toPromise().then(response => {
        this.labTests=response as Laboratory[];
        console.log(this.labTests);
      })
    }
  
    //Get all medicines
    BindListMedicines()
    {
      this.httpClient.get(environment.apiUrl+ "api/AMedicine")
      .toPromise().then(response => {
        this.medicines=response as Medicine[];
        console.log(this.medicines);
      })
    }
  


  insertDiagnosis(diag : Diagnosisform) : Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "api/DAppointment", diag)
  }
}



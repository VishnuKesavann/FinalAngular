import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Labbillvm } from './labbillvm';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabbillvmService {
  labbillvm: Labbillvm;
  formData_L:Labbillvm=new Labbillvm()

  constructor(private httpClient:HttpClient) { }

  BindBillGeneration(ReportId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + `api/LabReport/Bill/`+ReportId);
  }
  
}

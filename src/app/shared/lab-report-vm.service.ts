import { Injectable } from '@angular/core';
import { LabReportVM} from './lab-report-vm';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabReportVMService {
  lReportVM:LabReportVM[];
  formData_L:LabReportVM=new LabReportVM();

  constructor(private httpClient:HttpClient) { }
  BindListReport()
  {
    this.httpClient.get(environment.apiUrl + "api/LabReport/List")
    .toPromise().then(response =>{
      this.lReportVM=response as LabReportVM[];
      console.log(this.lReportVM);
    });
  }
  insertLabReport(lab: LabReportVM):Observable<any>{
    return this.httpClient.post(environment.apiUrl +"api/LabReport",lab)
  } 
}

import { Injectable } from '@angular/core';
import { Labtestvm } from './labtestvm';
import { HttpClient} from  '@angular/common/http';
import { environment} from 'src/environments/environment';
import { LabReportVM } from './lab-report-vm';

@Injectable({
  providedIn: 'root'
})
export class LabtestvmService {
  labtestvm: Labtestvm[];
  lReportVM:LabReportVM[];
  formData_L: Labtestvm=new Labtestvm();

  constructor(private httpClient:HttpClient) { }

  //
  BindListEmployee(){
    this.httpClient.get(environment.apiUrl +"api/LabReport")
    .toPromise().then(response => {
      this.labtestvm = response as Labtestvm[];
      console.log(this.labtestvm);
    }
      );
  }
}

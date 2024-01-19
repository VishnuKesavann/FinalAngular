import { Injectable } from '@angular/core';
import { Labtestvm } from './labtestvm';
import { HttpClient} from  '@angular/common/http';
import { environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabtestvmService {
  labtestvm: Labtestvm[];
  formData: Labtestvm=new Labtestvm();

  constructor(private httpClient:HttpClient) { }

  //
  BindListEmployee(){
    this.httpClient.get(environment.apiUrl +"api/LabReport")
    .toPromise().then(response => 
      this.labtestvm = response as Labtestvm[]);
  }
}

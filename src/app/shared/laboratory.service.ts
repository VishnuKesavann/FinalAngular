import { Injectable } from '@angular/core';
import { Laboratory } from './laboratory';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  laboratory:Laboratory[];
  formData:Laboratory=new Laboratory();

  constructor(private httpClient:HttpClient) { }

  BindListMedicine()
{
  this.httpClient.get(environment.apiUrl+"api/ALaboratory")
  .toPromise().then(response=>
    {this.laboratory=response as Laboratory[];
      console.log(this.laboratory);
    }).catch(error=>{console.error('Error: ',error)})
}
}

import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  medicine:Medicine[];
  formData:Medicine=new Medicine();

  constructor(private httpClient:HttpClient) { }

BindListMedicine()
{
  this.httpClient.get(environment.apiUrl+"api/AMedicine")
  .toPromise().then(response=>
    {this.medicine=response as Medicine[];
      console.log(this.medicine);
    }).catch(error=>{console.error('Error: ',error)})
}
}

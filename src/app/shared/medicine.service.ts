import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  medicine:Medicine[];
  formData:Medicine=new Medicine();
  static formData: Medicine;

  constructor( private httpClient:HttpClient) { }

  BindListMedicine() {
    this.httpClient.get(environment.apiUrl+"/api/AMedicine")
    .toPromise().then(response=>
      {
      this.medicine=response as Medicine[];
      console.log(this.medicine);
  }).catch(error=>{console.error('Error:',error)})
  }

  insertMedicine(med: Medicine): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/AMedicine",med);
  
  }

 //Get Lab
getMedicine(medicineId:number):Observable<any>
{
  return this.httpClient.get(environment.apiUrl+"/api/AMedicine/"+medicineId)
}

updateMedicine(medId:Medicine):Observable<any>{
  return this.httpClient.put(environment.apiUrl + "/api/amedicine/",medId);
}


deleteMedicine(id:number){
  return this.httpClient.delete(environment.apiUrl + "/api/amedicine/"+id);
}
}

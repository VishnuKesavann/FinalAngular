import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Billviewmodel } from './billviewmodel';
@Injectable({
  providedIn: 'root'
})
export class BillviewmodelService {
  bill_r:Billviewmodel=new Billviewmodel();
  constructor(private httpClient:HttpClient) { }
  //Populating Patient Records
getBill(BillId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+'api/RAppoinment/GetBillDetails/'+BillId);
}
}

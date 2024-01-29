import { Injectable } from '@angular/core';
import { Staffviewmodel } from 'src/app/shared/staffviewmodel';
import{ HttpClient } from '@angular/common/http'
import{environment} from'src/environments/environment'
import{Observable} from 'rxjs';
import { Staff } from 'src/app/shared/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  staffVM:Staffviewmodel[];
  staff:Staff[];
  formData:Staff=new Staff();
  static formData: Staff;
  constructor(private httpClient:HttpClient) { }

  updatestaff(staff: Staff):Observable<any>{
    return this.httpClient.put(environment.apiUrl + "/api/AStaff/",staff);
  }
  
}

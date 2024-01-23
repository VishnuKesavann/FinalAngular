import { Injectable } from '@angular/core';
import { Staffviewmodel } from './staffviewmodel';
import { Department } from './department';
import { Qualification } from './qualification';
import { Userlogin } from './userlogin';
import { Specialization } from './specialization';
import { Role } from './role';
import { Doctor } from './doctor';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffviewmodelService {

  staffviewmodel: Staffviewmodel[];
  department: Department[];
  qualification: Qualification[];
  userlogin: Userlogin[];
  specialization: Specialization[];
  role: Role[];
  doctor: Doctor[];

  formData: Staffviewmodel = new Staffviewmodel();
  constructor(private httpClient: HttpClient) { }

  BindListMedicine() {
    this.httpClient.get(environment.apiUrl + "api/AStaff")
      .toPromise().then(response => {
        this.staffviewmodel = response as Staffviewmodel[];
        console.log(this.staffviewmodel);
      }).catch(error => { console.error('Error: ', error) });
  }

  insertstaff(staffVm: Staffviewmodel): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "api/AStaff", staffVm);
  }

  // Get staff
  getstaff(StaffId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "api/AStaff/" + StaffId);
  }

  deletestaff(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "api/AStaff/" + id);
  }
}

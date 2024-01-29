import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staffviewmodel } from './staffviewmodel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffviewmodelService {
  formData: Staffviewmodel = new Staffviewmodel();
  staffviewmodel: Staffviewmodel[];

  constructor(private httpClient: HttpClient) { }

  BindListStaffs() {
    this.httpClient.get(environment.apiUrl + "/api/AStaff")
      .toPromise().then(response => {
        this.staffviewmodel = response as Staffviewmodel[];
        console.log(this.staffviewmodel);
      });
  }

  insertstaff(staffVm: Staffviewmodel): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/AStaff", staffVm);
  }

  // Get Staff
  getstaff(StaffId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/AStaff/" + StaffId);
  }

  deletestaff(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + "/api/AStaff/" + id);
  }
}

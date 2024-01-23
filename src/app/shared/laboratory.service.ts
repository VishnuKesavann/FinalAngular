import { Injectable } from '@angular/core';
import { Laboratory } from './laboratory';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
//add lab
insertLabTest(lb:Laboratory):Observable<any>{
  return this.httpClient.post(environment.apiUrl+"api/ALaboratory/",lb);
}


///get lab
getLab(testId: number): Observable<any> {
  // Construct the URL with the testId parameter
  const url = `${environment.apiUrl}api/ALaboratory/${testId}`;

  // Make the GET request with the constructed URL
  return this.httpClient.get(url);
}



updateLab(lab:Laboratory):Observable<any>{
  return this.httpClient.put(environment.apiUrl+"api/ALaboratory/",lab)
}
deleteLab(id:number){
  return this.httpClient.delete(environment.apiUrl+"api/ALaboratory/"+id);
}
}

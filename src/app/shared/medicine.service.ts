import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import{HttpClient} from '@angular/common/http';
import{environment} from 'src/environments/environment';
import { Observable } from 'rxjs';

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

//add lab
insertLabTest(medic:Medicine):Observable<any>{
  return this.httpClient.post(environment.apiUrl+"api/ALaboratory/",medic);
}


///get lab
getLab(testId: number): Observable<any> {
  // Construct the URL with the testId parameter
  const url = `${environment.apiUrl}api/ALaboratory/${testId}`;

  // Make the GET request with the constructed URL
  return this.httpClient.get(url);
}



updateLab(med:Medicine):Observable<any>{
  return this.httpClient.put(environment.apiUrl+"api/AMedicine/",med)
}
deleteLab(id:number){
  return this.httpClient.delete(environment.apiUrl+"api/AMedicine/"+id);
}

}

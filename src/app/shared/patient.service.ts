import { Injectable } from '@angular/core';
import { Patient } from './patient';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
//Declared a patient class
  patient:Patient[];
  constructor(private httpClient:HttpClient) { }
}

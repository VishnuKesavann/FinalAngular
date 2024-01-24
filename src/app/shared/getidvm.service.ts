import { Injectable } from '@angular/core';
import { Getidvm } from './getidvm';

@Injectable({
  providedIn: 'root'
})
export class GetidvmService {
  Getidvm:Getidvm[]

  constructor() { }
}

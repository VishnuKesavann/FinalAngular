import { Component, OnInit } from '@angular/core';
import {MedicineService} from 'src/app/shared/medicine.service';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.scss']
})
export class ListMedicineComponent implements OnInit {

  constructor(public medicineService: MedicineService) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.medicineService.BindListMedicine();
  }

}


import { Component, OnInit } from '@angular/core';
import { Medicine } from 'src/app/shared/medicine';
import { MedicineService } from 'src/app/shared/medicine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss']
})
export class UpdateMedicineComponent implements OnInit {

  MedicineId:number;
  medicine:Medicine=new Medicine();

  constructor(private route: ActivatedRoute,
    private medicineService:MedicineService) { }

  ngOnInit(): void {
    this.MedicineId=this.route.snapshot.params['MedicineId'];
    this.medicineService.getMedicine(this.MedicineId)
    .subscribe(data => {
      console.log(data);
      this.medicine = data;
      this.medicineService.formData = Object.assign({}, data);
    }, error => console.log(error));

}


  }



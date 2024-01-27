// update-medicine.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Import Router
import { Medicine } from 'src/app/shared/medicine';
import { MedicineService } from 'src/app/shared/medicine.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss']
})
export class UpdateMedicineComponent implements OnInit {

  medId: number;
  medicine: Medicine = new Medicine();

  constructor(
    private route: ActivatedRoute,
    private medicineservice: MedicineService,
    private toastr: ToastrService,  // Inject ToastrService
    private router: Router  // Inject Router
  ) { }

  ngOnInit(): void {
    this.medId = this.route.snapshot.params['MedicineId'];
    console.log("hello");
    console.log(this.medId);

    this.medicineservice.getMedicine(this.medId)
      .subscribe(data => {
        console.log(data);
        this.medicine = data;
        this.medicineservice.formData = Object.assign({}, data);
      }, error => console.log(error));
  }

  UpdateRecord(form: NgForm) {
    console.log("Updating");
    const updatedMedicine: Medicine = {
      MedicineId: this.medicineservice.formData.MedicineId,
      MedicineCode: form.value.MedicineCode,
      MedicineName: form.value.MedicineName,
      GenericName: form.value.GenericName,
      CompanyName: form.value.CompanyName,
      MedicineStock: form.value.MedicineStock,
      MedicineUnitPrice: form.value.MedicineUnitPrice,
      // ... include other properties
    };

    this.medicineservice.updateMedicine(updatedMedicine).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastr.success('Updated successfully', 'EMP APP 2024');
        this.router.navigate(['medicine/list-medicine']);
      },
      (error) => {
        console.error('Error updating medicine:', error);
        // Handle error appropriately, e.g., show an error message
      }
    );
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
}

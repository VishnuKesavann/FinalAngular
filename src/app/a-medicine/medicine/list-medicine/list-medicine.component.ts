import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/shared/medicine.service';
import { ToastrService } from 'ngx-toastr';  // Import ToastrService

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.scss']
})
export class ListMedicineComponent implements OnInit {
  filter: string = '';

  // Inject ToastrService in the constructor
  constructor(
    public medicineService: MedicineService,
    private router: Router,
    private toastr: ToastrService  // Inject ToastrService
  ) { }
  

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.medicineService.BindListMedicine();
  }

  updateMedicine(MedicineId:number){
    console.log("hello");
    console.log(MedicineId);
    this.router.navigate(['/medicine/update-medicine', MedicineId]);
  }

  deleteMedicine(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.medicineService.deleteMedicine(id).subscribe(
        response => {
          this.medicineService.BindListMedicine();
          // Use this.toastr instead of this.toastr
          this.toastr.success('Deleted successfully', 'CMSApp 2023');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

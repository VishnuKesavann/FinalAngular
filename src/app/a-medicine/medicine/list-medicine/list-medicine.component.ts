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
  page: number = 1;
  filter: string;
  constructor(
    public medicineService:MedicineService,
 
    private router: Router,
    private toastr: ToastrService
  ) { }
  

  ngOnInit(): void {
    console.log("Welcome to lifecycle hook")
    this.medicineService.BindListMedicine();
  }



  UpdateMedicine(medId: number) {
    
    console.log(medId);
    this.router.navigate(['/medicine/update-medicine', medId]);
  }

  DeleteMedicine(id:number){
    if(confirm('Are you sure to delete this Record?'))
    this.medicineService.deleteMedicine(id)
    .subscribe(response=>{
    this.medicineService.BindListMedicine();
    
  },
  err=>{
  console.log(err)
  });
  }
  back(){
    this.router.navigateByUrl("a-home/adminhome");
      }
}

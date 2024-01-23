import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from 'src/app/shared/medicine.service';
import { ToastrService } from 'ngx-toastr';
import { Medicine } from 'src/app/shared/medicine';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {

  constructor(public medicineservice:MedicineService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.medicineservice.formData=new Medicine();

  }

  onSubmit(form: NgForm) {
    let addId=this.medicineservice.formData.MedicineId;
    if (addId == 0 || addId == null) {
     // alert(addId);
     console.log(form.value);
     this.InsertRecord(form);
    
 
   }
   else {
     //alert("EmpId is greater")
     console.log(form.value);
     this.UpdateRecord(form);
   }
   }
 
   InsertRecord(form: NgForm){
     console.log("Inserting");
     this.medicineservice.insertLabTest(form.value).subscribe(
       (result)=>{
         console.log(result);
         
         this.resetForm(form);
         this.toastr.success('Added succesfully', 'EMS APP 2024');
         this.router.navigate(['lab/list-lab']);
       }
     )
   }
 
 
 
   UpdateRecord(form: NgForm){
     console.log("Updating");
     this.medicineservice.updateLab(form.value).subscribe(
       (result) => {
         console.log(result);
         this.resetForm(form);
         this.toastr.success('Updated succesfully', 'EMP APP 2024');
         this.router.navigate(['medicine/list-medicine']);
       }
     )
   }
 
   resetForm(form: NgForm) {
     if (form != null) {
       form.resetForm();
     }
   }

}

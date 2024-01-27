import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Laboratory } from 'src/app/shared/laboratory';
import { LaboratoryService } from 'src/app/shared/laboratory.service';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {

  constructor(public labservice:LaboratoryService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.labservice.formData=new Laboratory();
  }
  onSubmit(form: NgForm) {
    let addId=this.labservice.formData.TestId;
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
     this.labservice.insertLabTest(form.value).subscribe(
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
     this.labservice.updateLab(form.value).subscribe(
       (result) => {
         console.log(result);
         this.resetForm(form);
         this.toastr.success('Updated succesfully', 'EMP APP 2024');
         this.router.navigate(['lab/list-lab']);
       }
     )
   }
 
   resetForm(form: NgForm) {
     if (form != null) {
       form.resetForm();
     }
   }
   back(){
    this.router.navigateByUrl("lab/list-lab");
      }
}
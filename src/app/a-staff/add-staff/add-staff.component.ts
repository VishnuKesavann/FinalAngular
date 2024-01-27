import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';
import { ToastrService } from 'ngx-toastr';

import{StaffService} from 'src/app/Shared/staff.service'
import { NgForm } from '@angular/forms';
import { Staffviewmodel } from 'src/app/shared/staffviewmodel';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  getMinDate(): string {
    // Set the minimum date to an appropriate value
    // For example, assuming the minimum allowed date is January 1, 1900
    return '1900-01-01';
  }

  getMaxDate(): string {
    // Set the maximum date to 2001-12-31
    return '2001-12-31';
  }

  constructor(
    public staffdetailsVMservice:StaffviewmodelService,
    public staffService:StaffService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.staffdetailsVMservice.formData=new Staffviewmodel();
    this.staffService.formData=new Staff();  }

    onSubmit(form: NgForm) {
      let addId=this.staffdetailsVMservice.formData.StaffId;
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
      this.staffdetailsVMservice.insertstaff(form.value).subscribe(
        (result)=>{
          console.log(result);
          
          this.resetForm(form);
          this.toastr.success('Added succesfully', 'EMS APP 2024');
          this.router.navigate(['a-staff/list-staff']);
        }
      )
    }
  
  
  
    UpdateRecord(form: NgForm){
      console.log("Updating");
      this.staffService.updatestaff(form.value).subscribe(
        (result) => {
          console.log(result);
          this.resetForm(form);
          this.toastr.success('Updated succesfully', 'EMP APP 2024');
          this.router.navigate(['a-staff/list-staff']);
        }
      )
    }
  
    resetForm(form: NgForm) {
      if (form != null) {
        form.resetForm();
      }
    }
  
    back(){
      this.router.navigateByUrl("a-staff/list-staff");
        }
}

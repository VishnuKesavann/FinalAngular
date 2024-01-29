import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';
import { ToastrService } from 'ngx-toastr';
import { Staff } from 'src/app/shared/staff'
import{StaffService} from 'src/app/Shared/staff.service'
import { NgForm } from '@angular/forms';
import { Staffviewmodel } from 'src/app/shared/staffviewmodel';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
  getMinDOBDate(): string {
    const currentDate = new Date();
    const minDOBDate = new Date(currentDate);
    minDOBDate.setFullYear(currentDate.getFullYear() - 60); // Set 18 years ago
    return this.formatDate(minDOBDate);
  }

  getMaxDOBDate(): string {
    const currentDate = new Date();
    const maxDOBDate = new Date(currentDate);
    maxDOBDate.setFullYear(currentDate.getFullYear() - 18); // Set 60 years ago
    return this.formatDate(maxDOBDate);
  }
  getMinJoinDate(): string {
    const currentDate = new Date();
    const minJoinDate = new Date(currentDate);
    minJoinDate.setDate(currentDate.getDate() - 10); // Set 10 days ago
    return this.formatDate(minJoinDate);
  }
  getMaxJoinDate(): string {
    const currentDate = new Date();
    const minJoinDate = new Date(currentDate);
    minJoinDate.setDate(currentDate.getDate()); 
    return this.formatDate(minJoinDate);
  }//
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


 passwordInvalid = false;        
  viewClicked: boolean = false;
  listPatientRecord = [];
  isDuplicate: boolean = false;
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
          this.router.navigate(['staff/list-staff']);
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
      this.router.navigateByUrl("staff/list-staff");
        }
}

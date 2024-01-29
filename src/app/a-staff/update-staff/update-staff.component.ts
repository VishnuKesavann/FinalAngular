import { Component, OnInit } from '@angular/core';
import { Staff } from 'src/app/shared/staff';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from 'src/app/Shared/staff.service';
import { Staffviewmodel } from 'src/app/shared/staffviewmodel';
import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.scss']
})
export class UpdateStaffComponent implements OnInit {

  staffId: number;
  staff: Staff = new Staff();
  staffVM:Staffviewmodel=new Staffviewmodel();
  constructor(private route: ActivatedRoute,
    public staffservice: StaffService,
    public staffserviceVM:StaffviewmodelService,
    private router: Router,
    private toastr: ToastrService,
    public staffdetailsVMservice:StaffviewmodelService,) { }
    getMinDate(): string {
      // Set the minimum date to an appropriate value
      // For example, assuming the minimum allowed date is January 1, 1900
      return '1900-01-01';
    }
  
    getMaxDate(): string {
      // Set the maximum date to 2001-12-31
      return '2001-12-31';
    }
  ngOnInit(): void {
    
    this.staffId = this.route.snapshot.params['staffId'];
    console.log(this.staffId);
    this.staffserviceVM.getstaff(this.staffId)
      .subscribe(data => {
        console.log(data);
        this.staffVM = data;
        //change date formate to dd-mm-yy
        var datePipe = new DatePipe("en-UK");
        let formatedyear: any = datePipe.transform(data.StaffJoindate, 'yyyy-MM-dd');
        data.StaffJoindate = formatedyear;


        var datePipe = new DatePipe("en-UK");
        let formatedyear2: any = datePipe.transform(data.StaffDob, 'yyyy-MM-dd');
        data.StaffDob = formatedyear2; 



        //filling

        this.staffservice.formData = Object.assign({}, data);
      }, error => console.log(error));

  }

  onSubmit(form: NgForm) {
    let addId=this.staffservice.formData.StaffId;
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
  this.staffservice.updatestaff(form.value).subscribe(
    (result) => {
      console.log(result);
      this.resetForm(form);
      this.toastr.success('Updated succesfully', 'EMP APP 2024');
      this.router.navigate(['staff/list-staff']);
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

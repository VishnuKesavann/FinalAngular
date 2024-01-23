import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Staffviewmodel } from 'src/app/shared/staffviewmodel';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  constructor(
    public staffdetailsVMservice: StaffviewmodelService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.staffdetailsVMservice.formData = new Staffviewmodel();
  }

  onSubmit(form: NgForm) {
    let addId = this.staffdetailsVMservice.formData.StaffId;
    if (addId == 0 || addId == null) {
      console.log(form.value);
      this.InsertRecord(form);
    }
  }

  InsertRecord(form: NgForm) {
    console.log("Inserting");
    this.staffdetailsVMservice.insertstaff(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastr.success('Added successfully', 'EMS APP 2024');
        this.router.navigate(['/staff/list-staff']);
      }
    );
  }

  resetForm(form: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
}

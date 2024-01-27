import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
  page:number=1;
  filter: number;
  constructor(public staffservice:StaffviewmodelService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("Welcome to lifecycle hook")
    this.staffservice.BindListStaffs();
  }


  UpdateStaff(staffId: number) {
    
    console.log(staffId);
    this.router.navigate(['a-staff/edit-staff', staffId]);
  }
  back(){
    this.router.navigateByUrl("a-home/adminhome");
      }

  deleteStaff(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.staffservice.deletestaff(id).subscribe(
        response => {
          this.staffservice.BindListStaffs();
          this.toastr.success('Deleted successfully', 'CMSApp 2023');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

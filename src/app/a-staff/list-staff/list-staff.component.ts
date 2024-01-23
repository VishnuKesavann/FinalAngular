import { Component, OnInit } from '@angular/core';
import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {
  filter: string = '';

  constructor(public staffviewmodelService: StaffviewmodelService, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook");
    this.staffviewmodelService.BindListMedicine();
  }

  deleteStaff(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.staffviewmodelService.deletestaff(id).subscribe(
        response => {
          this.staffviewmodelService.BindListMedicine();
          this.toastr.success('Deleted successfully', 'CMSApp 2023');
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}

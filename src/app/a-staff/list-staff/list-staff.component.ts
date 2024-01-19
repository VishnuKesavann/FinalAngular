import { Component, OnInit } from '@angular/core';
import {StaffviewmodelService} from 'src/app/shared/staffviewmodel.service';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})
export class ListStaffComponent implements OnInit {

  constructor(public staffviewmodelService: StaffviewmodelService) { }

  ngOnInit(): void {

    console.log("welcome to life cycle hook")
    this.staffviewmodelService.BindListMedicine();

  }

}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Staffviewmodel } from 'src/app/shared/staffviewmodel';
import { StaffviewmodelService } from 'src/app/shared/staffviewmodel.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.scss']
})
export class UpdateStaffComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private staffservice: StaffviewmodelService,
    private staffserviceVM:Staffviewmodel) { }

  ngOnInit(): void {
    
  }

}

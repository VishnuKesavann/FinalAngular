import { Component, OnInit } from '@angular/core';
import {LabtestvmService} from 'src/app/shared/labtestvm.service'

@Component({
  selector: 'app-lablist',
  templateUrl: './lablist.component.html',
  styleUrls: ['./lablist.component.scss']
})
export class LablistComponent implements OnInit {

  constructor(public labtestvmService:LabtestvmService) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.labtestvmService.BindListEmployee();
  }

}

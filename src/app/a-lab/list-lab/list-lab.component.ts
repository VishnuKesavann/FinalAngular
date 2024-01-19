import { Component, OnInit } from '@angular/core';
import {LaboratoryService} from 'src/app/shared/laboratory.service';
@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.scss']
})
export class ListLabComponent implements OnInit {

  constructor(public laboratoryService: LaboratoryService) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.laboratoryService.BindListMedicine();
  }

}

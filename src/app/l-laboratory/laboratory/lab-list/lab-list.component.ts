import { Component, OnInit } from '@angular/core';
import { LabtestvmService} from 'src/app/shared/labtestvm.service';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss']
})
export class LabListComponent implements OnInit {

  constructor(public labtestvmService: LabtestvmService) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.labtestvmService.BindListEmployee();
  }

}

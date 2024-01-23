import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LaboratoryService} from 'src/app/shared/laboratory.service';

@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.scss']
})
export class ListLabComponent implements OnInit {
  [x: string]: any;

  constructor(public laboratoryService: LaboratoryService,
    private router:Router) { }

  ngOnInit(): void {
    console.log("welcome to life cycle hook")
    this.laboratoryService.BindListMedicine();
  }
  updateLab(testId: number) {
    console.log("hello");
    console.log(testId);
    this.router.navigate(['/lab/update-lab', testId]);
  }
  
 deleteLab(id: number) {
  if (confirm('Are you sure to delete this record?')) {
    this.laboratoryService.deleteLab(id)
      .subscribe(
        response => {
          this.laboratoryService.BindListMedicine();
          this.toastr.success('Deleted successfully', 'CMSApp 2023');
        },
        err => {
          console.log(err);
        }
      );
  }
}

}
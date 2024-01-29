// list-lab.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratoryService } from 'src/app/shared/laboratory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-lab',
  templateUrl: './list-lab.component.html',
  styleUrls: ['./list-lab.component.scss']
})
export class ListLabComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public labService: LaboratoryService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
    this.labService.BindListLab();
  }

  UpdateLab(labId: number) {
    console.log("Hello");
    console.log(labId);
    this.router.navigate(['lab/update-lab', labId]);
  }

  Deletelab(id: number) {
    if (confirm('Are you sure to delete this Record?'))
      this.labService.deleteLab(id)
        .subscribe(response => {
          this.labService.BindListLab();
        },
        err => {
          console.log(err);
        });
  }

  back() {
    this.router.navigateByUrl("a-home/adminhome");
  }
}

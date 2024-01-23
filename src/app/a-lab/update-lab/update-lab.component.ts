import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Laboratory } from 'src/app/shared/laboratory';
import { LaboratoryService } from 'src/app/shared/laboratory.service';

@Component({
  selector: 'app-update-lab',
  templateUrl: './update-lab.component.html',
  styleUrls: ['./update-lab.component.scss']
})
export class UpdateLabComponent implements OnInit {
  
  labId:number;
 lab:Laboratory=new Laboratory();

  constructor(private route: ActivatedRoute,
    private labservice:LaboratoryService) { }

  ngOnInit(): void {
    this.labId=this.route.snapshot.params['labId'];
    this.labservice.getLab(this.labId)
    .subscribe(data => {
      console.log(data);
      this.lab = data;
      this.labservice.formData = Object.assign({}, data);
    }, error => console.log(error));

  }

  }



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
      this.labId = +this.route.snapshot.params['labId']; // Convert to a number
      if (isNaN(this.labId)) {
        // Handle the case when labId is not a valid number
        console.error('Invalid labId:', this.labId);
        return;
      }
    
      this.labservice.getLab(this.labId)
        .subscribe(
          (data: any) => {
            console.log(data);
            this.lab = data;
            this.labservice.formData=Object.assign({},data);
            console.log(this.labservice.formData.TestId);
            console.log(FormData)
          },error=>console.log(error));
        
    }
    
  }



import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/patient';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {
  PatientId:number;
  patient:Patient=new Patient();
  constructor(private route:ActivatedRoute,private patientService:PatientService) { }

  ngOnInit(): void {
    this.PatientId=this.route.snapshot.params['PatientId'];
    console.log("Populating")
    console.log(this.PatientId);
    //subscriber
    this.patientService.getPatient(this.PatientId).subscribe(
      data=>{
        console.log(data);
        this.patient=data;
        var datePipe=new DatePipe("en-UK");
        let formatedyear:any=datePipe.transform(data.PatientDob,'yyyy-MM-dd');
        data.PatientDob=formatedyear;
        
        this.patientService.formData_P=Object.assign({},data);
        console.log(FormData);
      },error=>console.log(error)
    );
  }

}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DiagnosisformService } from 'src/app/shared/diagnosisform.service';
import { Diagnosisform } from 'src/app/shared/diagnosisform';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.scss']
})
export class AddDiagnosisComponent implements OnInit {


  public AppointmentID:number;
  DefaultLabTestStatus:string="PENDING";
  dosages: string[] = this.GenerateDosages();
  public medicineQuantity: number = 0;


  constructor(private toastr : ToastrService, private router : Router, public service : DiagnosisformService, private route:ActivatedRoute,
    private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {

    this.AppointmentID=this.route.snapshot.params['AppointmentId'];
    console.log("Welcome to Diagnosis Form");
    console.log(this.AppointmentID);
    this.service.BindListLabTest();
    this.service.BindListMedicines();
    this.service.formDiagnosis=new Diagnosisform();  // to reset the form if it's autoifilled
    this.service.formDiagnosis.AppointmentId = this.AppointmentID;
    this.service.formDiagnosis.LabTestStatus=this.DefaultLabTestStatus;
    this.service.formDiagnosis.MedicineQuantity=this.medicineQuantity;
    this.cdr.detectChanges();

  }


  onSubmit ( form : NgForm){
    let addid =
    this.service.formDiagnosis.DiagnosisId;
    if (addid == 0 || addid == null) {
      console.log(form.value);
      this.insertRecord(form);
    }
    else {
      alert("Inside else");
      // this.updateRecord(form);
    }
  }


  insertRecord(form : NgForm) {
    console.log("inserting");
    this.service.insertDiagnosis(form.value).
    subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastr.success('added successfully', 'CMS App 2024');
        // this.router.navigate(['doctor/list']);
        if (this.AppointmentID) {
          console.log("from patient history" + this.AppointmentID);
          this.router.navigate(['doctor/list', this.AppointmentID]);
        }
  
      }
    )
  }

  // reset form

  resetForm (form : NgForm)
  {
    if(form != null)
    {
      form.resetForm();
    }
  }


  GenerateDosages(): string[] {
    const dosages = [];
  
    for (let morning = 0; morning <= 1; morning++) {
      for (let noon = 0; noon <= 1; noon++) {
        for (let night = 0; night <= 1; night++) {
          const dosageString = `${morning}-${noon}-${night}`;
          dosages.push(dosageString);
        }
      }
    }
  
    return dosages;
  }
  
  calculateMedicineQuantity(): void {
    const dosageParts = this.service.formDiagnosis.Dosage.split('-').map(part => +part);
    const days = this.service.formDiagnosis.DosageDays;
  
    // Calculate the sum of dosage parts
    const sumOfDosageParts = dosageParts.reduce((sum, part) => sum + part, 0);
  
    // Calculate the medicine quantity
    this.medicineQuantity = sumOfDosageParts * days;
  }
  
  ViewPatientDetails()
    {
      if (this.AppointmentID) {
        console.log("from patient history" + this.AppointmentID);
        this.router.navigate(['doctor/detail', this.AppointmentID]);
      }
    }
  


}

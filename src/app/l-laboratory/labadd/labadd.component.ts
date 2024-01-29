import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LabReportVMService } from 'src/app/shared/lab-report-vm.service'
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { LabtestvmService } from 'src/app/shared/labtestvm.service';
import {GetidvmService} from 'src/app/shared/getidvm.service'
import { Getidvm } from 'src/app/shared/getidvm';


@Component({
  selector: 'app-labadd',
  templateUrl: './labadd.component.html',
  styleUrls: ['./labadd.component.scss']
})
export class LabaddComponent implements OnInit {
  idvm1:Getidvm=new Getidvm();
  constructor(public labreportService:LabReportVMService,
     public labtestvmService:LabtestvmService,
    private toastr:ToastrService, private router : Router,
    public getidvmService:GetidvmService ,public getIdVm:GetidvmService,private route:ActivatedRoute) { }
    getCurrentDate(): string {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

  ngOnInit(): void {
   // Retrieve the query parameters from the route
   const queryParams = this.route.snapshot.queryParams;

   // Now queryParams contains the values passed in the URL
   console.log('Query Parameters:', queryParams);

   // Use the values as needed
 
   this.labreportService.formData_L.LabPrescId = queryParams.LabPrescId;


    // Now 'lab' contains the object passed from the list page
    console.log('Lab Object:',this.labtestvmService.formData_L);
    this.getIdVm.BindListIDVM(this.labreportService.formData_L.LabPrescId).subscribe(
      data=>
      {
        console.log(data);
        this.idvm1=data;
        this.getidvmService.getidvm1=Object.assign({},data);
        console.log(FormData);
      },error=>console.log(error)
    );
    this.labreportService.formData_L.TestId=this.getidvmService.getidvm1.TestId;
    this.labreportService.formData_L.AppointmentId=this.getidvmService.getidvm1.AppointmentId;
    this.labreportService.formData_L.StaffId=this.getidvmService.getidvm1.StaffId;
  }
  
  

  onSubmit(form: NgForm){  
    console.log('Entering the On Submit')
    let addId =this.labreportService.formData_L.ReportId;
    if(addId ==0 || addId == null){
      console.log(form.value);
      this.InsertRecord(form);
    }
    else{
      //this.updateRecord(form);
    }
  }

  InsertRecord(form: NgForm){
    console.log("inserting");
    console.log(this.labtestvmService.formData_L.AppointmentId)
    this.labreportService.insertLabReport(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.router.navigate(['labtechnician/report',result]);
        this.resetForm(form);
        //alert
        this.toastr.success('added successFully','CMS App 2024');
        
      }
    )

  }
  //  updateRecord(form:NgForm){
  //    console.log("Updating");
  //    this.labreportService.updateLabReport(form.value).subscribe(
  //      (result)=>{
  //      console.log(result);
  //      this.toastr.success('Updated Successfully', 'EMS App 2024');
  //      this.router.navigate(['emplist'])
  //      }
  //    )
  //  }
  resetForm(form:NgForm){
    if(form!=null){
     form.resetForm(); 
  
    }
  }
  generateReport(AppointmentId : number) {
    
  // Navigate to the lab report form
  this.router.navigate(['/labtechnician/report', AppointmentId]);
}
goBack() {
  this.router.navigate(['/labtechnician/list-lab']);
}


}

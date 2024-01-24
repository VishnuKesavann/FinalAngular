import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LabReportVMService } from 'src/app/shared/lab-report-vm.service'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LabtestvmService } from 'src/app/shared/labtestvm.service';
import {GetidvmService} from 'src/app/shared/getidvm.service'


@Component({
  selector: 'app-labadd',
  templateUrl: './labadd.component.html',
  styleUrls: ['./labadd.component.scss']
})
export class LabaddComponent implements OnInit {

  constructor(public labreportService:LabReportVMService,
     public labtestvmService:LabtestvmService,
    private toastr:ToastrService, private router : Router,
    public getidvmService:GetidvmService) { }

  ngOnInit(): void {
    
  }
  

  onSubmit(form: NgForm){  
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
    this.labreportService.insertLabReport(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
        //alert
        this.toastr.success('added successFully','CMS App 2024');
        this.router.navigate(['labtech/report']);
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
//   generateReport() {
    
//   // Navigate to the lab report form
//   this.router.navigate(['/labtech/report']);
// }
goBack() {
  this.router.navigate(['/labtech/lablist']);
}

}

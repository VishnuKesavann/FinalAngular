import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { LabReportVMService } from 'src/app/shared/lab-report-vm.service';
import { ToastrService } from 'ngx-toastr';
import { LabbillvmService} from 'src/app/shared/labbillvm.service';
import { Labbillvm } from 'src/app/shared/labbillvm';
import { DatePipe } from '@angular/common';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  ReportId:number;
  billvm:Labbillvm=new Labbillvm();

  constructor( private router : Router,
    private toastr:ToastrService,
    public labbillvmService:LabbillvmService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Welcome to Lab bill Generation")
    this.ReportId=this.route.snapshot.params['ReportId'];
    this.labbillvmService.BindBillGeneration(this.ReportId).subscribe(
      data =>{
        console.log(data);
        this.billvm=data;
        var datePipe = new DatePipe("en-UK");
        let formatedyear:any = datePipe.transform(data.C,'yyyy-MM-dd');
        data.C=formatedyear;
        this.labbillvmService.formData_L=Object.assign({},data);
        console.log(FormData);
      }
      ,error=>console.log(error)
    );
    
  }
//generate report
  generateReport(lab:any){
    this.labbillvmService.formData_L.LabbillId= lab.LabbillId;
    this.labbillvmService.formData_L.C= lab.C;
    this.labbillvmService.formData_L.TotalAmount= lab.TotalAmount;
    this.labbillvmService.formData_L.Amount= lab.Amount;
    this.labbillvmService.formData_L.PatientId= lab.PatientId;
    this.labbillvmService.formData_L.TestId= lab.TestId;
    this.labbillvmService.formData_L.LabreportId= lab.LabreportId;
    this.labbillvmService.formData_L.AppointmentId= lab.AppointmentId;
    this.labbillvmService.formData_L.PatientName= lab.PatientName;
    console.log(this.labbillvmService.formData_L);

    this.router.navigate(['/labtechnician/bill'],{
      queryParams: {
        LabbillId:lab.LabbillId,
        C:lab.C,
        TotalAmount:lab.TotalAmount,
        Amount:lab.Amount,
        PatientId:lab.PatientId,
        TestId:lab.TestId,
        LabreportId:lab.LabreportId,
        AppointmentId:lab.AppointmentId,
        PatientName:lab.PatientName,


      }
    })

  }


  printLabReport() {
    // You can implement the print logic here
    alert('Please connect the printer.');
    window.print();
  }
  goBack() {
    this.router.navigate(['/labtechnician/report/:AppointmentId']);
  }
 

  
}



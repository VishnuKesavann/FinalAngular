import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabComponent } from './a-lab/lab/lab.component';
import { LoginComponent } from './a-login/login/login.component';
import { MedicineComponent } from './a-medicine/medicine/medicine.component';
import { StaffComponent } from './a-staff/staff/staff.component';
import { DoctorComponent } from './d-doctor/doctor/doctor.component';
import { PharmasistComponent } from './p-pharmasist/pharmasist/pharmasist.component';
import { AppointmentComponent } from './r-appointment/appointment/appointment.component';
import { PatientComponent } from './r-patient/patient/patient.component';
import { LaboratoryComponent } from './l-laboratory/laboratory/laboratory.component';
import { AuthGuardService } from 'src/app/shared/auth-guard.service';
import { UserloginComponent } from './a-login/userlogin/userlogin.component';

const routes: Routes = [
  {path:'lab',component:LabComponent,
  loadChildren:()=>import('./a-lab/a-lab.module').then(x=>x.ALabModule)
 },

{
  path: '', redirectTo: 'login/userlogin', pathMatch: 'full' },

{path:'login',component:LoginComponent,
  loadChildren:()=>import('./a-login/a-login.module').then(x=>x.ALoginModule)
  },

{path:'medicine',component:MedicineComponent,
  loadChildren:()=>import('./a-medicine/a-medicine.module').then(x=>x.AMedicineModule)
  },

{path:'staff',component:StaffComponent,
  loadChildren:()=>import('./a-staff/a-staff.module').then(x=>x.AStaffModule)
  },


// {
//   path: '', redirectTo: 'doctor/list', pathMatch: 'full' },
{path:'doctor',component:DoctorComponent,
  loadChildren:()=>import('./d-doctor/d-doctor.module').then(x=>x.DDoctorModule)
  },

{path:'labtechnician',component:LaboratoryComponent,
  loadChildren:()=>import('./l-laboratory/l-laboratory.module').then(x=>x.LLaboratoryModule)
  },


{path:'pharmasist',component:PharmasistComponent,
  loadChildren:()=>import('./p-pharmasist/p-pharmasist.module').then(x=>x.PPharmasistModule)
  },


{path:'appointment',component:AppointmentComponent,
  loadChildren:()=>import('./r-appointment/r-appointment.module').then(x=>x.RAppointmentModule)
  },


{path:'patient',component:PatientComponent,
  loadChildren:()=>import('./r-patient/r-patient.module').then(x=>x.RPatientModule)
  },
{
  path: '',
  component: UserloginComponent,
  canActivate: [AuthGuardService], // Apply the guard here
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

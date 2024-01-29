import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { UserloginService } from 'src/app/shared/userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
  
   //declare variables
   loginForm: FormGroup;
   isSubmitted = false;
   error: string;
   

  constructor(private formBuilder: FormBuilder, private userloginService: UserloginService, private router: Router) { }

  ngOnInit(): void {
    this.userloginService.isLogin=false;
     //we are creating a reactive form model
     this.loginForm = this.formBuilder.group({
      //form control name fields
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }

  //get all controls for validation
  get formControls() {
    return this.loginForm.controls;
  }

  loginCredentials() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    console.log("Submitted form for credentials");

    // form is invalid
    if (this.loginForm.invalid) {
      this.error = "Sorry! Invalid entry, please try again";
    }

    // form is valid
    if (this.loginForm.valid) {
      console.log("Submitted with valid");

      // calling method for 
      this.userloginService.loginVerify(this.loginForm.value).subscribe(
        response => {
          this.error = '';
          console.log(response);

          // set session storage and local storage (browser->inspect->application)
          // session storage --> change from browser to browser
          sessionStorage.setItem('USERNAME', response.userName);
          sessionStorage.setItem('ACCESS_ROLE', response.rId.toString());
          sessionStorage.setItem('TOKEN', response.token);

          // local storage --> same for all browsers
          localStorage.setItem('USERNAME', response.userName);
          localStorage.setItem('ACCESS_ROLE', response.rId.toString());
          localStorage.setItem('TOKEN', response.token);

          if (response == null) {
            this.error = "Invalid username and/or password";
          } else if (response.rId == 1303) {
            this.userloginService.isLogin=true;
            this.router.navigateByUrl('staff/list-staff');
            console.log('Admin');
            this.userloginService.setAuthenticationState(true);
          } else if (response.rId == 1302) {
            this.userloginService.isLogin=true;
            this.router.navigateByUrl('patient/r-home');
            console.log('Reception');
            this.userloginService.setAuthenticationState(true);
          }
          else if (response.rId == 301) {
            this.userloginService.isLogin=true;
            this.router.navigateByUrl('doctor/list');
            console.log('Doctor');
            this.userloginService.setAuthenticationState(true);
          }
          else if (response.rId == 304) {
            this.userloginService.isLogin=true;
            this.router.navigateByUrl('pharmasist/   ');
            console.log('Pharmasist');
            this.userloginService.setAuthenticationState(true);
          } 
          else if (response.rId == 302) {
            this.userloginService.isLogin=true;
            this.router.navigateByUrl('labtechnician/list-lab');
            console.log('Labtech');
            this.userloginService.setAuthenticationState(true);
          }else {
            this.error = "Sorry, you are not allowed to access the system";
          }
        },
        // response end
        error => {
          console.log(error);
          this.error = "Invalid username or password, please try again";
        }
      );
    }
  }
}

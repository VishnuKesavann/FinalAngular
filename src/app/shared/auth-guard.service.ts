import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserloginService } from 'src/app/shared/userlogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userLoginService: UserloginService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.userLoginService.isAuthenticatedSubject.getValue();

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['login/userlogin']);
      return false;
    }
  }
}

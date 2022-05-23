import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LOGIN_URL } from "../pages/login/login.component";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let url: string = state.url;
  
      return this.checkLogin(url);
    }
  
    checkLogin(url: string): boolean {
      if (this.authService.isAuthenticated()) { return true; }
  
      // Store the attempted URL for redirecting
      this.authService.redirectUrl = url;
  
      // Navigate to the login page with extras
      this.router.navigate([LOGIN_URL]);
      return false;
    }
  
  }
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {
  constructor(private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let hasRole = false;

    let token = localStorage.getItem("token");

    if(token == undefined || !hasRole) this.router.navigate(['/']);

    return false;
  }

}
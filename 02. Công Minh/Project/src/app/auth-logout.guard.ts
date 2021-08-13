import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthencationService } from './Services/authencationService/authencation.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLogoutGuard implements CanActivate {
  constructor(private authService: AuthencationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.getAuthenticationModel()) {
      console.error('Login Error');
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }
}

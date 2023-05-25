import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStoreServiceService } from '../services/local-store-service.service';

@Injectable({
  providedIn: 'root'
})
export class NombreDelGuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private local:  LocalStoreServiceService
  ) {}

  canActivate():any {
    const isAuthenticated = this.local.obtenerValor('localUser');
    
    if (isAuthenticated) {
      return true;
    } else {
      return this.router.navigateByUrl('/login')
    }
  }
}
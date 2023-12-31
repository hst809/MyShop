import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth:AuthService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
   return  this.auth.user$.pipe(map(usr=>
          {
            if (usr) return true;
            this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
            return false;
          }
        )
      );
  }
}

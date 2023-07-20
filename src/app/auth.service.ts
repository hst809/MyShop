import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import {User} from 'firebase'
import { appUser } from './models/app-user';
import { Observable,  switchMap } from 'rxjs';
import { UserService } from './user.service';
import { of } from 'rxjs';
import {GoogleAuthProvider} from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$ :Observable<User|any>;

  constructor(private userService:UserService, private afAuth :AngularFireAuth,private route:ActivatedRoute) {
    this.user$=afAuth.authState;
   }

login(){
    let returnUrl=this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
   this.afAuth.signInWithRedirect(new GoogleAuthProvider);
}

logout(){
  this.afAuth.signOut();
  
}

get appUser$():Observable<appUser|any>{
  return this.user$.pipe(
    switchMap((user: User | null) => {
      if (user)
        return this.userService.get(user.uid).valueChanges();
     
        return of(null);
      
    })
  );
}

}

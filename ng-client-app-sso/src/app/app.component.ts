import { Component } from '@angular/core';
import { SocialAuthService  } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: SocialUser | null; 

  constructor(private authService: SocialAuthService,  private http: HttpClient) 
  { 
	this.user = null;
	this.authService.authState.subscribe((user: SocialUser) => {
    console.log(user);
    // if we have a user, authenticate with our webapi using the idtoken
    if (user) {
      this.http.post<any>('https://localhost:6001/user/authenticate', { idToken: user.idToken }).subscribe((authToken: any) => {
      console.log(authToken);
       })		  
    }
	  this.user = user;
	});
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  }  
}

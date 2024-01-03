import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, GoogleSigninButtonModule  } from '@abacritt/angularx-social-login';
import { HttpClientModule } from "@angular/common/http";

async function getGoogleLoginConfig(): Promise<SocialAuthServiceConfig> {
  const clientId = await fetchGoogleClientId()
  return Promise.resolve(
    {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(clientId)
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig)
}

/**
 * get google client id from backend
 */
async function fetchGoogleClientId(): Promise<string> {
  let url = 'assets/appsettings.json'
  let response = await fetch(url,
    {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  let data = await response.json()
  //change here to your backend response structure
  return data.googleClientId
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: getGoogleLoginConfig()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

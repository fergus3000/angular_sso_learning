# NgClientAppConfigSso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

It is just meant to learn how to use Google SSO with @abacritt/angularx-social-login against a .NET WebAPI

I have added a dockerfile to containerize the app.
Appsettings can be set from environment vars.

The image can be built with the following (replace nerdctl with docker as appropriate)
```nerdctl build -t simple_containerized_ng_app .```
Then run the container with
```nerdctl run -d -p 4200:80 --name ng_app_1 -e GOOGLE_CLIENTID=xxxxx.apps.googleusercontent.com -e API_URL=yyyyy simple_containerized_ng_app```

TODO:
Make a reusable auth service that I can inject into some/all components
Use regexes to allow modifying any appsetting from env vars
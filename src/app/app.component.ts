import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialAuthService, SocialLoginModule } from '@abacritt/angularx-social-login';
import { GoogleSignInComponent } from './components/google-sign-in/google-sign-in.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    GoogleSignInComponent,
    SocialLoginModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  authSubscription!: Subscription;
  title = 'ng-google-custom-sign-in-button-standalone';
  constructor (private socialAuthService: SocialAuthService) {}

  ngOnInit() {
    this.authSubscription = this.socialAuthService.authState.subscribe((user) => {
      console.log('user', user);
    });
  }

  googleSignin(googleWrapper: any) {
    googleWrapper.click();
    console.log('ho!');
  }
}

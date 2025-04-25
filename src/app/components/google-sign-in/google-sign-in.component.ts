import { Component, EventEmitter, Output } from '@angular/core';

// window.onload로 구글 로그인 api를 호출하던 것을 대체한다.
declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css'],
})
export class GoogleSignInComponent {
  @Output() loginWithGoogle: EventEmitter<any> = new EventEmitter<any>();
  // 실제로는 표시되지 않는, 구글 버튼을 선언하였다.
  // 이게 있어야 로그인 동작을 한다.
  createFakeGoogleWrapper = () => {
    const googleLoginWrapper = document.createElement('div');
    googleLoginWrapper.style.display = 'none';
    googleLoginWrapper.classList.add('custom-google-button');
    document.body.appendChild(googleLoginWrapper);
    window.google.accounts.id.renderButton(googleLoginWrapper, {
      type: 'icon',
      width: '200',
    });
   
    const googleLoginWrapperButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLElement;

    return {
      click: () => {
        googleLoginWrapperButton?.click();
      },
    };
  };
  // 로그인 기능을 위한 버튼을 동작시킨다.
  handleGoogleLogin() {
    this.loginWithGoogle.emit(this.createFakeGoogleWrapper());
  }
}
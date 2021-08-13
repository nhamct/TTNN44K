import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  NzNotificationPlacement,
  NzNotificationService,
} from 'ng-zorro-antd/notification';
import { Manager } from '../model/authenticattion-model';
import { AuthencationService } from '../Services/authencationService/authencation.service';
import { ServerHttpService } from '../Services/serverService/server-http.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  @Input('crrUserDisplayName') crrUserDisplayName!: ElementRef;

  localStorageKey: string = 'user';

  validateForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authenccationService: AuthencationService,
    private serverHttp: ServerHttpService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  public getAuthenticationModel(): any {
    return localStorage.getItem('user');
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
      // this.router.navigate(['/home'])
    }
    if (
      this.validateForm.valid
    ) {
      this.serverHttp
        .getManager(this.validateForm.getRawValue().userName)
        .subscribe((data) => {
          const manager = data;

          if (manager.length > 0) {
            const formValue = this.validateForm.getRawValue();
            if (
              manager[0].username === formValue.userName &&
              manager[0].password === formValue.password
            ) {
              this.createNotificationSuccess('success');
              this.router.navigate(['/home']);
              this.setAuthenticationModel(manager[0]);
            }
            else if (
              manager[0].username !== formValue.userName ||
              manager[0].password !== formValue.password
            ) {
              this.createNotificationError('error');
            }
          }
          else {
            this.createNotificationError('error');
          }
        });
    }
    else {
      this.createNotificationError('error');
    }
  }

  createBasicNotification(position: NzNotificationPlacement): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      { nzPlacement: position }
    );
  }

  createNotificationSuccess(type: string): void {
    this.notification.create(
      type,
      'Đăng nhập thành công',
      'Chào mừng bạn đến với website!.'
    );
  }

  createNotificationError(type: string): void {
    this.notification.create(
      type,
      'Đăng nhập không thành công',
      'Tên đăng nhập hoặc mật khẩu không đúng!.'
    );
  }

  public setAuthenticationModel(authenticationModel: Manager): any {
    this.authenccationService.displayName = authenticationModel.name;
    return (window.localStorage[this.localStorageKey] = JSON.stringify(
      authenticationModel
    ));
  }
}

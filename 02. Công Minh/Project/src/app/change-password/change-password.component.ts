import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Manager } from '../model/authenticattion-model';
import { ServerHttpService } from '../Services/serverService/server-http.service';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

export function comparePassword(c: AbstractControl) {
  const v = c.value;
  return v.newPassword === v.cnewPassword
    ? null
    : {
        passwordnotmatch: true,
      };
}
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  localStorageKey: string = 'user';
  changePassForm!: FormGroup;
  confirmModal?: NzModalRef;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private serverHttp: ServerHttpService,
    private notification: NzNotificationService,
    private router: Router,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.changePassForm = this.fb.group({
      oldPassword: [null, Validators.required],

      pw: this.fb.group(
        {
          newPassword: [null, Validators.required],
          cnewPassword: [null, Validators.required],
        },
        {
          validator: comparePassword,
        }
      ),
    });
  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn thay đổi mật khẩu không?',
      nzOkText: 'Có',
      nzCancelText: 'Không',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 0);
          this.router.navigate(['/login']);
        }).catch(() => console.log('Oops errors!'))
    });
  }

  submitForm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Bạn có chắc chắn thay đổi mật khẩu không?',
      nzOkText: 'Có',
      nzCancelText: 'Không',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 0);
          for (const i in this.changePassForm.controls) {
            this.changePassForm.controls[i].markAsDirty();
            this.changePassForm.controls[i].updateValueAndValidity();
          }
          if (
            this.changePassForm.valid
          ) {
            var x = JSON.parse(this.getAuthenticationModel());
            this.serverHttp.getManager(x.username).subscribe((data) => {
              const manager = data;
              if (manager.length > 0) {
                const formValue = this.changePassForm.getRawValue();

                const termObject = {
                  "id": x.id,
                  "username": x.username,
                  "password": formValue.pw.newPassword,
                  "name": x.name
                }

                if (manager[0].password === formValue.oldPassword && (formValue.newPassword === formValue.cnewPassword)) {
                  this.serverHttp.updatePassword(termObject).subscribe((data) => {
                    this.createNotificationSuccess("success")
                    this.router.navigate(['/home'])
                  });
                }
                else {
                  this.createNotificationError("error")
                }
              }
            });
          }
          else {
            this.createNotificationError("error")
          }
        }).catch(() => console.log('Oops errors!'))
    });

  }

  createNotificationSuccess(type: string): void {
    this.notification.create(
      type,
      'Thành công',
      'Thay đổi mật khẩu thành công!.'
    );
  }

  createNotificationError(type: string): void {
    this.notification.create(
      type,
      'Thất bại',
      'Thay đổi mật khẩu không thành công. Mật khẩu có thể không chính xác!.'
    );
  }

  public getAuthenticationModel(): any {
    return localStorage.getItem(this.localStorageKey);
  }
}

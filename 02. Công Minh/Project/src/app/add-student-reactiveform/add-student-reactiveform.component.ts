import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ServerHttpService } from '../Services/serverService/server-http.service';
// import { ServerHttpService } from '../Services/server-http.service';

export function ValidatePhone(
  control: AbstractControl
): { [key: string]: any } | null {
  if (
    (control.value && control.value.length < 10) ||
    (control.value && control.value.length > 13)
  ) {
    return { phoneNumberInvalid: true };
  }
  return null;
}

export function ValidateRequired(
  control: AbstractControl
): { [key: string]: any } | null {
  if (control.value.length === 0) {
    return { invalid: true };
  }
  return null;
}

@Component({
  selector: 'app-add-student-reactiveform',
  templateUrl: './add-student-reactiveform.component.html',
  styleUrls: ['./add-student-reactiveform.component.scss'],
})
export class AddStudentReactiveformComponent implements OnInit {
  public newStudentForm: FormGroup;

  constructor(private modal: NzModalRef, private fb: FormBuilder, private serverHttp: ServerHttpService) {
    var date = new Date();
    var timestamp = Math.floor(date.getTime() / 1000.0);
    this.newStudentForm = this.fb.group({
      name: ['', [ValidateRequired]],
      email: ['', [ValidateRequired, Validators.email]],
      address: ['', [ValidateRequired]],
      phone: ['', [ValidateRequired, ValidatePhone]],
      dateSubmited: [timestamp],
      isEdit: [false],
    });
  }

  ngOnInit(): void {}

  public numbersOnlyValidator(event: any) {
    const pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[a-zA-Z]/g, '');
    }
  }

  onSubmit(): void {
    const newStudentObj = this.newStudentForm.value;
    this.serverHttp.addStudent(newStudentObj).subscribe((data) => {
    })
    this.modal.destroy();
  }
}

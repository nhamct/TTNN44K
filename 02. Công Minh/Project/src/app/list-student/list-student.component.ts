import {
  ChangeDetectorRef,
  ElementRef,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddStudentReactiveformComponent } from '../add-student-reactiveform/add-student-reactiveform.component';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { ServerHttpService } from '../Services/serverService/server-http.service';
import { Student } from '../model/students';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss'],
})
export class ListStudentComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number = 10;
  termObject!: Student;
  studentAll!: Student[];
  studentShow!: Student[];
  pageNumbers: number[] = [];

  constructor(
    private modalService: NzModalService,
    private cdr: ChangeDetectorRef,
    private serverHttp: ServerHttpService
  ) {}

  ngOnInit(): void {
    this.serverHttp.getStudents().subscribe((data) => {
      this.studentAll = data.sort((a: Student, b: Student) => {
        return b.id - a.id;
      });

      for (
        let i = 1;
        i <= Math.ceil(this.studentAll.length / this.pageSize);
        i++
      ) {
        this.pageNumbers?.push(i);
      }
      this.studentShow = this.studentAll.slice(0, this.pageSize);
    });
  }

  // getStudents(sizes: number): void {
  //   this.studentAll = students.slice(0, this.pageSize);
  // }

  getData(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.studentShow = this.studentAll.slice(
      (pageIndex - 1) * this.pageSize,
      pageIndex * this.pageSize
    );
  }

  increaseOrDecreasePage(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.studentShow = this.studentAll.slice(
      (this.pageIndex - 1) * this.pageSize,
      this.pageIndex * this.pageSize
    );
  }

  public remove(idStudent: number): void {
    const modal = this.modalService.create({
      nzTitle: 'Xóa thông tin sinh viên',
      nzContent: DeletePopupComponent,
      nzCancelText: 'Hủy',
      nzOkText: 'Xóa',
      nzOnOk: () => {
        this.serverHttp.deleteStudent(idStudent).subscribe((data) => {
          this.serverHttp.getStudents().subscribe((data) => {
            this.studentAll = data.sort((a: Student, b: Student) => {
              return b.id - a.id;
            });
            this.studentAll = data;
            this.pageNumbers = [];
            for (
              let i = 1;
              i <= Math.ceil(this.studentAll.length / this.pageSize);
              i++
            ) {
              this.pageNumbers?.push(i);
            }
            if (this.pageIndex > this.pageNumbers.length) {
              this.getData(this.pageNumbers.length);
            } else {
              this.getData(this.pageIndex);
            }
          });
        });
      }
    });
  }

  addStudentReactive(): void {
    const modal = this.modalService.create({
      nzTitle: 'Thêm thông tin sinh viên',
      nzContent: AddStudentReactiveformComponent,
      nzFooter: null,
    });
    modal.afterClose.subscribe(() => {
      this.serverHttp.getStudents().subscribe((data) => {
        this.studentAll = data.sort((a: Student, b: Student) => {
          return b.id - a.id;
        });
        this.studentAll = data;
        this.pageNumbers = [];
        for (
          let i = 1;
          i <= Math.ceil(this.studentAll.length / this.pageSize);
          i++
        ) {
          this.pageNumbers?.push(i);
        }
        this.getData(this.pageIndex);
      });
    });
  }

  public edit(student: Student): void {
    this.studentAll.forEach((student) => {
      student.isEdit = false;
    });
    this.termObject = { ...student };
    student.isEdit = true;
  }

  public save(student: Student): void {
    student.isEdit = false;
    this.serverHttp.updateStudent(student).subscribe((data) => {});
  }

  public cancel(student: Student, index: number): void {
    student.isEdit = false;
    // student = {...this.termObject};
    // this.cdr.detectChanges();
    student.name = this.termObject.name;
    student.address = this.termObject.address;
    // console.log(this.studentShow);

    // this.studentAll[student] = this.termObject;
    // if (this.studentShow[index]) {
    //   this.studentShow[index] = this.termObject;
    // }
  }

  changePageSize(pageSize: number): void {
    this.pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.studentAll.length / this.pageSize);
      i++
    ) {
      this.pageNumbers?.push(i);
    }
    let totalPages = this.pageNumbers.length;
    if (this.pageIndex > totalPages) {
      this.pageIndex = totalPages;
    }
    this.pageSize = pageSize;
    this.getData(this.pageIndex);
  }
}

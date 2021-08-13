import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { debounceTime } from 'rxjs/operators';
import { AddStudentReactiveformComponent } from '../add-student-reactiveform/add-student-reactiveform.component';
import { ServerHttpService } from '../Services/serverService/server-http.service';
import { Student } from '../model/students';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pageIndex: number = 1;
  pageSize: number = 10;
  textSearch?: String;

  searchTerm$ = new BehaviorSubject<string>('');

  constructor(
    private modalService: NzModalService,
    private serverHttp: ServerHttpService
  ) {}

  editCache: { [key: string]: { edit: boolean; data: Student } } = {};
  listOfData: Student[] = [];

  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  startDelete(student: Student): void {
    // this.editCache[id].edit = true;
    this.serverHttp.deleteStudent(student.id).subscribe(() => {
      this.serverHttp.getStudents().subscribe((students) => {
        const data = students;
        this.listOfData = data.sort((a: Student, b: Student) => {
          return b.dateSubmited - a.dateSubmited;
        });
        this.updateEditCache();
      });
    });
  }

  cancelEdit(id: number): void {
    const index = this.listOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false,
    };
  }

  saveEdit(student: Student): void {
    const index = this.listOfData.findIndex((item) => item.id === student.id);
    Object.assign(this.listOfData[index], this.editCache[student.id].data);
    this.editCache[student.id].edit = false;
    this.serverHttp.updateStudent(student).subscribe(() => {});
  }

  updateEditCache(): void {
    this.listOfData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item },
      };
    });
  }

  addRow(): void {
    const modal = this.modalService.create({
      nzTitle: 'Thêm thông tin sinh viên',
      nzContent: AddStudentReactiveformComponent,
      nzFooter: null,
    });
    modal.afterClose.subscribe(() => {
      this.serverHttp.getStudents().subscribe((students) => {
        const data = students;
        this.listOfData = data.sort((a: Student, b: Student) => {
          return b.dateSubmited - a.dateSubmited;
        });
        this.updateEditCache();
      });
    });
  }

  getPageIndex(pageIndex: number) {
    this.pageIndex = pageIndex;
  }

  getPageSizeChange(pageSizeChange: number) {
    this.pageSize = pageSizeChange;
  }

  reload() {
    this.textSearch = '';
    this.serverHttp.getStudents().subscribe((students) => {
      const data = students;
      this.listOfData = data.sort((a: Student, b: Student) => {
        return b.dateSubmited - a.dateSubmited;
      });
      this.updateEditCache();
    });
  }

  ngOnInit(): void {
    this.reload();
    this.searchTerm$.pipe(debounceTime(600)).subscribe((_) => {
      this.serverHttp.searchStudent(this.textSearch).subscribe((students) => {
        const data = students;

        this.listOfData = data.sort((a: Student, b: Student) => {
          return b.dateSubmited - a.dateSubmited;
        });
        this.updateEditCache();
      });
    });
  }
}

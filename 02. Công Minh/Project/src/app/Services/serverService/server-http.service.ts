import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, retry } from 'rxjs/operators';
import { Manager } from 'src/app/model/authenticattion-model';
import { Student } from 'src/app/model/students';

@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };



  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }

  public getStudents(): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public addStudent(newData: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/students`;
    return this.httpClient
      .post<any>(url, newData, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public deleteStudent(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${id}`;
    return this.httpClient
      .delete<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updateStudent(student: Student): Observable<any> {
    const url = `${this.REST_API_SERVER}/students/${student.id}`;
    return this.httpClient
      .put<Student>(url, student, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public searchStudent(text: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/students?q=${text}`;
    // ?q=nguyễn
    return this.httpClient
      .get<Student>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getManager(username: string): Observable<any> {
    const url = `${this.REST_API_SERVER}/manager/?username=${username}`;
    return this.httpClient
      .get<any>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  public updatePassword(manager: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/manager/${manager.id}`;
    return this.httpClient
      .patch<Manager>(url, manager, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // http://localhost:3000/manager/?username=


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}

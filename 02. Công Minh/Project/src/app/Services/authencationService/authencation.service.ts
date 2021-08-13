import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BooleanLiteral } from 'typescript';
import { ServerHttpService } from '../serverService/server-http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthencationService {
  public displayName: string;

  constructor() {
    this.displayName = '';
  }

  public getAuthenticationModel(): any {
    return localStorage.getItem('user');
  }
}

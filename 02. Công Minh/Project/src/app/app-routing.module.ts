import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  // {path: 'list', component: ListStudentComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginFormComponent},
  {path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

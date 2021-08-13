import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListStudentComponent } from './list-student/list-student.component';
import { FmPhonePipe } from './fm-phone.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { AppRoutingModule } from './app-routing.module';
import { AddStudentReactiveformComponent } from './add-student-reactiveform/add-student-reactiveform.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LoginFormComponent } from './login-form/login-form.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { ChangePasswordComponent } from './change-password/change-password.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
@NgModule({
  declarations: [
    AppComponent,
    ListStudentComponent,
    FmPhonePipe,
    AddStudentReactiveformComponent,
    HomeComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DeletePopupComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    NzModalModule,
    NzButtonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzInputModule,
    NzPopconfirmModule,
    NzFormModule,
    NzSelectModule,
    NzIconModule,
    NzEmptyModule,
    NzNotificationModule,
    NzDropDownModule
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class AppModule {}

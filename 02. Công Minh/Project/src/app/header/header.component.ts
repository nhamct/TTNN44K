import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { Manager } from '../model/authenticattion-model';
import { AuthencationService } from '../Services/authencationService/authencation.service';
import { ServerHttpService } from '../Services/serverService/server-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  confirmModal?: NzModalRef;
  constructor(private router: Router, private modal: NzModalService, public serverHttp: ServerHttpService, public authencationService: AuthencationService) {
    this.authencationService.displayName = JSON.parse(this.authencationService.getAuthenticationModel()).name;
  }
  // displayName = JSON.parse(this.authencationService.getAuthenticationModel())

  ngOnInit(): void {

  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Bạn có muốn đăng xuất không?',
      nzOkText: 'Có',
      nzCancelText: 'Không',
      // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 0);
          this.router.navigate(['/login']);
          localStorage.removeItem('user');
        }).catch(() => console.log('Oops errors!'))
    });
  }


  public getAuthenticationModel(): any {
    return localStorage.getItem('user');
  }

  public openChangePassForm(): void {
    this.router.navigate(['/change-password']);
  }
}

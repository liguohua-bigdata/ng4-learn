import {Component, Inject, Input, OnInit} from '@angular/core';
import {MailService} from '../mail.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {
  constructor(
    @Inject(MailService) private mailService,
    @Inject('apiUrl') private apiUrl,
  ) {

  }

  ngOnInit() {
  }

}

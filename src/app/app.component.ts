import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  msg = 'hello,this message come form father component! ';
  // 依赖注入router
  constructor(private router: Router) {
  }

  gotoHome() {
    // 使用router进行导航
    this.router.navigate(['/']);
  }

  gotoProduction() {
    // 使用router进行导航
    this.router.navigate(['/production']);
  }
  gotoEvent() {
    // 使用router进行导航
    this.router.navigate(['/event']);
  }
}

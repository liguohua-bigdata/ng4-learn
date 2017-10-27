import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProductionComponent} from './production/production.component';
import {Page404Component} from './page404/page404.component';
import {EventComponent} from './event/event.component';
import {MailService} from './mail.service';
import { ChildComponent } from './child/child.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductionComponent,
    Page404Component,
    EventComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // 配置服务
  providers: [
    MailService,
    // 非Type类型的service
    {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  // 配置此模块的主component
  bootstrap: [AppComponent]
})
export class AppModule {
}

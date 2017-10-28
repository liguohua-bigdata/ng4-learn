import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  // 获取鼠标事件
  onClick(event, value) {
    console.log(event);
    console.log(value);
  }

  // 获取键盘事件
  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
}

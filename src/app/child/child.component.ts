import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() inputMsg: string;
  message: string;
  message2= '测试单向数据绑定';

  constructor() {
  }

  ngOnInit() {
    // this.message2 = '单向数据绑定';
  }
}

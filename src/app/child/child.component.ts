import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  message3:string="hello output!";
  @Output() update = new EventEmitter<{text: string}>();


  ngOnInit() {
    // this.message2 = '单向数据绑定';
  }
}

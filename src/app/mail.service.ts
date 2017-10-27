import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  message  = '该消息来自MailService';
  notifications: string[] = [
    '天之骄子，加入修仙之路群',
    'Shadows，加入修仙之路群',
    'Keriy，加入修仙之路群'
  ];
  constructor() { }
}

import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'element-input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css']
})
export class ElementInputComponent {
  @Input() typeFile: string = ''; 
  @Input() name: string = ''; 
  @Input() ngayOff: string = '';

  @Output() messageEvent = new EventEmitter();

  handleLogin() {
    this.messageEvent.emit('');
  }
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tasklist-button',
  templateUrl: './tasklist-button.component.html',
  styleUrls: ['./tasklist-button.component.scss']
})
export class TasklistButtonComponent implements OnInit {
  @Input() text: string = ''
  @Input() color: string = ''
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  title: string = 'Task List'

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('btn click in header')
  }

}

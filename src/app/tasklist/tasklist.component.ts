import { Component, OnInit } from '@angular/core';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  title: string = 'Task List'
  showAddTask:boolean = false
  subscription?: Subscription

  constructor(
    private uiService:UiService
  ) {
    this.subscription = this.uiService.onToggle()
      .subscribe(value => this.showAddTask = value)
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask()
  }

}

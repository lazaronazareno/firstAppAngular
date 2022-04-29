import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  task: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe( (tasks) => {
      this.task = tasks
    })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() =>{
      this.task = this.task.filter( t => t.id !== task.id )
      })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService.addTask(task)
    .subscribe((task) => {
      this.task.push(task)
    })
  }

}

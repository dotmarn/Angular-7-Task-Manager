import { Component, OnInit } from '@angular/core';
import { Task } from '../../../Task';
import { TaskService } from 'src/app/service/task.service';
import { MessageService } from 'src/app/service/message.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  data: any;
  constructor(private ts:TaskService, private msgService:MessageService) { }

  ngOnInit() {
    this.getAllTasks();
    this.msgService.getMessage().subscribe((dotman) => {
      this.getAllTasks();
    })
  }

  getAllTasks() {
    this.ts.getTask().subscribe(dotman => {
      this.tasks = dotman

    })
  }

}

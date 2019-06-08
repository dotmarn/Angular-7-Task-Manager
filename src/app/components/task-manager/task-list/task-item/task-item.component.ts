import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/service/task.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
 @Input()task:Task
  constructor(private ts:TaskService, private msgService:MessageService) { }

  ngOnInit() {
  }

  onDelete() {
    this.ts.deleteTask(this.task.id).subscribe((dotman) => {
      console.log(dotman)
      this.msgService.setMessage('something happened');

    })
  }

}

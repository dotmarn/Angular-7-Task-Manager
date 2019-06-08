import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task:Task;
  constructor(private route:ActivatedRoute, private ts:TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.ts.getSingle(data.id).subscribe((dotman) => {
        this.task = dotman;
      });
    })
  }

}

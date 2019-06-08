import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../../service/task.service";
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  public title:string = '';
  formSubmitted: boolean = false;
  constructor(private ts:TaskService, private msgService:MessageService) { }

  ngOnInit() {
  }

  Add(e) {
    this.formSubmitted = true;
    e.preventDefault();
    this.ts.addTask(this.title).subscribe((dotman) => {

      this.title = "";
      this.formSubmitted = false;
      this.msgService.setMessage("Something happened");
    })
  }

}

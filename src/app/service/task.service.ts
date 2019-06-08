import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Task } from '../Task';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  headers: Headers = new Headers();
  options:any;
  public server:string = 'http://127.0.0.1:8000/api/'

  constructor(private http:HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({headers: this.headers});
  }

  addTask(title): Observable<Task> {

    const newTask = new Task(title);
    return this.http.post<Task>(this.server+ 'add', newTask)

  }

  getTask(): Observable <Task[]> {
    return this.http.get<Task[]>(this.server+'fetch')

  }

  deleteTask(no): Observable <Task> {
    const newTask = {
      id: no,
      title:'not set',
      date: new Date(),
      status: false
    }

    return this.http.post<Task>(this.server+'delete', newTask);
  }

  getSingle(no): Observable <Task> {
    const newTask = {
      id: no,
      title:'not set',
      date: new Date(),
      status: false
    }

    return this.http.post<Task>(this.server+'getSingle', newTask);
  }

}

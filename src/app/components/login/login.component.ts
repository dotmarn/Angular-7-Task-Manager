import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    if (name === password) {
      this.router.navigateByUrl('task')
    }else {
      this.router.navigateByUrl('login')
    }

    console.log('Username: ' + name + 'Password: '+ password)
  }

}

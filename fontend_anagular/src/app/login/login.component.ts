import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';           
import { Route, Router, RouterLink } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  username=''
  password=''
  invalidLogin = false
  message='Invaild password or username'
  constructor(private studentService :StudentService,
    private router:Router) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if (this.studentService.trainerLogin(this.username, this.password)
    ) {
      this.router.navigate(['/trainer'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
  
}


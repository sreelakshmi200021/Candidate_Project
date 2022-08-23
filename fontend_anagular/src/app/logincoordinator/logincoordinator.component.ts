import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-logincoordinator',
  templateUrl: './logincoordinator.component.html',
  styleUrls: ['./logincoordinator.component.css']
})
export class LogincoordinatorComponent implements OnInit {

  username=''
  password=''
  invalidLogin = false
  message='Invaild password or username'
  constructor(private studentService :StudentService,
    private router:Router) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if (this.studentService.coordinatorLogin(this.username, this.password)
    ) {
      this.router.navigate(['/coordinator'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
  
}

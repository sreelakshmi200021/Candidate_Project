import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  employee: Employee = new Employee();
  constructor(private studentService :StudentService,
    private router:Router) { }


  ngOnInit(): void {
  }

  saveCandidate() {
    this. studentService.createCandidate(this.employee).subscribe(data=> {
      console.log(data);
      this.goToCandidateList();
    },
    error => console.log(error));

  }
  goToCandidateList(){
    this.router.navigate(['/employee']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveCandidate();
  }

  
}

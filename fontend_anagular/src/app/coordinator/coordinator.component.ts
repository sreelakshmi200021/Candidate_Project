import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {
    searchTerm = '';
    term = '';
  
    employee!: Employee[];
    // constructor(private httpClient: HttpClient) { }
    constructor(private studentService :StudentService,
        private router:Router) { }
  
    ngOnInit(): void {
      // this.studentService.get<stud[]>('./assets/students.json')
      //   .subscribe((data: stud[]) => {
      //     this.students = data;
          this.getCandidate();
        }
        private getCandidate(){
          this.studentService.getCandidateList().subscribe(data=>this.employee=data);
        }
    }
  
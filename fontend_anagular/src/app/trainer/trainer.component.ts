import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  employee!: Employee[];

  constructor(private studentService :StudentService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCandidate();
  }
  private getCandidate(){
    this.studentService.getCandidateList().subscribe(data=>this.employee=data);
  }

  goToCandidateList(){
    this.router.navigate(['/employee']);
  }

  updateCandidate(id:number){
    this.router.navigate(['update-candidate',id]);
  }
}

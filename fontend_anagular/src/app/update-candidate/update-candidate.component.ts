import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  employee: Employee = new Employee();

  @Input() viewMode =false;
  @Input() currentUpdateCandidate: Employee={
    id: '',
    name: '',
    contact: 0,
    batch: 0,
    course: '',
    disability: '',
    year: 0,
    work: '',
    swot: '',
    certificate: '',
    sign: ''
  };
  message='';

  constructor(private studentService :StudentService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    if(!this.viewMode){
      this.message='';
      this.getCandidate(this.route.snapshot.params["id"])
    }
  }

  getCandidate(id:string):void{
    this.studentService.getCandidateById(id)
    .subscribe({
      next:(data)=>{
        this.currentUpdateCandidate=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    });
  }
  updateCandidate():void{
    this.message='';

    this.studentService.updateCandidate(this.currentUpdateCandidate.id, this.currentUpdateCandidate)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.message=res.message? res.message:'this candidate was updated successfully';
      },
      error:(e)=>console.error(e)
    });
  }

  
}

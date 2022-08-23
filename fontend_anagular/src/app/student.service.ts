import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  StudentService(value: any) {
    throw new Error('Method not implemented.');
  }
  
  private baseURL="http://localhost:8080/employees"
  constructor(private httpClient: HttpClient) { }

  createCandidate(employee : Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getCandidateList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  getCandidateById(id:any): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateCandidate(id:any, data:any):Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`,data);
  }

  trainerLogin(username: string, password: string) {
    if (username === "trainer" && password === "trainer") {
      return true;
    } else {
      return false;
    }
  }

  coordinatorLogin(username: string, password: string) {
    if (username === "coordinator" && password === "coordinator") {
      return true;
    } else {
      return false;
    }
  }
}
 
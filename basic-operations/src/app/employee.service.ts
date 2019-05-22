import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private url="assets/data/employee.json";

  getEmployees() : Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this.url);
  }
}

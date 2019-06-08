import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:8102/api/mongo/emp/getall";

  getEmployees() : Observable<IEmployee[]>{

    return this.http.get<IEmployee[]>(this.url);
  }
}

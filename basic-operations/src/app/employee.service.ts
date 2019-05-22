import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){

    return [
      {"id":1,"name":"Vijay","age":"12"},
      {"id":2,"name":"Vijay1","age":"13"},
      {"id":2,"name":"Vijay2","age":"14"},
    ];
  }
}

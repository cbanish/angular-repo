import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.styl']
})
export class EmployeelistComponent implements OnInit {

  public employees=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employees=this.employeeService.getEmployees();
    console.log(this.employees);
  }

}

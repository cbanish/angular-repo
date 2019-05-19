import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.styl']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  successClass:string="text-success";

  public hasErrors:boolean=true;
  public isSuccess:boolean=false;
  public highlightColor="orange";

  public messageClasses = {
  "text-success":!this.hasErrors,
  "text-failure":this.hasErrors,
  "text-special":this.isSuccess,
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  public greeting="";

  public name="";

  public displayCondition=true;

  public color="red";

  public months=['january','feb','mar','apr'];

  public messageClasses = {
  "text-success":!this.hasErrors,
  "text-failure":this.hasErrors,
  "text-special":this.isSuccess,
  }

  onClick(event){
    console.log(event);
    this.greeting="Welcome to event binding";
  }

  onClickBind(value){
    console.log(value);
  }

 @Input('parentData') paramName :string; 

 @Output() public  childEvent = new EventEmitter();

 fireEvent(){
 this.childEvent.emit('From Test Component');
 }

}

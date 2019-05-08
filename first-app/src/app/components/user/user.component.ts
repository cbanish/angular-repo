import { Component, OnInit } from '@angular/core';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.styl']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:{
    street:string,
    city:string,
    state:any

  };
  address1:Address;
  hobbies:any[];

  constructor() { }

  ngOnInit() {
    this.name='Ramesh';
    this.age=28;
    this.email='test@gmail.com';
    this.address={
      street:'1st street',
      city:'NY',
      state:'CAL'
    }
    this.hobbies=['Listenng Music','Watching cricket',1];
    this.address1={
      street:'2nd street',
      city:'NY',
      state:'CAL'
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:any

}

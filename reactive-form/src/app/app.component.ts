import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    registrationForm=new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
        address:new FormGroup({
            city: new FormControl(''),
            state: new FormControl(''),
            postalcode: new FormControl('')
    
        })
    });

 loadAPI(){
     this.registrationForm.setValue({
        username: 'Anish',
        password: 'admin',
        confirmPassword: 'admin',
        address:{
            city: 'Chennai' ,
            state: 'TN',
            postalcode: 600053
        }
     });
 }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ageValidator } from './validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form:FormGroup;

  constructor(private fb:FormBuilder) {
    this.form =this.fb.group({
      username: ['',[Validators.minLength(3),Validators.required]],
      name: '',
      age: ['',[ageValidator,Validators.required]
        // [Validators.min(18)],
        ],
      salary: ['',[Validators.max(1000000), Validators.required]],
      password: ['',Validators.required]
    });
  }

  onSubmit(){
    //console.log(this.form.controls.age.value)
    console.log(this.form.controls);
    this.form.markAsTouched();
  }

  ngOnInit() {
  }

}

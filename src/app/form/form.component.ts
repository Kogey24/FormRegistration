import { Component,  OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  [x: string]: any;
  registrationForm!: FormGroup;
  showForm: boolean = true;
  formData: any;

 
  

  constructor(
    private fb: FormBuilder
  ) {};
  

  ngOnInit(): void {
  // create api call
  // create a form based on api fields
  this.registrationForm= this.fb.group({
    fullname:['', Validators.required],
    contactinfo:['', Validators.required],
    position:['', Validators.required],
    department:['',Validators.required],
    status:[''],
  })

  }
    
    onSubmit(){
      if(this.registrationForm.valid){
      console.warn(this.registrationForm.value);
    } else{
      this.registrationForm.markAllAsTouched();
    }
  }
}
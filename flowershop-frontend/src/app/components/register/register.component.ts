import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
/* import { AuthService } from 'src/app/_services/auth.service'; */
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, 
    /* private service:AuthService, */ private router:Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(

      { 
        fullname: ['', [Validators.required]],
        username: ['',[Validators.required,Validators.minLength(6),
          Validators.maxLength(20)]],
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]


      }
    );
  }

  proceedregistration(){
    
  }


  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

}

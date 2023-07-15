import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
/* import Validation from '../../utils/validation';
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    
  });
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(

      { 
        username: ['',[Validators.required,Validators.minLength(6),
          Validators.maxLength(20)]],
        password:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]



      }
    );
  }
  onSubmit(): void {

    this.submitted = true;

    if (this.form.invalid) {
      return;

    }

    console.log(JSON.stringify(this.form.value, null, 2));
    
  }



}

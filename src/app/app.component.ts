import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-bootstrap';
  
  constructor(private modalService: NgbModal, private router: Router, private dialogRef : MatDialog, ) {
  }

  
}

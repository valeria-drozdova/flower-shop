import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProductsComponent } from '../products/products.component';
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css']
})
export class AccountDialogComponent {

  constructor(private modalService: NgbModal, private router: Router, private dialogRef : MatDialog, ) {
  }

  closeModal(){
    this.dialogRef.closeAll();
  }

  openLoginDialog(){
	
    this.dialogRef.open(LoginComponent,{
  
      height: '600px',
      width: '600px', 
    }
    );
    }
  
    openRegisterDialog(){
    
      this.dialogRef.open(RegisterComponent,{
  
        height: '600px',
        width: '600px', 
      });
      }

}

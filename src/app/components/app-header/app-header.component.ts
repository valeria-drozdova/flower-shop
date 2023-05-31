import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';
import { ProductsComponent } from '../products/products.component';
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit{
  constructor(private modalService: NgbModal, private router: Router, private dialogRef : MatDialog, ) {
  }


  ngOnInit() {
    
  }

  openMenu() {
    this.dialogRef.open(AccountDialogComponent,{
  
      height: '600px',
      width: '600px', 
    }
    );
    
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

      navigate() { 
        this.router.navigate(['/item']); 
      } 

}

import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {

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

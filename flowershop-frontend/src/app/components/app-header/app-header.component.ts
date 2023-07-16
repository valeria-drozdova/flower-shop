import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';


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
    this.dialogRef.open(HeaderMenuComponent,{
  
      height: '600px',
      width: '600px', 
    }
    );
    
  }

}

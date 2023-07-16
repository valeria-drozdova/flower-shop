import { Component} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef  } from '@angular/material/dialog';

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

import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class IntroComponent{
  
  constructor(private router: Router){
  }

  navigate() { 
    this.router.navigate(['/item']); 
  } 



}

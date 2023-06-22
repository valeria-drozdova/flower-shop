import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Flower } from 'src/app/models/flower';
import { FLOWERS } from 'src/app/mock-flowers';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class IntroComponent{

  flowers = FLOWERS;

  constructor(private router: Router){
  }

  navigate() { 
    this.router.navigate(['/item']); 
  } 

  Hello(){
    this.router.navigate(['/item']); 
  }

}

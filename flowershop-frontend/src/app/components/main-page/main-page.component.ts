import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Flower } from 'src/app/models/flower';
import { ItemComponent } from '../item/item.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios, {isCancel, AxiosError} from 'axios';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class IntroComponent{

  constructor(private router: Router, private httpClient: HttpClient){
    this.flowers = [];
  }

flowers!: any[]; 

  navigate() { 
    this.router.navigate(['/item']); 
  } 

  Hello(){
    this.router.navigate(['/item']); 
  }
  async getFlowers() {
    
    try {
      const response = await axios.get('http://localhost:3000/flowers');
      this.flowers=response.data;
      console.log(this.flowers);
    } catch (error) {
      console.error(error);
    }

  }

  ngOnInit() {
    this.getFlowers();
    
  }
  

}

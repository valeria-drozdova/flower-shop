import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import axios, {isCancel, AxiosError} from 'axios';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{

  constructor(private router: Router, private httpClient: HttpClient){
    this.flowers = [];
  }

flowers!: any[]; 

  navigate() { 
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

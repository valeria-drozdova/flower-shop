import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { IntroComponent } from '../main-page/main-page.component';
import { Flower } from 'src/app/models/flower';
/* import { FlowerService } from 'src/app/_services/item.service'; */
import axios, {isCancel, AxiosError} from 'axios';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  constructor(private router:Router,
    private route : ActivatedRoute, 
    /* private flowerService:FlowerService */){
      this.flower;
    }

flower!: any;

  async getFlowerById(id: string) {
    
    try {
      const response = await axios.get(`http://localhost:3000/flowers/${id}`);
      this.flower=response.data;
      console.log(this.flower);
    } catch (error) {
      console.error(error);
    }

  }

  async getFlower() {
    const id = String(this.route.snapshot.paramMap.get('ids'));
    return this.getFlowerById(id);

  }

  ngOnInit(): void {
    this.getFlower();
  }


}

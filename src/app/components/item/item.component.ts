import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { IntroComponent } from '../main-page/main-page.component';
import { Flower } from 'src/app/models/flower';
import { FlowerService } from 'src/app/_services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  flower: Flower | undefined;

 /* 1. router to item/:id
 2. get id in ItemComponent.ts
 3. find the item with the id 
 4. display item that found */
  
  constructor(private router:Router,
    private route : ActivatedRoute, 
    private flowerService:FlowerService){}


  ngOnInit(): void {
    this.getFlower();
  }

  getFlower(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flowerService.getFlower(id).subscribe(flower => this.flower=flower);

  }

}

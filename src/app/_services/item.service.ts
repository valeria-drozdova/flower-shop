import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flower } from '../models/flower';
import axios, {isCancel, AxiosError} from 'axios';



@Injectable({ providedIn: 'root' })
export class FlowerService {

  constructor() { }

  async getFlowers(): Promise <Observable<Flower[]>>{
    const response = await axios.get('http://localhost:3000/flowers');
    const flowers = of(response.data);
    console.log(flowers);
    return flowers;
  }

  async getFlower(id: string): Promise <Observable<Flower>> {
    const response = await axios.get(`http://localhost:3000/flowers/${id}`);
    const flower = of(response.data);
    console.log("flower:",flower);
  
    return flower;
    
  }
}
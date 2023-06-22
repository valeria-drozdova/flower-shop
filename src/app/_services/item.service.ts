import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flower } from '../models/flower';
import { FLOWERS } from '../mock-flowers';


@Injectable({ providedIn: 'root' })
export class FlowerService {

  constructor() { }

  getFlowers(): Observable<Flower[]> {
    const flowers = of(FLOWERS);
    return flowers;
  }

  getFlower(id: number): Observable<Flower> {
    const flower = FLOWERS.find(f => f.id === id)!;
    return of(flower);
  }
}
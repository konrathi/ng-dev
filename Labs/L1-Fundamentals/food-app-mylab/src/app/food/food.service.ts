import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient : HttpClient) {}

  getFood(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>(environment.foodApi);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  constructor() { }

  @Input() foodItem: FoodItem[] = [];
  @Output() foodItemSelected = new EventEmitter<FoodItem>();
  @Output() foodItemDeleted = new EventEmitter<FoodItem>();


  ngOnInit() {}

  onFoodItemSelected(f: FoodItem) {
    this.foodItemSelected.emit(f);
  }

  onFoodItemDeleted(f: FoodItem) {
    this.foodItemDeleted.emit(f);
  }

}

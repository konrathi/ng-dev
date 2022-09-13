import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})

export class FoodContainerComponent implements OnInit {

  foodItems: FoodItem[] = [];
  current: FoodItem | null = null;

  constructor(private fs: FoodService) { }

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.foodItems = data;
    });
  }

  onFoodItemSelected(f: FoodItem) {
    this.current = { ...f };
    // this.current = Object.assign({},f)
  }

  onFoodItemDeleted(f: FoodItem) {
    console.log("mock deleting ", f);
  }

  onFoodItemSaved(f: FoodItem) {
    const clone = Object.assign([], this.foodItems) as Array<FoodItem>;
    let idx = clone.findIndex((c) => c.id == f.id);
    if (idx > -1) {
      clone[idx] = f;
    } else {
      clone.push(f);
    }
    this.foodItems = clone;
  }

}

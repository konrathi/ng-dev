import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss']
})
export class FoodEditComponent implements OnInit {

  @Input() foodItem: FoodItem = new FoodItem();
  @Output() saveFoodItem: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  constructor() { }

  ngOnInit() {
    console.log(this.foodItem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['foodItem']) {
      console.log('receiving updated foodItem:', changes['foodItem']);
    }
  }

  onFoodItemSaved() {
    this.saveFoodItem.emit(this.foodItem);
  }

}

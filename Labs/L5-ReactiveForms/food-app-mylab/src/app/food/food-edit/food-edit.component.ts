import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent implements OnInit {
  
  foodItem: FoodItem = new FoodItem();
  
  foodForm = this.fb.group({
    name: [this.foodItem.name, Validators.required],
    price: [this.foodItem.price],
    calories: [this.foodItem.calories],
  });

  constructor(private fb: UntypedFormBuilder) {}

  @Input() food: FoodItem = new FoodItem();
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  ngOnInit() {}

  doSave() {
    console.log("food to save", this.food);
    this.saveFood.emit(this.food);
  }
}

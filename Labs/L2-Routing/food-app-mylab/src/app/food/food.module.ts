import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { FormsModule } from '@angular/forms';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';

@NgModule({
  declarations: [
    FoodComponent,
    FoodContainerComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    FormsModule
  ]
})
export class FoodModule { }

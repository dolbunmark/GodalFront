import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductAllComponent } from './product-all/product-all.component';
import {BasketComponent} from "./basket/basket.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  {
    path:"",component:LoginComponent
  },
  {
    path:"products",component:ProductAllComponent
  },
  {
    path:"basket",component:BasketComponent
  },
  {
    path:"order",component:HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

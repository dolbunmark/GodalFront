import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../product-all/product-all.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BasketService} from "./basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  json: any = [];

  constructor(private basketService: BasketService,
              private productService: ProductService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
   this.update()
  }

  logout() {
    this.productService.logout().subscribe((data => {
      console.log(data);
    }))
  }


  history() {
    this.router.navigate(["/order"]);
  }

  basket() {
    this.router.navigate(["/basket"]);
  }

  allProducts() {
    this.router.navigate(["/products"]);
  }

  buy() {
    this.http.post(`http://localhost:4200/api/orders`, {}).subscribe();
    console.log("ok")
    this.history();
  }

  minus(name: String) {
    this.update()
    this.basketService.decrementProduct(name).subscribe();
    this.update();
  }

  plus(name: String) {
    this.update()
    this.basketService.addProduct(name).subscribe();
    this.update()

  }

  cancel(name: String) {
    this.update()
    this.basketService.deleteProduct(name).subscribe();
    this.update();
  }

  update() {
    this.basketService.getBasket().subscribe((data => {
      this.json = data;
      // console.log(this.json.basketDtoList);
    }))
  }
}

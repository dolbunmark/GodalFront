import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from './product-all.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {

  json: any = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data => {
      this.json = data;
    }))
  }


  addProduct(name: String) {
    this.productService.addProduct(name).subscribe((data => {
      console.log(data);
    }))
  }

  logout() {
    this.productService.logout().subscribe((data => {
      console.log(data);
      this.router.navigate([""]);
    }))
  }

  basket() {
    this.router.navigate(["/basket"])
  }

  allProducts() {
    this.router.navigate(["/products"]);
  }

  history() {
    this.router.navigate(["/order"]);
  }
}

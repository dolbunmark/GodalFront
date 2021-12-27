import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product-all/product-all.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  json: any = [];

  constructor(private productService: ProductService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getHistory().subscribe(
      (data => {
        this.json = data
        console.log(this.json)
      })
    );
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

  getHistory() {
    return this.http.get<any>(`http://localhost:4200/api/orders`);
  }


}

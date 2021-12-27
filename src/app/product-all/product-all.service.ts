import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpclien: HttpClient) {
  }

  getProducts() {
    return this.httpclien.get<any>(`http://localhost:4200/api/products`);
  }

  addProduct(name: String) {
    return this.httpclien.post<any>(`http://localhost:4200/api/baskets`, {"title": name})
  }

  logout() {
    return this.httpclien.post<any>(`http://localhost:4200/api/logout`, {});
  }


}

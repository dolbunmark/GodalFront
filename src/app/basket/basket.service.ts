import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BasketService {

  constructor(private httpclien: HttpClient) {
  }


  getBasket() {
    return this.httpclien.get<any>(`http://localhost:4200/api/ordersCur`);
  }

  decrementProduct(name: String) {
    return this.httpclien.put<any>(`http://localhost:4200/api/baskets`, {"title": name});
  }

  addProduct(name: String) {
    return this.httpclien.post<any>(`http://localhost:4200/api/baskets`, {"title": name});
  }

  deleteProduct(name: String) {
    return this.httpclien.delete<any>(`http://localhost:4200/api/baskets/${name}`);
  }
}

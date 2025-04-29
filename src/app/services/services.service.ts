import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private prefix = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  async getCategories() {
    return await this.http.get<any>(this.prefix + "/categories").toPromise();
  }
  async getProductsByCateg(categoryId: any) {
    return await this.http.get<any>(this.prefix + "/productsByCategory/" + categoryId).toPromise();
  }
  async getProducts() {
    return await this.http.get<any>(this.prefix + "/products" ).toPromise();
  }

}

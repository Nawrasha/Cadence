import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private prefix = "/assets/data";

  constructor(private http: HttpClient) {}

  async getCategories() {
    return await this.http.get<any>(this.prefix + "/categories.json").toPromise();
  }
  async getProducts() {
    return await this.http.get<any>(this.prefix + "/products.json").toPromise();
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { Productapi } from './productapi';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http :HttpClient) { }
  private apiUrl = 'https://fakestoreapi.com/products';
  getdatafromapi():Observable< Productapi[]  >   {

    return this.http.get<Productapi[]>(this.apiUrl);
  }
  private apiUrl0 = 'https://fakestoreapi.com/products/${id}';

  
  getempbyid(id:number):Observable< Productapi[]  > {
  
    return this.http.get<Productapi[]>(this.apiUrl0);
}
}

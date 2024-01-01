import { Component, inject } from '@angular/core';
import { Productapi } from '../productapi';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product!: Productapi;
  varapi!: Productapi[];
  route: ActivatedRoute = inject(ActivatedRoute);
   userid = Number(this.route.snapshot.params['id']);

  productserve: ProductsService=inject(ProductsService)
  constructor() {
    this.productserve.getdatafromapi().subscribe(    ( dat:Productapi[  ]    ) => { this.varapi = dat   }         );

  }
 
  
}

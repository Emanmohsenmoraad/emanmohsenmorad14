import { Component , inject} from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { Productapi } from '../productapi';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-emoloyeelist',
  templateUrl: './emoloyeelist.component.html',
  styleUrls: ['./emoloyeelist.component.css']
})
export class EmoloyeelistComponent {
  users: Employee[] = [];
  varapi!: Productapi[];
  route: ActivatedRoute = inject(ActivatedRoute);

  productserve: ProductsService=inject(ProductsService)
    userservce :EmployeesService = inject(EmployeesService);
  ProductService: any;
  constructor() {
    this.productserve.getdatafromapi().subscribe(    ( dat:Productapi[  ]    ) => { this.varapi = dat   }         );
this.users  = this.userservce.getallemp();

  }

  deleteruser(id:number){
this.userservce.deleteuser(id);

  }
  addToCart(item:any){
console.log("item added",item)
  }
  showdetails(itemid:any){
    console.log(itemid)

  }

  }



import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  product = {
      name: '',
      image: '',
      description: '',
      price: '',
      category: ''
  }
  
  constructor(private ts: ProductsService) { }

  ngOnInit(): void {
  }

  onCreate() {
    console.log(this.product)
    this.ts.create(this.product)
  }

}

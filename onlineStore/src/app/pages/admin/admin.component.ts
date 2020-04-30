import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  upd: boolean = false
  productList = []
  product = {
      id: 0,
      name: '',
      image: '',
      description: '',
      price: '',
      category: '',
      cat: ''
  }
  
  constructor(private ts: ProductsService) { }

  ngOnInit(): void { this.ts.getProducts().subscribe(data => { this.productList = data }) }

  onCreate() {
    if (this.upd) {
      this.ts.update(this.product).subscribe()
    }
    else this.ts.create(this.product).subscribe()
  }

  onUpd(id) {
    this.upd = true
    this.ts.getProductById(id).subscribe(
      data => {
        this.product.name = data.name
        this.product.id = data.id
        this.product.category = data.category.name
        this.product.description = data.description
        this.product.price = data.price
        this.product.image = data.imageURL
      })
  }
  onDel(id) { this.ts.delete(id).subscribe() }
  

}

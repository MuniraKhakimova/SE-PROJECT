import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css']
})
export class ProductsListPageComponent implements OnInit {
  public products = []
  constructor(private ts: ProductsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.ts.get().subscribe(data => {
        this.products = data.filter(product => product.category.toUpperCase() == param.path)
      })
    })
  }

}

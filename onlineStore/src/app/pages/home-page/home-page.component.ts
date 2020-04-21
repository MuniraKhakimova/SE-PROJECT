import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public products = []
  constructor(private ps: ProductsService) { }

  ngOnInit(): void {
    this.ps.get().subscribe(products => {
      this.products = products
    })
  }

}

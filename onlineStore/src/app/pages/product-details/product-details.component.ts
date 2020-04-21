import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product
  public finder = this.route.snapshot.paramMap.get('id')
  constructor(private route: ActivatedRoute, private ps: ProductsService, private us: UserServiceService) { }


  userData = {
    name: '',
    phone: ''
  }
  
  ngOnInit(): void {
    this.ps.get().subscribe(data => {
      this.product = data.find(product => product.id == parseInt(this.finder) )
    })
  }

  onOrder(): void {
    console.log(this.userData)
    this.us.order(this.userData)
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public categories = []
  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.cs.get().subscribe(data => {
      this.categories = data.map(item => {
        return {
          name: item.name.toUpperCase()
        }
      })
    })
  }

}

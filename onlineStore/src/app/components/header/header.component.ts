import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn = false
  constructor() { }
  ngOnInit(): void {
    let user = localStorage.getItem('token')
    if(user) {
      this.loggedIn = true
    }
  }
  logout() {
    localStorage.clear()
    this.loggedIn = false
  }
}

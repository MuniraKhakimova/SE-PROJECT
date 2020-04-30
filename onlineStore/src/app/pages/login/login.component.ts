import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = {
    username: '',
    password: ''
  }
  constructor(
    private us: UserServiceService,
    private r: Router
    ) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.us.login(this.model).subscribe(
      res => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('username', this.model.username)

        this.r.navigate(['/home-page'])
      }
    )
  }

}
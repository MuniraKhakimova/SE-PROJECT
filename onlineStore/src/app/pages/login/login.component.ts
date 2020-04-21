import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    email: '',
    password: '',
    password2: ''
  }

  constructor(private us: UserServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model)
    this.us.login(this.model)
  }

}

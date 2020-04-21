import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  
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
    this.us.signup(this.model)
  }


}

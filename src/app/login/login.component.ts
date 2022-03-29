import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerUserData = {
    name:'',
    phone:'',
    email: '',
    password: ''
  }

  registerData = {
    name:'',
    phone:'',
    email: '',
    password: ''
  }

  data:any
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  registerUser() {
   
    
    
    this.registerData.name=this.registerUserData.name;
    this.registerData.email=this.registerUserData.email;
    this.registerData.phone=this.registerUserData.phone;
    this.registerData.password=this.registerUserData.password;

    
    
  }

}

import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {
formModel={
  userName:"",Validator:Validators.required,
  password:"",Validators:Validators.required
}

  constructor(public service:UserService,private router:Router, private services:SharedService ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token'))
    this.router.navigateByUrl('/home');
  }
onSubmit(form:NgForm){
this.service.login(form.value).subscribe(
(res:any)=>{
  localStorage.setItem('token',res.token);
  alert("Logged in Successfully!")
  this.router.navigateByUrl('/home');
},
err=>{
  if(err.status==400)
  alert("Incorrect Username or Password!");
  else
  console.log(err);
}
)
}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//localStorage: any;
logout=false;

  constructor(private route:Router) {
    
    
  }
  ngOninit():void{
    if(localStorage.getItem('token')==null)
   this.logout=true;
    else
    this.logout=false;
  }
  readonly apiurl="https://localhost:7279/api"
  title = 'TechademyEMS';
  onLogout(){
    if(localStorage.getItem('token')==null)
    alert("Please, Log in first !!");
    else{
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
    alert("Successfully Logged out!");
    }
  }

}

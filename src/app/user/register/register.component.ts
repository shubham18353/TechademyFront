import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    this.route.navigateByUrl('/home');
    this.service.formModel.reset();
  }
  onSubmit(){
    this.service.register().subscribe(
      (res:any)=>{
        if(res.succeeded){
          this.service.formModel.reset();
          alert("User Registered Successfully!");
        }else{
          res.errors.array.forEach((element: { code: any; }) => {
            switch(element.code){
              case 'DuplicateUserName':
                alert("UserName is already taken");
                break;
                default:
                  alert("Registration Failed");
                  break;
            }
          });
        }
      
    },
    err=>{
      console.log(err);
    });
  }

}

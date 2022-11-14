import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder,private http:HttpClient,private service:SharedService) { }
  formModel=this.fb.group({
    userName:['',Validators.required],
    email:['',Validators.email],
    fullName:[''],
    password:['',Validators.required],
    confirmPass:['',Validators.required]
    },{Validators:this.comparePasswords});
    
  
  comparePasswords(fb:FormGroup){
    let compare=fb.get('confirmPass');
    if(compare?.errors==null|| 'passwordMismatch' in compare.errors){
      if(fb.get('password')?.value!=fb.get('confirmPass')?.value){
        compare?.setErrors({passwordMismatch:true});}
        else
        compare?.setErrors(null);
      }
    }
    register(){
      var body={
        userName:this.formModel.value.userName,
        fullName:this.formModel.value.fullName,
        email:this.formModel.value.email,
        password:this.formModel.value.password,
      }
      return this.http.post(this.service.ApiUrl+'/applicationUser/register',body);
    }
    login(formData:any){
      return this.http.post(this.service.ApiUrl+'/applicationUser/login',formData);
    }
  }


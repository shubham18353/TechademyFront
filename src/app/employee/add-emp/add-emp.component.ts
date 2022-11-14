import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input() emp:any;
id=0;
name="";
payscale:number=0;
desigId="";
leaveId:number=0;
phone="";
email="";
address="";
isWorking="";
  ngOnInit(): void {
    this.id=this.emp.id;
    this.name=this.emp.name;
    this.payscale=this.emp.payscale;
    this.desigId=this.emp.desigId;
    this.leaveId=this.emp.leaveId;
    this.phone=this.emp.phone;
    this.email=this.emp.email;
    this.address=this.emp.address;
    this.isWorking=this.emp.isWorking;
  }
addEmployee(){
var val={ 
  name:this.name,
  payscale:this.payscale,
  desigId:this.desigId,
  leaveId:this.leaveId,
  phone:this.phone,
  email:this.email,
  address:this.address,
  isWorking:this.isWorking};
this.service.addEmp(val).subscribe(res=>{
  alert("Added Successfully!");
});
}
updateEmployee(){
  
  var val={
    name:this.name,
    payscale:this.payscale,
    desigId:this.desigId,
    leaveId:this.leaveId,
    phone:this.phone,
    email:this.email,
    address:this.address,
    isWorking:this.isWorking};
    console.warn(val);
  this.service.updateEmp(this.id,val).subscribe(res=>{
    alert("Successfully Updated!");
  });
  }
}

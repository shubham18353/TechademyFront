import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  EmployeeList:any=[];
  ModalTitle:string="";
  ActivateAddEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }
addClick(){
this.emp={
id:0,
name:"",
payscale:"",
desigId:"",
leaveId:"",
phone:"",
email:"",
address:"",
isWorking:""
}
this.ModalTitle="Add Employee";
this.ActivateAddEmpComp=true;
}

closeClick(){
  this.ActivateAddEmpComp=false;
  this.refreshEmpList();
}
editClick(item: any){
this.emp=item;
this.ModalTitle="Edit Employee";
this.ActivateAddEmpComp=true;
}
deleteClick(item:any){
if(confirm("Are You Sure?")){
  this.service.deleteEmp(item.id).subscribe(data=>{
    alert("Deleted Successfully!");
    this.refreshEmpList();})
}
}

refreshEmpList(){
  this.service.getEmpList().subscribe(data=>{
    this.EmployeeList=data;
    console.warn(data);
  });
 
}

}

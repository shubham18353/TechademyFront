import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-work',
  templateUrl: './show-work.component.html',
  styleUrls: ['./show-work.component.css']
})
export class ShowWorkComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshWorkList();
  }
  WorkList:any=[];
  ModalTitle:string="";
  ActivateAddDesComp:boolean=false;
  work:any;

addClick(){
this.work={
id:0,
empId:"",
monthlyWorkingHours:"",
employeeWorkingHours:""
}
this.ModalTitle="Add Working Hours";
this.ActivateAddDesComp=true;
}

closeClick(){
  this.ActivateAddDesComp=false;
  this.refreshWorkList();
}
editClick(item: any){
this.work=item;
this.ModalTitle="Edit Working Hours";
this.ActivateAddDesComp=true;
}
deleteClick(item:any){
if(confirm("Are You Sure?")){
  this.service.deleteWork(item.id).subscribe(data=>{
    alert("Deleted Successfully!");
    this.refreshWorkList();})
}
}

refreshWorkList(){
  this.service.getWorkList().subscribe(data=>{
    this.WorkList=data;
    console.warn(data);
  });
 
}

}

import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-leave',
  templateUrl: './show-leave.component.html',
  styleUrls: ['./show-leave.component.css']
})
export class ShowLeaveComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshLeaveList();
  }
  LeaveList:any=[];
  ModalTitle:string="";
  ActivateAddDesComp:boolean=false;
  leave:any;

addClick(){
this.leave={
leaveId:0,
leaveType:"",
reason:"",
status:"",
fromDate:Date.UTC,
toDate:Date.UTC
}
this.ModalTitle="Add Leave Request";
this.ActivateAddDesComp=true;
}

closeClick(){
  this.ActivateAddDesComp=false;
  this.refreshLeaveList();
}
editClick(item: any){
this.leave=item;
this.ModalTitle="Edit Leave Request";
this.ActivateAddDesComp=true;
}
deleteClick(item:any){
if(confirm("Are You Sure?")){
  this.service.deleteLeave(item.leaveId).subscribe(data=>{
    alert("Deleted Successfully!");
    this.refreshLeaveList();})
}
}

refreshLeaveList(){
  this.service.getLeaveList().subscribe(data=>{
    this.LeaveList=data;
    console.warn(data);
  });
 
}

}

import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-leave',
  templateUrl: './add-edit-leave.component.html',
  styleUrls: ['./add-edit-leave.component.css']
})
export class AddEditLeaveComponent implements OnInit {

  constructor(private service:SharedService) { }
 @Input() leave:any;
  leaveId:number=0;
  leaveType="";
  reason:string="";
  fromDate!: Date;
  toDate!: Date;
  status:string="";
 
    ngOnInit(): void {
      this.leaveId=this.leave.leaveId;
      this.leaveType=this.leave.leaveType;
      this.reason =this.leave.reason ;
      this.toDate=this.leave.toDate;
      this.fromDate=this.leave.fromDate;
      this.status=this.leave.status;
     
    }
  addLeaveR(){
  var val={ 
    leaveType:this.leaveType,
    reason :this.reason ,
    toDate:this.toDate,
    fromDate:this.fromDate,
    status:this.status
   };
  this.service.addLeave(val).subscribe(res=>{
    alert("Added Successfully!");
  });
  }
  updateLeaveR(){
    
    var val={
      leaveType:this.leaveType,
      reason :this.reason ,
      toDate:this.toDate,
      fromDate:this.fromDate,
      status:this.status
     };
      console.warn(val);
    this.service.updateLeave(this.leaveId,val).subscribe(res=>{
      alert("Successfully Updated!");
    });
    }



}

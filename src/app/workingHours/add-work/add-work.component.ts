import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css']
})
export class AddWorkComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() work:any;
  id=0;
  empId:number=0;
  monthlyWorkingHours=0;
  employeeWorkingHours=0;
 
    ngOnInit(): void {
      this.id=this.work.id;
      this.empId=this.work.empId;
      this.monthlyWorkingHours=this.work.monthlyWorkingHours;
     
      this.employeeWorkingHours=this.work.employeeWorkingHours;
     
    }
  addWorkHours(){
  var val={ 
    empId:this.empId,
    monthlyWorkingHours:this.monthlyWorkingHours,
    
    employeeWorkingHours:this.employeeWorkingHours
   };
  this.service.addWork(val).subscribe(res=>{
    alert("Added Successfully!");
  });
  }
  updateWorkHours(){
    
    var val={
      empId:this.empId,
      monthlyWorkingHours:this.monthlyWorkingHours,
      
      employeeWorkingHours:this.employeeWorkingHours
     };
      console.warn(val);
    this.service.updateWork(this.id,val).subscribe(res=>{
      alert("Successfully Updated!");
    });
    }

}

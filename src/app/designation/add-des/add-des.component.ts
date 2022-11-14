import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-des',
  templateUrl: './add-des.component.html',
  styleUrls: ['./add-des.component.css']
})
export class AddDesComponent implements OnInit {

  constructor(private service:SharedService) { }
 @Input() des:any;
  desigId=0;
  designationName="";
  department:string="";
  role="";
 
    ngOnInit(): void {
      this.desigId=this.des.desigId;
      this.designationName=this.des.designationName;
      this.department=this.des.department;
     
      this.role=this.des.role;
     
    }
  addDesig(){
  var val={ 
    designationName:this.designationName,
    department:this.department,
    
    role:this.role
   };
  this.service.addDes(val).subscribe(res=>{
    alert("Added Successfully!");
  });
  }
  updateDesig(){
    
    var val={
      designationName:this.designationName,
      department:this.department,
      
      role:this.role
     };
      console.warn(val);
    this.service.updateDes(this.desigId,val).subscribe(res=>{
      alert("Successfully Updated!");
    });
    }


}

import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-pay',
  templateUrl: './add-edit-pay.component.html',
  styleUrls: ['./add-edit-pay.component.css']
})
export class AddEditPayComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() pay:any;
  payscale=0;
  fixedPay:number=0;
  variablePay=0;
  costToCompany=0;
 
    ngOnInit(): void {
      this.payscale=this.pay.payscale;
      this.fixedPay=this.pay.fixedPay;
      this.variablePay=this.pay.variablePay;
     
      this.costToCompany=this.pay.costToCompany;
     
    }
  addPayment(){
  var val={ 
    fixedPay:this.fixedPay,
    variablePay:this.variablePay,
    
    costToCompany:this.costToCompany
   };
  this.service.addPay(val).subscribe(res=>{
    alert("Added Successfully!");
  });
  }
  updatePayment(){
    
    var val={
      fixedPay:this.fixedPay,
      variablePay:this.variablePay,
      
      costToCompany:this.costToCompany
     };
      console.warn(val);
    this.service.updatePay(this.payscale,val).subscribe(res=>{
      alert("Successfully Updated!");
    });
    }

}

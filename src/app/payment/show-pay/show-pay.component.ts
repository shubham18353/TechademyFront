import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-pay',
  templateUrl: './show-pay.component.html',
  styleUrls: ['./show-pay.component.css']
})
export class ShowPayComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshPayList();
  }
  PayList:any=[];
  ModalTitle:string="";
  ActivateAddDesComp:boolean=false;
  pay:any;

addClick(){
this.pay={
payscale:0,
fixedPay:"",
variablePay:"",
costToCompany:""
}
this.ModalTitle="Add Payment Rule";
this.ActivateAddDesComp=true;
}

closeClick(){
  this.ActivateAddDesComp=false;
  this.refreshPayList();
}
editClick(item: any){
this.pay=item;
this.ModalTitle="Edit Payment Rule";
this.ActivateAddDesComp=true;
}
deleteClick(item:any){
if(confirm("Are You Sure?")){
  this.service.deletePay(item.payscale).subscribe(data=>{
    alert("Deleted Successfully!");
    this.refreshPayList();})
}
}

refreshPayList(){
  this.service.getPayList().subscribe(data=>{
    this.PayList=data;
    console.warn(data);
  });
 
}

}

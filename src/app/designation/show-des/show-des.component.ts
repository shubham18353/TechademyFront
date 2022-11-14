import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-des',
  templateUrl: './show-des.component.html',
  styleUrls: ['./show-des.component.css']
})
export class ShowDesComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshDesList();
  }
  DesList:any=[];
  ModalTitle:string="";
  ActivateAddDesComp:boolean=false;
  des:any;

addClick(){
this.des={
desigId:0,
desigationName:"",
department:"",
role:""
}
this.ModalTitle="Add Designation";
this.ActivateAddDesComp=true;
}

closeClick(){
  this.ActivateAddDesComp=false;
  this.refreshDesList();
}
editClick(item: any){
this.des=item;
this.ModalTitle="Edit Designation";
this.ActivateAddDesComp=true;
}
deleteClick(item:any){
if(confirm("Are You Sure?")){
  this.service.deleteDes(item.desigId).subscribe(data=>{
    alert("Deleted Successfully!");
    this.refreshDesList();})
}
}

refreshDesList(){
  this.service.getDesList().subscribe(data=>{
    this.DesList=data;
    console.warn(data);
  });
 
}
}

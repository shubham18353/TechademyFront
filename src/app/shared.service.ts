import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly ApiUrl="https://localhost:7279/api"

  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/employees');
  }
  addEmp(val:any){
    return this.http.post(this.ApiUrl+'/employees',val)
  }
  updateEmp(id:number,val:any){
    return this.http.put(this.ApiUrl+'/employees/'+id,val)
  }
  deleteEmp(val:any){
    return this.http.delete(this.ApiUrl+'/employees/'+val)
  }

  getDesList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/designations');
  }
  addDes(val:any){
    return this.http.post(this.ApiUrl+'/designations',val)
  }
  updateDes(id:number, val:any){
    return this.http.put(this.ApiUrl+'/designations/'+id,val)
  }
  deleteDes(val:any){
    return this.http.delete(this.ApiUrl+'/designations/'+val)
  }
  getPayList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/paymentrules');
  }
  addPay(val:any){
    return this.http.post(this.ApiUrl+'/paymentrules',val)
  }
  updatePay(id:number, val:any){
    return this.http.put(this.ApiUrl+'/paymentrules/'+id,val)
  }
  deletePay(val:any){
    return this.http.delete(this.ApiUrl+'/paymentrules/'+val)
  }
  getWorkList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/workinghours');
  }
  addWork(val:any){
    return this.http.post(this.ApiUrl+'/workinghours',val)
  }
  updateWork(id:number, val:any){
    return this.http.put(this.ApiUrl+'/workinghours/'+id,val)
  }
  deleteWork(val:any){
    return this.http.delete(this.ApiUrl+'/workinghours/'+val)
}
getLeaveList():Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+'/leaverequests');
}
addLeave(val:any){
  return this.http.post(this.ApiUrl+'/leaverequests',val)
}
updateLeave(id:number, val:any){
  return this.http.put(this.ApiUrl+'/leaverequests/'+id,val)
}
deleteLeave(val:any){
  return this.http.delete(this.ApiUrl+'/leaverequests/'+val)
}
}
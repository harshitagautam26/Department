import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIURL="http://localhost:64318/api";
  readonly PhotoUrl="http://localhost:64318/Photos";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>
  {
    return this.http.get<any>(this.APIURL+'/department');
  }

  addDepartment(val:any)
  {
    return this.http.post<any>(this.APIURL+'/Department', val);
  }

  updateDepartment(val:any)
  {
    return this.http.put<any>(this.APIURL+'/Department', val);
  }

  deleteDepartment(val:any)
  {
    return this.http.delete<any>(this.APIURL+'/Department/' +val);
  }


  getEmpList():Observable<any[]>
  {
    return this.http.get<any>(this.APIURL+'/Employee');
  }

  addEmployee(val:any)
  {
    return this.http.post<any>(this.APIURL+'/Employee', val);
  }

  updateEmployee(val:any)
  {
    return this.http.put<any>(this.APIURL+'/Employee', val);
  }

  deleteEmployee(val:any)
  {
    return this.http.delete<any>(this.APIURL+'/Employee/' +val);
  }

UploadPhoto(val:any)
{
  return this.http.post(this.APIURL+'/Employee/SaveFile', val);
}

getAllDepartmentNames():Observable<any[]>
{
  return this.http.get<any[]>(this.APIURL+'/Employee/GetAllDepartmentNames');
}
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class EmployeeService {
  private apiUrl : string;

  constructor(private http : HttpClient){
    this.apiUrl = 'http://localhost:4200/api/employees';
  }

  private getHeaders() : HttpHeaders {
    return new HttpHeaders({
      'Content-Type' : 'application/json'
    });
  }

  getAllEmployees() : Observable<EmployeeService[]>{
    return this.http.get<EmployeeService[]>(this.apiUrl, {headers : this.getHeaders()});
  }

  getEmployee(id : number) : Observable<EmployeeService>{
  return this.http.get<EmployeeService>(`${this.apiUrl}/${id}`, {headers : this.getHeaders()});
}

addEmployee(employee : EmployeeService) : Observable<EmployeeService>{
return this.http.post<EmployeeService>(this.apiUrl, employee, {headers : this.getHeaders()});
}

updateEmployee(id: number, employee : EmployeeService) : Observable<EmployeeService>{
  return this.http.put<EmployeeService>(`${this.apiUrl}/${id}`, employee, {headers : this.getHeaders()});
}

deleteEmployee(id : number) : Observable<boolean>{
  return this.http.delete<boolean>(`${this.apiUrl}/${id}`, {headers : this.getHeaders()});
}

}

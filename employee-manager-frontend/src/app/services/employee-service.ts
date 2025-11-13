import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

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

  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl, {headers : this.getHeaders()});
  }

  getEmployee(id : number) : Observable<Employee>{
  return this.http.get<Employee>(`${this.apiUrl}/${id}`, {headers : this.getHeaders()});
}

addEmployee(employee : Employee) : Observable<Employee>{
return this.http.post<Employee>(this.apiUrl, employee, {headers : this.getHeaders()});
}

updateEmployee(id: number, employee : Employee) : Observable<Employee>{
  return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee, {headers : this.getHeaders()});
}

deleteEmployee(id : number) : Observable<boolean>{
  return this.http.delete<boolean>(`${this.apiUrl}/${id}`, {headers : this.getHeaders()});
}

}

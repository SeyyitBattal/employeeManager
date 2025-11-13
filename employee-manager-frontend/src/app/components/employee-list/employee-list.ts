import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { EmployeeForm } from "../employee-form/employee-form";

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeForm],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
employees : Employee[] = [];
selectedEmployee? : Employee;

constructor(private employeeService : EmployeeService){}

  ngOnInit(): void {
      this.loadEmployees();
  }

  loadEmployees() : void{
    this.employeeService.getAllEmployees().subscribe({
      next : (data) => {
        this.employees = data;
      }, 
      error : (error) => {
        console.error('Loading Employees Error: ', error);
      }
    });
  }

  onSelect(employee : Employee) : void {
    this.selectedEmployee = employee;
  }

  deleteEmployee(id : number) : void{
    if(confirm('Çalışanı silmek istediğinize emin misiniz?')){
      this.employeeService.deleteEmployee(id).subscribe({
        next : () => {
          this.employees = this.employees.filter(e => e.id !== id);
          this.selectedEmployee = undefined;
        },
        error: (error) => {
          console.error("Deleting Employee Error: ", error);
        }
      });
    }
  }

  onEmployeeSaved(employee : Employee):void{
    this.loadEmployees();
  }

}

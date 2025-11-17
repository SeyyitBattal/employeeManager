import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { EmployeeForm } from "../employee-form/employee-form";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  imports: [EmployeeForm, CommonModule, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
  standalone:true,
})
export class EmployeeList implements OnInit {
employees : Employee[] = [];
selectedEmployee? : Employee;
errorMessage : string = '';

constructor(private employeeService : EmployeeService){}

  ngOnInit(): void {
      this.loadEmployees();
  }

  loadEmployees() : void{
    this.employeeService.getAllEmployees().subscribe({
      next : (data) => {
        console.log("Employees loaded: " ,data);
        this.employees = data;
      }, 
      error : (error) => {
        console.error('Loading Employees Error: ', error);
        this.errorMessage = "Failed to load employees. Please check the console for details.";
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

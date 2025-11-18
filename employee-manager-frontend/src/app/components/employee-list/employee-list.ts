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
        this.employees = data;
        console.log("Employees loaded: " ,data);
      }, 
      error : (error) => {
        this.errorMessage = "Failed to load employees. Please check the console for details.";
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
          console.log("Employee deleted: " + this.employees[id]);
        },
        error: (error) => {
          console.error("Deleting Employee Error: ", error);
          this.loadEmployees();
        }
      });
    }
  }

  onEmployeeSaved(employee : Employee):void{
    if(employee.id){
      const index = this.employees.findIndex(e => e.id === employee.id);
      if(index !== -1){
        this.employees[index] = employee;
      }
    }else{
      this.employees.unshift(employee);
    }
    this.employees = [...this.employees];
    this.selectedEmployee = undefined;
  }

}

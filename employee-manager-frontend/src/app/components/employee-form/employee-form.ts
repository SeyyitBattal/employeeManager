import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
  standalone:true,
})
export class EmployeeForm implements OnChanges{

  @Input() employee? : Employee;
  @Output() employeeSaved = new EventEmitter<Employee>();

  model : Employee = this.getEmptyEmployee();
  isEditing = false;

  constructor(private employeeService : EmployeeService){}

  ngOnChanges(): void {
    if(this.employee){
      this.model = {... this.employee};
      this.isEditing = true;
    }else{
      this.model = this.getEmptyEmployee();
      this.isEditing = false;
    }
}

private getEmptyEmployee() : Employee{
return{
  id: 0,
  name: '',
  email:'',
  jobTitle:'',
  phoneNumber:'',
  imageUrl:'',
  employeeCode:'' 
};
}

onSubmit() : void{
  if(this.isEditing){
    this.employeeService.updateEmployee(this.model.id, this.model).subscribe({
      next : (employee) => {
        this.employeeSaved.emit(employee);
        this.resetForm();
      },
      error : (error) => {
        console.error("Updating Employee Error: ", error);
      }
    });
  }else{
    this.employeeService.addEmployee(this.model).subscribe({
      next : (employee) => {
        this.employeeSaved.emit(employee);
        this.resetForm();
      },
      error : (error) => {
        console.error("Creating Employee Error: ", error);
      }
    });
  }
}

resetForm():void{
this.model = this.getEmptyEmployee();
this.isEditing = false;
}

}

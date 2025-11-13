import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
  standalone:true,
})
export class EmployeeDetails {

}

package com.ik.employeeManager.repository;

import com.ik.employeeManager.entity.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{
}

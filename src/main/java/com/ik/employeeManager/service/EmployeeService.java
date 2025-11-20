package com.ik.employeeManager.service;

import com.ik.employeeManager.entity.Employee;
import com.ik.employeeManager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees(){
    return employeeRepository.findAll();
    }

    public Employee getEmployee(Long id){
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee addEmployee(Employee employee){
        employee.setId(null);
        return employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee){
        if (employeeRepository.existsById(id)){
            employee.setId(id);
            return employeeRepository.save(employee);
        }
        return null;
    }

   public boolean deleteEmployee(Long id){
        if (employeeRepository.existsById(id)){
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
   }

}

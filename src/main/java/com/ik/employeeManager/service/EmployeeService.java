package com.ik.employeeManager.service;

import com.ik.employeeManager.entity.Employee;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class EmployeeService {

    private final Map<Long, Employee> employees =  new HashMap<>();
    private final AtomicLong nextId = new AtomicLong(1);

    @PostConstruct
    public void init(){
        addEmployee(new Employee(0, "Ali Al", "ali@ali.com",
                "Junior Developer", "05050505050",
                "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg",
                "EMP1245"));

        addEmployee(new Employee(0, "Ayşe Ay", "ayse@ayse.com",
                "Manager", "111111",
                "https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?semt=ais_hybrid&w=740&q=80",
                "EMP8964"));

        addEmployee(new Employee(0, "Veli Vel", "vel@vel.com",
                "IT Director", "921921291",
                "",
                "EMP2378"));

    }

    public List<Employee> getAllEmployees(){
    return employees.values().stream().toList();
    }

    public Employee getEmployee(Long id){
        return employees.get(id);
    }

    public Employee addEmployee(Employee employee){
        Long newId = nextId.getAndIncrement();
        employee.setId(newId);
        employees.put(newId, employee);
        return employee;
    }

    public Employee updateEmployee(Long id, Employee employee){
        if(employees.containsKey(id)){
            employee.setId(id);
            employees.put(id, employee);
            return employee;
        }
        return null;
    }

   public boolean deleteEmployee(Long id){
        return  employees.remove(id) != null;
   }

}

package com.ik.employeeManager.controller;

import com.ik.employeeManager.entity.Employee;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employee")
@Slf4j
public class EmployeeController {

    Map<Integer, Employee> employees;

    @PostConstruct
    public void init(){
        employees = new HashMap<>();
        employees.put(1, new Employee(1,"Ali","ali@ali.com",
                "Junior Developer","0505505505",
                "https://www.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg"));
    }

    @GetMapping("/")
    public List<Employee> allEmployees() {
        return  employees.values().stream().toList();
    }
}

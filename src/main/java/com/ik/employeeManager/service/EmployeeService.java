package com.ik.employeeManager.service;

import com.ik.employeeManager.entity.Employee;
import com.ik.employeeManager.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

  /* DB BAĞLANTISI YAPILDIKTAN SONRA BU KODLARA İHTİYAÇ YOK!

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
    */

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

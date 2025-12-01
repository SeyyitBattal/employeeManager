package com.ik.employeeManager.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
public class EmployeeException extends RuntimeException{
    private HttpStatus status;

    public EmployeeException(String message, HttpStatus httpStatus){
        super(message);
        this.status = httpStatus;
    }
}

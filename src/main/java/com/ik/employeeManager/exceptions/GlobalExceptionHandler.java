package com.ik.employeeManager.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<EmployeeErrorResponse> handleException(Exception exception) {
        EmployeeErrorResponse errorResponse = new EmployeeErrorResponse(
                HttpStatus.BAD_REQUEST.value(), exception.getMessage(), System.currentTimeMillis()
        );
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    public ResponseEntity<EmployeeErrorResponse> handleException(EmployeeException employeeException) {
        EmployeeErrorResponse errorResponse = new EmployeeErrorResponse(
                employeeException.getStatus().value(), employeeException.getMessage(), System.currentTimeMillis()
        );
        return new ResponseEntity<>(errorResponse, employeeException.getStatus());
    }

}

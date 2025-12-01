package com.ik.employeeManager.exceptions;

import org.springframework.http.HttpStatus;

public class IdValidation {

    public static void idIdValid (long id){
        if(id <= 0){
            throw new EmployeeException(id + " is not valid", HttpStatus.BAD_REQUEST);
        }
    }
}

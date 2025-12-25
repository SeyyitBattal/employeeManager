package com.ik.employeeManager.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Email;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "employeedb", schema = "public")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank (message = "Please fill name")
    @Column(name = "name")
    private String name;

    @NotBlank (message = "Please fill email")
    @Email (message = "Please check email")
    @Column(name = "email")
    private String email;

    @NotBlank (message = "Please fill job title")
    @Column(name = "job_title")
    private String jobTitle;

    @NotBlank (message = "Please fill phone number")
    @Pattern( regexp = "^[0-9]*$", message = "Please check phone number")
    @Column(name = "phone_number")
    private String phoneNumber;

    @NotBlank (message = "Please add employee's picture")
    @Column(name = "image_url")
    private String imageUrl;

    @NotBlank (message = "Please fill employee code")
    @Column(name = "employee_code")
    private String employeeCode;
}

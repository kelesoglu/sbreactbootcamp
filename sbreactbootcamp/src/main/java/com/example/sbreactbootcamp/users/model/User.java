package com.example.sbreactbootcamp.users.model;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@Getter
@Setter
@Schema(description = "A user object")
//Table(name = "user")
public class User {
    @Schema(description = "The email of the user.", allowableValues = "some.one@email.com",  required = true)
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String email;

    @Schema(description = "password", allowableValues = "s0m3s3cr3tp455w0rd", required = true)
    private String password;

    @Schema(description = "The users first name.", allowableValues = "Some")
    private String firstName;

    @Schema(description = "The users last name.", allowableValues = "One")
    private String lastName ;

    public User(){}

    public User(String email,String password,String firstName,String lastName){
        this.email=email;
        this.password=password;
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

package com.example.sbreactbootcamp.books.controller;

import com.example.sbreactbootcamp.books.model.Authors;
import com.example.sbreactbootcamp.books.repositories.IAuthorsRepository;
import com.example.sbreactbootcamp.utils.response.R;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/authors")
@CrossOrigin("*")
@Tag(name="default")
public class AuthorsController {
    private static final Logger logger = LoggerFactory.getLogger(AuthorsController.class);
    @Autowired
    IAuthorsRepository authorsRepository;

    @Operation(summary ="Find the Author list")
    @GetMapping("/api/authors")
    @ResponseBody
    public R<List<Authors>> findAuthors(){
        List<Authors> authorsList=null;

        try {
            authorsList=authorsRepository.findAll();
        }catch (Exception e){
            logger.error("Find the Authors list fails: " +e.getMessage());
        }

        return new R<List<Authors>>().success().data(authorsList);
    }

    @Operation(summary = "Creates a new authors")
    @PostMapping
    public R<Authors> addAuthors (@RequestBody Authors authors){
        try {
            authorsRepository.save(authors);
        }catch (Exception e){
            logger.error("Creates a new authors fails:"+e.getMessage());
        }
        return new R<Authors>().success();
    }

    @Operation(summary = "Update and existing author.")
    @PutMapping
    public R<Authors> updateAuthors (@Parameter(description = "Update and existing authors")@RequestBody Authors author){
        try{
            authorsRepository.save(author);
        }catch (Exception e){
            logger.error("Update an existing author fails:" +e.getMessage());
        }


        return new R<Authors>().success();
    }

    //@Transactional(readOnly = true)
    @Operation(summary = "Delete an existing author.")
    @DeleteMapping(value="/{id}")
    public R<Authors> deleteAuthor(@Parameter(description = "Delete an existing user.")@PathVariable final String id){

        try{
            authorsRepository.deleteById(id);
        }catch (Exception e){
            logger.error("Delete an existing author fails:" +e.getMessage());
        }
        return new R<Authors>().success();
    }
    @Operation(summary = "Retrieve an existing author.")
    @GetMapping("/{id}")
    public R<Authors> findAuthorById(@Parameter(description = "A Author's id")@PathVariable String id){
        Authors author =null;

        try{
            author =authorsRepository.findById(id).orElse(new Authors());
        }catch (Exception e){
            logger.error("Retrieve an existing author fails:" +e.getMessage());
        }
        return new R<Authors>().success();
    }
}

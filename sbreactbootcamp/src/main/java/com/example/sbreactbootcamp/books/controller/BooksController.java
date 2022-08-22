package com.example.sbreactbootcamp.books.controller;

import com.example.sbreactbootcamp.books.model.Books;
import com.example.sbreactbootcamp.books.repositories.IBooksRepository;
import com.example.sbreactbootcamp.utils.response.R;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class BooksController {
    private static final Logger logger= LoggerFactory.getLogger(BooksController.class);

    @Autowired
    IBooksRepository booksRepository;

    @Operation(summary ="Find the Book list")
    @GetMapping("")
    @ResponseBody
    public R<List<Books>> findBooks(){
        List<Books> booksList = null;

        try{
            booksList = booksRepository.findAll();
        }catch (Exception e){
            logger.error("Find the Book list fails: " +e.getMessage());
        }

        return new R<List<Books>>().success().data(booksList);
    }

    @Operation(summary = "Retrieve an existing Book")
    @GetMapping("/{id}")
    public R<Books> findBooksById(@Parameter(description = "A Book's id")@PathVariable String id){
        Books book =null;

        try{
            book =booksRepository.findById(id).orElse(new Books());
        }catch (Exception e){
            logger.error("Retrieve an existing book fails:" +e.getMessage());
        }
        return new R<Books>().success();
    }
    @Operation(summary = "Creates a new books")
    @PostMapping
    public R<Books> addBooks(@RequestBody Books book){
        try {
            booksRepository.save(book);
        }catch (Exception e){
            logger.error("Creates a new books fails:"+e.getMessage());
        }
        return new R<Books>().success();
    }

    @Operation(summary = "Update and existing books.")
    @PutMapping
    public R<Books> updateBooks (@Parameter(description = "Update and existing books")@RequestBody Books book){
        try{
            booksRepository.save(book);
        }catch (Exception e){
            logger.error("Update an existing books fails:" +e.getMessage());
        }


        return new R<Books>().success();
    }
    //@Transactional(readOnly = true)
    @Operation(summary = "Delete an existing books.")
    @DeleteMapping(value="/{id}")
    public R<Books> deleteBooks(@Parameter(description = "Delete an existing books.")@PathVariable final String id){

        try{
            booksRepository.deleteById(id);
        }catch (Exception e){
            logger.error("Delete an existing books fails:" +e.getMessage());
        }
        return new R<Books>().success();
    }
}

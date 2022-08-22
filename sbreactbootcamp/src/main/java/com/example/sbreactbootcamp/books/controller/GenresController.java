package com.example.sbreactbootcamp.books.controller;

import com.example.sbreactbootcamp.books.model.Genres;
import com.example.sbreactbootcamp.books.repositories.IGenresRepository;
import com.example.sbreactbootcamp.utils.response.R;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class GenresController {
    private static final Logger logger= LoggerFactory.getLogger(GenresController.class);

    @Autowired
    IGenresRepository genresRepository;

    @Operation(summary = "Find the genres list")
    @GetMapping("")
    public R<List<Genres>> findGenres(){
        List<Genres> genresList = null;

        try{
            genresList = genresRepository.findAll();
        }catch (Exception e){
            logger.error("Find the genres list fails" + e.getMessage());
        }

        return new R<List<Genres>>().success().data(genresList);
    }

    @Operation(summary = "Retrieve an existing Genres")
    @GetMapping("/{id}")
    public R<Genres> findGenresById(@Parameter(description = "A Genre's id")@PathVariable String id){
       Genres genres =null;

        try{
            genres =genresRepository.findById(id).orElse(new Genres());
        }catch (Exception e){
            logger.error("Retrieve an existing genres fails:" +e.getMessage());
        }
        return new R<Genres>().success();
    }
    @Operation(summary = "Creates a new genres")
    @PostMapping
    public R<Genres> addGenres(@RequestBody Genres genres){
        try {
            genresRepository.save(genres);
        }catch (Exception e){
            logger.error("Creates a new genres fails:"+e.getMessage());
        }
        return new R<Genres>().success();
    }

    @Operation(summary = "Update and existing genres.")
    @PutMapping
    public R<Genres> updateGenres (@Parameter(description = "Update and existing genres")@RequestBody Genres genres){
        try{
            genresRepository.save(genres);
        }catch (Exception e){
            logger.error("Update an existing genres fails:" +e.getMessage());
        }


        return new R<Genres>().success();
    }
    //@Transactional(readOnly = true)
    @Operation(summary = "Delete an existing genres.")
    @DeleteMapping(value="/{id}")
    public R<Genres> deleteGenres(@Parameter(description = "Delete an existing genres.")@PathVariable final String id){

        try{
            genresRepository.deleteById(id);
        }catch (Exception e){
            logger.error("Delete an existing genres fails:" +e.getMessage());
        }
        return new R<Genres>().success();
    }
}

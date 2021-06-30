package com.neginet.demo.controllers;

import com.neginet.demo.models.People;
import com.neginet.demo.services.PeopleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@RestController
@RequestMapping("/people")
@CrossOrigin
public class PeopleController {
    private final PeopleService PEOPLE_SERVICE;

    @Autowired
    public PeopleController(PeopleService peopleService) {
        this.PEOPLE_SERVICE = peopleService;
    }

    @PostMapping
    public ResponseEntity<People> create(@RequestBody People people) {
        return new ResponseEntity<>(PEOPLE_SERVICE.create(people), HttpStatus.CREATED);
    }

    @GetMapping("/{peopleId}")
    public ResponseEntity<People> find(@PathVariable Long peopleId) {
        try {
            return new ResponseEntity<>(PEOPLE_SERVICE.findById(peopleId), HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<People>> findAll() {
        return new ResponseEntity<>(PEOPLE_SERVICE.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/{peopleId}")
    public ResponseEntity<People> delete(@PathVariable Long peopleId) {
        try {
            return new ResponseEntity<>(PEOPLE_SERVICE.delete(peopleId), HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{peopleId}")
    public ResponseEntity<People> update(@PathVariable Long peopleId, @RequestBody People people) {
        try {
            return new ResponseEntity<>(PEOPLE_SERVICE.update(peopleId, people), HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all/{name}")
    public ResponseEntity<List<People>> findAllByName(@PathVariable String name) {
        return new ResponseEntity<>(PEOPLE_SERVICE.findAllByName(name), HttpStatus.OK);
    }

    @GetMapping("/ids/{name}")
    public ResponseEntity<List<Long>> getIds(@PathVariable String name) {
        return new ResponseEntity<>(PEOPLE_SERVICE.getIds(name), HttpStatus.OK);
    }
}

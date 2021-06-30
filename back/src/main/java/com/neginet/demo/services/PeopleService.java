package com.neginet.demo.services;

import com.neginet.demo.models.People;
import com.neginet.demo.repositories.PeopleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class PeopleService {
    private final PeopleRepository PEOPLE_REPOSITORY;

    @Autowired
    public PeopleService(PeopleRepository peopleRepository) {
        this.PEOPLE_REPOSITORY = peopleRepository;
    }

    public People create(People people) {
        return PEOPLE_REPOSITORY.save(people);
    }

    public People findById(Long peopleId) {
        return PEOPLE_REPOSITORY.findById(peopleId).orElseThrow(EntityNotFoundException::new);
    }

    public List<People> findAll() {
        return (List<People>) PEOPLE_REPOSITORY.findAll();
    }

    public People delete(Long peopleId) {
        People people = findById(peopleId);
        PEOPLE_REPOSITORY.delete(people);
        return people;
    }

    public People update(Long peopleId, People people) {
        People oldPeople = findById(peopleId);
        oldPeople.setName(people.getName());
        return PEOPLE_REPOSITORY.save(oldPeople);
    }

    public List<People> findAllByName(String name) {
        return PEOPLE_REPOSITORY.findAllByName(name);
    }

    public List<Long> getIds(String name) {
        return PEOPLE_REPOSITORY.getAllByName(name);
    }
}

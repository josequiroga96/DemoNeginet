package com.neginet.demo.repositories;

import com.neginet.demo.models.People;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PeopleRepository extends CrudRepository<People, Long> {
    List<People> findAllByName(String name);

    @Query("select p.id from People p where p.name = ?1")
    List<Long> getAllBy(String name);
}

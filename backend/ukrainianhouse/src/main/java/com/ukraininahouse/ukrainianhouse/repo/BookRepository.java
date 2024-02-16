package com.ukraininahouse.ukrainianhouse.repo;

import com.ukraininahouse.ukrainianhouse.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}

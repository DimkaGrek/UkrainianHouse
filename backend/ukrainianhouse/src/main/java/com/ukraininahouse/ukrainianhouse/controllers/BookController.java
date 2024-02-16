package com.ukraininahouse.ukrainianhouse.controllers;

import com.ukraininahouse.ukrainianhouse.dto.BookDTO;
import com.ukraininahouse.ukrainianhouse.model.Book;
import com.ukraininahouse.ukrainianhouse.services.BookService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping
    public List<Book> getAllBooks() { return bookService.findAllBooks();}

    @PostMapping
    public ResponseEntity<Book> createNewBook(@RequestBody BookDTO bookDTO) {

        System.out.println(bookDTO);
        Book createdBook = bookService.createNewBook(bookDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdBook);
    }
}

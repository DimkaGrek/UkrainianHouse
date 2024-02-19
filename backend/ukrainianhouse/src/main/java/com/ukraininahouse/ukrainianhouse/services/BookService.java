package com.ukraininahouse.ukrainianhouse.services;

import com.ukraininahouse.ukrainianhouse.dto.BookDTO;
import com.ukraininahouse.ukrainianhouse.model.Book;
import com.ukraininahouse.ukrainianhouse.repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Transactional(readOnly = true)
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    @Transactional
    public Book createNewBook(BookDTO bookDTO) {
        Book book = new Book();
        book.setCoverImageUrl(bookDTO.getCoverImageUrl());
        book.setAuthor(bookDTO.getAuthor());
        book.setAboutAuthor(bookDTO.getAboutAuthor());
        book.setTitle(bookDTO.getTitle());
        book.setDescription(bookDTO.getDescription());
        book.setPublicationYear(bookDTO.getPublicationYear());
        book.setGenre(bookDTO.getGenre());
        book.setPageCount(bookDTO.getPageCount());

        return bookRepository.save(book);
    }
}

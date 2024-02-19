package com.ukraininahouse.ukrainianhouse.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="books")
public class Book {
    @Id // Указывает, что поле является первичным ключом
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Стратегия генерации идентификаторов
    private Long id;

    @Column(name = "cover_image_url") // Настройка имени колонки в БД
    private String coverImageUrl; // URL зображення обкладинки книги

    @Column(name = "author")
    private String author; // Автор книги

    @Column(name = "about_author")
    private String aboutAuthor; // Про автора

    @Column(name = "title")
    private String title; // Назва книги

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description; // Опис книги

    @Column(name = "publication_year")
    private Integer publicationYear; // Рік видання

    @Column(name = "genre")
    private String genre; // Жанр

    @Column(name = "page_count")
    private Integer pageCount; // Кількість сторінок

}

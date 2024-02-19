package com.ukraininahouse.ukrainianhouse.dto;

import lombok.Data;

@Data
public class BookDTO {
    private String coverImageUrl;
    private String author;
    private String aboutAuthor;
    private String title;
    private String description;
    private Integer publicationYear;
    private String genre;
    private Integer pageCount;
}

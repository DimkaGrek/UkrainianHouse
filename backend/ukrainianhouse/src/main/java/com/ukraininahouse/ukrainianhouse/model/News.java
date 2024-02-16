package com.ukraininahouse.ukrainianhouse.model;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Data
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 255, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "publish_date")
    private LocalDateTime publishDate;

    @Column(length = 50)
    private String status;

    @OneToMany(mappedBy = "news", cascade = CascadeType.ALL)
    private List<Photo> photos = new ArrayList<>();

    // Getters and Setters
}

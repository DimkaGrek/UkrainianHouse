package com.ukraininahouse.ukrainianhouse.model;

import jakarta.persistence.Entity;
import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "photos")
@Data
public class Photo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "news_id", nullable = false)
    private News news;

    @Column(name = "photo_url", length = 255, nullable = false)
    private String photoUrl;

    @Column(length = 255)
    private String caption;

    @Column(name = "upload_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date uploadDate;

    // Lombok сгенерирует геттеры и сеттеры
}


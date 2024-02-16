package com.ukraininahouse.ukrainianhouse.dto;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;

@Data
public class NewsDTO {
    private String title;
    private String content;
    private LocalDateTime publishDate;
    private String status;
}

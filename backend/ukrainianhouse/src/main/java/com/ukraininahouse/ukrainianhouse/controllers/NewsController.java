package com.ukraininahouse.ukrainianhouse.controllers;

import com.ukraininahouse.ukrainianhouse.dto.NewsDTO;
import com.ukraininahouse.ukrainianhouse.helpers.ApiResponse;
import com.ukraininahouse.ukrainianhouse.model.News;
import com.ukraininahouse.ukrainianhouse.services.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/news")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @GetMapping
    public List<News> getAllNews() {
        return newsService.findAllNews();
    }

    @PostMapping
    public ResponseEntity<News> createNews(@RequestBody NewsDTO newsDTO) {

        System.out.println(newsDTO);
        News createdNews = newsService.createNewsFromDTO(newsDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdNews);
    }
}


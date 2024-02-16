package com.ukraininahouse.ukrainianhouse.services;

import com.ukraininahouse.ukrainianhouse.dto.NewsDTO;
import com.ukraininahouse.ukrainianhouse.model.News;
import com.ukraininahouse.ukrainianhouse.model.Photo;
import com.ukraininahouse.ukrainianhouse.repo.NewsRepository;
import com.ukraininahouse.ukrainianhouse.repo.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class NewsService {
    @Autowired
    private NewsRepository newsRepository;
    @Autowired
    private PhotoRepository photoRepository;

    @Transactional(readOnly = true)
    public List<News> findAllNews() {
        return newsRepository.findAll();
    }

    @Transactional
    public News createNewsFromDTO(NewsDTO newsDTO) {
//        List<Photo> photos = photoRepository.findByNewsId(news.getId());
        News news = new News();
        news.setTitle(newsDTO.getTitle());
        news.setContent(newsDTO.getContent());
        news.setPublishDate(newsDTO.getPublishDate());
        news.setStatus(newsDTO.getStatus());

        return newsRepository.save(news);

    }
}

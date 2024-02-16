package com.ukraininahouse.ukrainianhouse.repo;

import com.ukraininahouse.ukrainianhouse.model.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Long> {
}

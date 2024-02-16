package com.ukraininahouse.ukrainianhouse.repo;

import com.ukraininahouse.ukrainianhouse.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PhotoRepository extends JpaRepository<Photo, Long> {

    List<Photo> findByNewsId(Long newsId);
}

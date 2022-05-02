package com.lcy.campusmall.service;

import com.lcy.campusmall.model.request.AddCategoryReq;

public interface CategoryService {
    void add(AddCategoryReq addCategoryReq);


    void delete(Integer id);
}

package com.lcy.campusmall.service;

import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.model.request.AddCategoryReq;
import com.lcy.campusmall.model.vo.CategoryVO;

import java.util.List;

public interface CategoryService {
    void add(AddCategoryReq addCategoryReq);


    void delete(Integer id);

    PageInfo listForAdmin(Integer pageNum, Integer pageSize);


    List<CategoryVO> listCategoryForCustomer(Integer parentId);
}

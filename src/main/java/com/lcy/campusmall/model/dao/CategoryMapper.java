package com.lcy.campusmall.model.dao;

import com.lcy.campusmall.model.pojo.Category;

public interface CategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Category row);

    int insertSelective(Category row);

    Category selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Category row);

    int updateByPrimaryKey(Category row);
}
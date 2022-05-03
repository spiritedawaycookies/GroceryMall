package com.lcy.campusmall.model.dao;

import com.lcy.campusmall.model.pojo.Product;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Product row);

    int insertSelective(Product row);

    Product selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Product row);

    int updateByPrimaryKey(Product row);
    Product selectByName(String name);
}
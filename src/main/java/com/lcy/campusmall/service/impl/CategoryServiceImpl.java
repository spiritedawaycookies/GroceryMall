package com.lcy.campusmall.service.impl;

import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.dao.CategoryMapper;
import com.lcy.campusmall.model.pojo.Category;
import com.lcy.campusmall.model.request.AddCategoryReq;
import com.lcy.campusmall.service.CategoryService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    CategoryMapper categoryMapper;
    @Override
    public void add(AddCategoryReq addCategoryReq) {
        Category category = new Category();
        //自动拷贝
        BeanUtils.copyProperties(addCategoryReq, category);
        Category categoryOld = categoryMapper.selectByName(addCategoryReq.getName());
        if (categoryOld != null) {
            throw new MallException(MallExceptionEnum.NAME_EXISTED);
        }
        int count = categoryMapper.insertSelective(category);
        if (count == 0) {
            throw new MallException(MallExceptionEnum.CREATE_FAILED);
        }
    }

    @Override
    public void delete(Integer id) {
        Category categoryOld = categoryMapper.selectByPrimaryKey(id);
        //查不到记录，无法删除，删除失败
        if (categoryOld == null) {
            throw new MallException(MallExceptionEnum.DELETE_FAILED);
        }
        int count = categoryMapper.deleteByPrimaryKey(id);
        if (count == 0) {
            throw new MallException(MallExceptionEnum.DELETE_FAILED);
        }
    }
}

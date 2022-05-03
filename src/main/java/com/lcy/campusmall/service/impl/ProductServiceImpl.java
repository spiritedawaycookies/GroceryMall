package com.lcy.campusmall.service.impl;

import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.dao.ProductMapper;
import com.lcy.campusmall.model.pojo.Product;
import com.lcy.campusmall.model.request.AddProductReq;
import com.lcy.campusmall.service.CategoryService;
import com.lcy.campusmall.service.ProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductMapper productMapper;

    @Autowired
    CategoryService categoryService;
    @Override
    public void add(AddProductReq addProductReq) {
        Product product = new Product();
        BeanUtils.copyProperties(addProductReq, product);
        //检验重名
        Product productOld = productMapper.selectByName(addProductReq.getName());
        if (productOld != null) {
            throw new MallException(MallExceptionEnum.NAME_EXISTED);
        }
        int count = productMapper.insertSelective(product);
        if (count == 0) {
            throw new MallException(MallExceptionEnum.CREATE_FAILED);
        }
    }


}

package com.lcy.campusmall.controller;

import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.model.pojo.Product;
import com.lcy.campusmall.model.request.ProductListReq;
import com.lcy.campusmall.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 前台商品controller
 */
@CrossOrigin(origins = {Constant.FRONTEND_URL,Constant.PUBLIC_FRONTEND_URL})
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @Operation(summary = "product detail")
    @GetMapping("product/detail")
    public ApiRestResponse detail(@RequestParam Integer id) {
        Product product = productService.detail(id);
        return ApiRestResponse.success(product);
    }
    @Operation(summary = "product list")
    @GetMapping("product/list")
    public ApiRestResponse list(ProductListReq productListReq){
        PageInfo list = productService.list(productListReq);
        return ApiRestResponse.success(list);
    }
 }

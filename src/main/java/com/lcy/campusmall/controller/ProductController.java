package com.lcy.campusmall.controller;

import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.model.pojo.Product;
import com.lcy.campusmall.model.request.ProductListReq;
import com.lcy.campusmall.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 前台商品controller
 */
@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @Operation(summary = "商品详情")
    @GetMapping("product/detail")
    public ApiRestResponse detail(@RequestParam Integer id) {
        Product product = productService.detail(id);
        return ApiRestResponse.success(product);
    }
    @Operation(summary = "商品列表")
    @GetMapping("product/list")
    public ApiRestResponse list(ProductListReq productListReq){
        PageInfo list = productService.list(productListReq);
        return ApiRestResponse.success(list);
    }
 }
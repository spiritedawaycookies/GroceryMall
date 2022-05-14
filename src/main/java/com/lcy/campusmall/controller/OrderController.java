package com.lcy.campusmall.controller;


import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.model.request.CreateOrderReq;
import com.lcy.campusmall.model.vo.OrderVO;
import com.lcy.campusmall.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
@CrossOrigin(origins = {Constant.FRONTEND_URL,Constant.PUBLIC_FRONTEND_URL})
@RestController
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("order/create")
    @Operation(summary = "create order")
    public ApiRestResponse create(@RequestBody @Valid CreateOrderReq createOrderReq) {
        String orderNo = orderService.create(createOrderReq);
        return ApiRestResponse.success(orderNo);
    }

    @GetMapping("order/detail")
    @Operation(summary = "order detail")
    public ApiRestResponse detail(@RequestParam String orderNo) {
        OrderVO orderVO = orderService.detail(orderNo);
        return ApiRestResponse.success(orderVO);
    }

    @GetMapping("order/list")
    @Operation(summary = "order list")
    public ApiRestResponse list(@RequestParam Integer pageNum, @RequestParam Integer pageSize) {
        PageInfo pageInfo = orderService.listForCustomer(pageNum, pageSize);
        return ApiRestResponse.success(pageInfo);
    }

    /**
     * 订单取消
     */
    @PostMapping("order/cancel")
    @Operation(summary = "customer cancel order")
    public ApiRestResponse cancel(@RequestParam String orderNo) {
        orderService.cancel(orderNo);
        return ApiRestResponse.success();
    }
    /**
     * 生成支付二维码
     */
    @GetMapping("order/qrcode")
    @Operation(summary = "generate pay qr code")
    public ApiRestResponse qrcode(@RequestParam String orderNo) {
        String pngAddress = orderService.qrcode(orderNo);
        return ApiRestResponse.success(pngAddress);
    }

    @GetMapping("pay")
    @Operation(summary = "pay module")
    public ApiRestResponse pay(@RequestParam String orderNo) {
        orderService.pay(orderNo);
        return ApiRestResponse.success();
    }
}

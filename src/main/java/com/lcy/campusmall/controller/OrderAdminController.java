package com.lcy.campusmall.controller;

import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 描述：     订单后台管理Controller
 */
@RestController
public class OrderAdminController {

    @Autowired
    OrderService orderService;
    @GetMapping("admin/order/list")
    @Operation(summary = "admin order list")
    public ApiRestResponse listForAdmin(@RequestParam Integer pageNum,
                                        @RequestParam Integer pageSize) {
        PageInfo pageInfo = orderService.listForAdmin(pageNum, pageSize);
        return ApiRestResponse.success(pageInfo);
    }
    /**
     * 发货。订单状态流程：0用户已取消，10未付款，20已付款，30已发货，40交易完成
     */
    @PostMapping("admin/order/deliver")
    @Operation(summary = "admin deliver order")
    public ApiRestResponse delivered(@RequestParam String orderNo) {
        orderService.deliver(orderNo);
        return ApiRestResponse.success();
    }
    /**
     * 完结订单。订单状态流程：0用户已取消，10未付款，20已付款，30已发货，40交易完成。管理员和用户都可以调用
     */
    @PostMapping("order/finish")
    @Operation(summary = "finish order")
    public ApiRestResponse finish(@RequestParam String orderNo) {
        orderService.finish(orderNo);
        return ApiRestResponse.success();
    }
}

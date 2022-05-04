package com.lcy.campusmall.controller;

import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.service.OrderService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

}

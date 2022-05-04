package com.lcy.campusmall.service;

import com.github.pagehelper.PageInfo;
import com.lcy.campusmall.model.request.CreateOrderReq;
import com.lcy.campusmall.model.vo.OrderVO;
import org.springframework.transaction.annotation.Transactional;

public interface OrderService {
    @Transactional(rollbackFor = Exception.class)
    String create(CreateOrderReq createOrderReq);

    OrderVO detail(String orderNo);

    PageInfo listForCustomer(Integer pageNum, Integer pageSize);

    void cancel(String orderNo);
}

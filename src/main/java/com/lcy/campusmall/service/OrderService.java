package com.lcy.campusmall.service;

import com.lcy.campusmall.model.request.CreateOrderReq;
import org.springframework.transaction.annotation.Transactional;

public interface OrderService {
    @Transactional(rollbackFor = Exception.class)
    String create(CreateOrderReq createOrderReq);
}

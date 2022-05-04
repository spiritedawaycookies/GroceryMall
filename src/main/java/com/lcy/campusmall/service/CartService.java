package com.lcy.campusmall.service;

import com.lcy.campusmall.model.vo.CartVO;

import java.util.List;

public interface CartService {
    List<CartVO> list(Integer userId);

    List<CartVO> add(Integer userId, Integer productId, Integer count);
}

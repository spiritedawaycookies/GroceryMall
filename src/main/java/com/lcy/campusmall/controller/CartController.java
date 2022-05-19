package com.lcy.campusmall.controller;

import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.filter.UserFilter;
import com.lcy.campusmall.model.dao.ProductMapper;
import com.lcy.campusmall.model.pojo.Product;
import com.lcy.campusmall.model.vo.CartVO;
import com.lcy.campusmall.service.CartService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 描述：     购物车Controller
 */
@CrossOrigin(origins = {Constant.FRONTEND_URL,Constant.PUBLIC_FRONTEND_URL})
@RestController//json格式的必须是restcontroller
@RequestMapping("/cart")
public class CartController {
    @Autowired
    CartService cartService;

    @Autowired
    ProductMapper productMapper;

    @GetMapping("/list")
    @Operation(summary = "cart list")
    public ApiRestResponse list() {
        //内部获取用户ID，防止横向越权
        List<CartVO> cartList = cartService.list(UserFilter.currentUser.getId());
        return ApiRestResponse.success(cartList);
    }

    @PostMapping("/add")
    @Operation(summary = "add to cart")
    public ApiRestResponse add(@RequestParam Integer productId, @RequestParam Integer count) {

        List<CartVO> cartVOList = cartService.add(UserFilter.currentUser.getId(), productId, count);
        return ApiRestResponse.success(cartVOList);
    }

    @PostMapping("/update")
    @Operation(summary = "update cart")
    public ApiRestResponse update(@RequestParam Integer productId, @RequestParam Integer count) {
        List<CartVO> cartVOList = cartService
                .update(UserFilter.currentUser.getId(), productId, count);
        return ApiRestResponse.success(cartVOList);
    }
    @PostMapping("/delete")
    @Operation(summary = "delete cart")
    public ApiRestResponse delete(@RequestParam Integer productId) {
        //不能传入userID，cartID，否则可以删除别人的购物车
        List<CartVO> cartVOList = cartService.delete(UserFilter.currentUser.getId(), productId);
        return ApiRestResponse.success(cartVOList);
    }
    @PostMapping("/select")
    @Operation(summary = "select/deselect one product")
    public ApiRestResponse select(@RequestParam Integer productId, @RequestParam Integer selected) {
        //不能传入userID，cartID，否则可以删除别人的购物车
        List<CartVO> cartVOList = cartService
                .selectOrNot(UserFilter.currentUser.getId(), productId, selected);
        return ApiRestResponse.success(cartVOList);
    }

    @PostMapping("/selectAll")
    @Operation(summary = "select/deselect all product")
    public ApiRestResponse selectAll(@RequestParam Integer selected) {
        //不能传入userID，cartID，否则可以删除别人的购物车
        List<CartVO> cartVOList = cartService
                .selectAllOrNot(UserFilter.currentUser.getId(), selected);
        return ApiRestResponse.success(cartVOList);
    }
}

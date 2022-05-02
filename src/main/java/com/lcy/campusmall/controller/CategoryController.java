package com.lcy.campusmall.controller;

import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.pojo.User;
import com.lcy.campusmall.model.request.AddCategoryReq;
import com.lcy.campusmall.service.CategoryService;
import com.lcy.campusmall.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@Controller
public class CategoryController {
    @Autowired
    UserService userService;
    @Autowired
    CategoryService categoryService;

    /**
     * 后台添加目录
     */

    @Operation(summary = "添加商品类别")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "成功添加", content = {@Content(mediaType = "application/json")}),
            @ApiResponse(responseCode = "404", description = "添加失败", content = @Content)
    })
    @PostMapping("admin/category/add")
    @ResponseBody
    //@从Requestbody里找post参数
    public ApiRestResponse addCategory(HttpSession session,
                                       @Valid @RequestBody AddCategoryReq addCategoryReq) {
        User currentUser = (User) session.getAttribute(Constant.CAMPUS_MALL_USER);
        if (currentUser == null) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN);
        }
        //校验是否是管理员
        //如果每次都是重复写这些就很重复 所以干脆写进filter
//        boolean adminRole = userService.checkAdminRole(currentUser);
//        if (adminRole) {
//            //是管理员，执行操作
//            categoryService.add(addCategoryReq);
//            return ApiRestResponse.success();
//        } else {
//            return ApiRestResponse.error(MallExceptionEnum.NEED_ADMIN);
//        }
        categoryService.add(addCategoryReq);
        return ApiRestResponse.success();
    }


}

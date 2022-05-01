package com.lcy.campusmall.controller;

import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.pojo.User;
import com.lcy.campusmall.model.request.AddCategoryReq;
import com.lcy.campusmall.service.CategoryService;
import com.lcy.campusmall.service.UserService;
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

    @PostMapping("admin/category/add")
    @ResponseBody
    //@RequestBody从body里找参数
    public ApiRestResponse addCategory(HttpSession session,
                                        @Valid @RequestBody AddCategoryReq addCategoryReq) {
           User currentUser = (User) session.getAttribute(Constant.CAMPUS_MALL_USER);
        if (currentUser == null) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_LOGIN);
        }
        //校验是否是管理员
        boolean adminRole = userService.checkAdminRole(currentUser);
        if (adminRole) {
            //是管理员，执行操作
            categoryService.add(addCategoryReq);
            return ApiRestResponse.success();
        } else {
            return ApiRestResponse.error(MallExceptionEnum.NEED_ADMIN);
        }
    }
}

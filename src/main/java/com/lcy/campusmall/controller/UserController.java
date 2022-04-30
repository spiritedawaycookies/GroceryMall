package com.lcy.campusmall.controller;

import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.pojo.User;
import com.lcy.campusmall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("/test")
    @ResponseBody
    public User personalPage() {
        return userService.getUser();
    }
    /**
     * 注册
     */
    @PostMapping("/register")
    @ResponseBody
    //参数在请求中,所以要加注解指定参数名
    public ApiRestResponse register(@RequestParam("userName") String userName,
                                    @RequestParam("password") String password) throws MallException {
        if (StringUtils.isEmpty(userName)) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_USER_NAME);
        }
        if (StringUtils.isEmpty(password)) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_PASSWORD);
        }
        //密码长度不能少于8位
        if (password.length() < 8) {
            return ApiRestResponse.error(MallExceptionEnum.PASSWORD_TOO_SHORT);
        }
        userService.register(userName, password);
        return ApiRestResponse.success();
    }
}

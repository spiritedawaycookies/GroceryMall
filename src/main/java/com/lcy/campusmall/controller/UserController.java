package com.lcy.campusmall.controller;

import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.pojo.User;
import com.lcy.campusmall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@CrossOrigin(origins = Constant.FRONTEND_URL)

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
    public ApiRestResponse register(@RequestParam(name="userName") String userName,@RequestParam(name="nickname") String nickname,
                                    @RequestParam(name="password") String password) throws MallException {
        if (StringUtils.isEmpty(nickname)) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_NICKNAME);
        }
        if (StringUtils.isEmpty(password)) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_PASSWORD);
        }
        //密码长度不能少于8位
        if (password.length() < 8) {
            return ApiRestResponse.error(MallExceptionEnum.PASSWORD_TOO_SHORT);
        }
        userService.register(userName, password,nickname);
        return ApiRestResponse.success();
    }
    /**
     * 登录
     */
    @PostMapping("/login")
    @ResponseBody
    public ApiRestResponse login(@RequestParam("userName") String userName,
                                 @RequestParam("password") String password, HttpSession session)
            throws MallException {
        if (StringUtils.isEmpty(userName)) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_USER_NAME);
        }
        if (StringUtils.isEmpty(password)) {
            return ApiRestResponse.error(MallExceptionEnum.NEED_PASSWORD);
        }
        User user = userService.login(userName, password);
        //返回用户信息时，不返回密码
        user.setPassword(null);
        session.setAttribute(Constant.CAMPUS_MALL_USER, user);
        return ApiRestResponse.success(user);
    }
}

package com.lcy.campusmall.service.impl;

import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.dao.UserMapper;
import com.lcy.campusmall.model.pojo.User;
import com.lcy.campusmall.service.UserService;
import com.lcy.campusmall.utils.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;

    @Override
    public User getUser() {
        return userMapper.selectByPrimaryKey(1);
    }

    @Override
    public void register(String userName, String password) throws MallException {
        //查询用户名是否存在，不允许重名
        User result = userMapper.selectByName(userName);
        if (result != null) {
            throw new MallException(MallExceptionEnum.NAME_EXISTED);
        }

        //写到数据库
        User user = new User();
        user.setUsername(userName);
        int salt = new Random().nextInt(1000) + 1000; //盐值
        user.setSalt(salt);

        user.setPassword(MD5Utils.md5Digest(password, salt, Constant.SALT_ROUND));

        int count = userMapper.insertSelective(user);
        if (count == 0) {
            throw new MallException(MallExceptionEnum.INSERT_FAILED);
        }
    }

    public User login(String userName, String password) throws MallException {
        String md5Password = null;
        Integer salt = userMapper.selectByName(userName).getSalt();
        md5Password = MD5Utils.md5Digest(password, salt, Constant.SALT_ROUND);

        User user = userMapper.selectLogin(userName, md5Password);
        if (user == null) {
            throw new MallException(MallExceptionEnum.WRONG_PASSWORD);
        }
        return user;
    }
}

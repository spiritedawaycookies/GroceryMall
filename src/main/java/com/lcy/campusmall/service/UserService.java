package com.lcy.campusmall.service;

import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.model.pojo.User;

public interface UserService {
    User getUser();
    void register(String userName, String password) throws MallException;
    User login(String userName, String password) throws MallException;

    boolean checkAdminRole(User user);
}

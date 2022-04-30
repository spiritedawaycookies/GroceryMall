package com.lcy.campusmall.model.dao;

import com.lcy.campusmall.model.pojo.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User row);

    int insertSelective(User row);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User row);

    int updateByPrimaryKey(User row);

    User selectByName(String userName);
    //如果有多个参数是要注明的
    User selectLogin(@Param("userName") String userName, @Param("password") String password);
}
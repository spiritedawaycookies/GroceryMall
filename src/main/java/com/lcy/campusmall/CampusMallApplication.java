package com.lcy.campusmall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(basePackages = "com.lcy.campusmall.model.dao")
public class CampusMallApplication {

    public static void main(String[] args) {
        SpringApplication.run(CampusMallApplication.class, args);
    }

}

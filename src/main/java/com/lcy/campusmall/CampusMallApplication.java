package com.lcy.campusmall;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;


@SpringBootApplication
@MapperScan(basePackages = "com.lcy.campusmall.model.dao")
@OpenAPIDefinition
@EnableCaching
public class CampusMallApplication {

    public static void main(String[] args) {
        SpringApplication.run(CampusMallApplication.class, args);
    }

}

package com.lcy.campusmall.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Constant {
    public static final String CAMPUS_MALL_USER = "mall_user";
    public static final Integer SALT_ROUND=2;

    public static String FILE_UPLOAD_DIR;
    @Value("${file.upload.dir}")//配置文件中写 static变量用普通方式无法注入
    public void setFileUploadDir(String fileUploadDir){
        FILE_UPLOAD_DIR= fileUploadDir;
    }
}

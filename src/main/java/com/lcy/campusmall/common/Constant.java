package com.lcy.campusmall.common;

import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


import java.util.Set;
import com.google.common.collect.Sets;
@Component
public class Constant {
    public static final String CAMPUS_MALL_USER = "mall_user";
    public static final Integer SALT_ROUND=2;
    public static final Double TAX_RATE=0.12;
    public static String FILE_UPLOAD_DIR;
    public static final String BACKEND_URL="http://localhost:8083";
    public static final String FRONTEND_URL="http://localhost:3001";
    @Value("${file.upload.dir}")//配置文件中写 static变量用普通方式无法注入
    public void setFileUploadDir(String fileUploadDir){
        FILE_UPLOAD_DIR= fileUploadDir;
    }
    public interface ProductListOrderBy{
        Set<String> PRICE_ASC_DESC=Sets.newHashSet("price desc","price asc");
        Set<String> SALES_ASC_DESC=Sets.newHashSet("sales desc","sales asc");
    }
    public interface SaleStatus{
        int NOT_SALE=0;
        int SALE=1;
    }
    public interface Cart{
        int UN_CHECKED = 0;//购物车未选中状态
        int CHECKED = 1;//购物车选中状态
    }

    public enum OrderStatusEnum {
        CANCELED(0, "Cancelled"),
        NOT_PAID(10, "Not paid"),
        PAID(20, "Paid"),
        DELIVERED(30, "Delivered"),
        FINISHED(40, "Completed");

        private String value;
        private int code;

        OrderStatusEnum(int code, String value) {
            this.value = value;
            this.code = code;
        }
        //从code拿到状态
        public static OrderStatusEnum codeOf(int code) throws MallException {
            for (OrderStatusEnum orderStatusEnum : values()) {
                if (orderStatusEnum.getCode() == code) {
                    return orderStatusEnum;
                }
            }
            throw new MallException(MallExceptionEnum.NO_ENUM);
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public int getCode() {
            return code;
        }

        public void setCode(int code) {
            this.code = code;
        }
    }


}

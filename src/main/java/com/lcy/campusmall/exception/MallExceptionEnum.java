package com.lcy.campusmall.exception;

public enum MallExceptionEnum {

    /**
     * 描述：     异常枚举
     */

    NEED_USER_NAME(10001, "Username cannot be null"),

    NEED_PASSWORD(10002, "Password cannot be null"),

    PASSWORD_TOO_SHORT(10003, "Password length cannot be less than 8 digits"),

    NAME_EXISTED(10004, "No duplicate names allowed"),

    INSERT_FAILED(10005, "Insert failed, please try again"),

    WRONG_PASSWORD(10006, "Password error"),

    NEED_LOGIN(10007, "User not logged in"),

    UPDATE_FAILED(10008, "Update failed"),

    NEED_ADMIN(10009, "No administrator privileges"),

    PARA_NOT_NULL(10010, "Parameter cannot be empty"),

    CREATE_FAILED(10011, "Failed to add"),

    REQUEST_PARAM_ERROR(10012, "Parameter error"),

    DELETE_FAILED(10013, "Delete failed"),

    MKDIR_FAILED(10014, "Folder creation failed"),

    UPLOAD_FAILED(10015, "Failed to upload image"),

    NOT_SALE(10016, "Product status not available for sale"),

    NOT_ENOUGH(10017, "Product out of stock"),

    CART_EMPTY(10018, "Shopping cart is empty"),

    NO_ENUM(10019, "No corresponding enumeration found"),

    NO_ORDER(10020, "Order does not exist"),

    NOT_YOUR_ORDER(10021, "Order does not belong to you"),

    WRONG_ORDER_STATUS(10022, "Order status does not match"),

    SYSTEM_ERROR(20000, "System exception, please check the specific error message from the console or log");



    /**
     * 异常码
     */
    Integer code;
    /**
     * 异常信息
     */
    String msg;

    MallExceptionEnum(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}


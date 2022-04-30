package com.lcy.campusmall.exception;

import java.util.ArrayList;
import java.util.List;

import com.lcy.campusmall.common.ApiRestResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 描述：     处理统一异常的handler
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    private final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    @ResponseBody
    public Object handleException(Exception e) {
//        前面因为用ApiRestResponse处理所以输出的格式是三个参数
//        这种方法是吧userservice里面throw 的方法拦截在globalexceptionhandler里面,使5个参数的也被ApiRestResponse处理所以就是3个参数
//        处理其他异常
        log.error("Default Exception: ", e);
        return ApiRestResponse.error(MallExceptionEnum.SYSTEM_ERROR);
    }

    @ExceptionHandler(MallException.class)
    @ResponseBody
    public Object handleMallException(MallException e) {
        //处理mall异常
        log.error("MallException: ", e);
        return ApiRestResponse.error(e.getCode(), e.getMessage());
    }

//    @ExceptionHandler(MethodArgumentNotValidException.class)
//    @ResponseBody
//    public ApiRestResponse handleMethodArgumentNotValidException(
//            MethodArgumentNotValidException e) {
//        log.error("MethodArgumentNotValidException: ", e);
//        return handleBindingResult(e.getBindingResult());
//    }
//
//    private ApiRestResponse handleBindingResult(BindingResult result) {
//        //把异常处理为对外暴露的提示
//        List<String> list = new ArrayList<>();
//        if (result.hasErrors()) {
//            List<ObjectError> allErrors = result.getAllErrors();
//            for (ObjectError objectError : allErrors) {
//                String message = objectError.getDefaultMessage();
//                list.add(message);
//            }
//        }
//        if (list.size() == 0) {
//            return ApiRestResponse.error(MallExceptionEnum.REQUEST_PARAM_ERROR);
//        }
//        return ApiRestResponse
//                .error(MallExceptionEnum.REQUEST_PARAM_ERROR.getCode(), list.toString());
//    }
}
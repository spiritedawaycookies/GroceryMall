package com.lcy.campusmall.controller;

import com.lcy.campusmall.common.ApiRestResponse;
import com.lcy.campusmall.common.Constant;
import com.lcy.campusmall.exception.MallException;
import com.lcy.campusmall.exception.MallExceptionEnum;
import com.lcy.campusmall.model.pojo.Product;
import com.lcy.campusmall.model.request.AddProductReq;
import com.lcy.campusmall.model.request.UpdateProductReq;
import com.lcy.campusmall.service.ProductService;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.github.pagehelper.PageInfo;

/**
 * 描述：     后台商品管理Controller
 */
/*
@Controller 注解把类注册进Spring容器中，让Spring容器来管理这个类，
并告诉Spring容器这个类是一个控制器。@Controller 注解可以认为是被标注类的原型（stereotype），
表明了这个类所承担的角色。分派器（DispatcherServlet）会扫描所有注解了 @Controller 的类，
检测其中通过 @RequestMapping 注解配置的方法


当今让控制器实现一个REST API是非常常见的，这种场景下控制器只需要提供JSON、XML或其他自定义的媒体类型内容即可。
你不需要在每个 @RequestMapping 方法上都增加一个 @ResponseBody 注解，更简明的做法是，给你的控制器加上一个
 @RestController 的注解。

 @RestController 是一个原生内置的注解，它结合了 @ResponseBody 与 @Controller 注解的功能。
 不仅如此，它也让你的控制器更表义

 总的来说就是，如果你想使用控制器处理完请求之后跳转到画面那么你就使用 @Controller 。而如果你想向画面返回一些内容，
 例如，返回JSON，XML或自定义mediaType内容到页面，那么 @RestController 更适合你
 */
@CrossOrigin(origins = {Constant.FRONTEND_URL,Constant.PUBLIC_FRONTEND_URL})
@RestController
public class ProductAdminController {
    @Autowired
    ProductService productService;

    @Operation(summary = "add product")
    @PostMapping("admin/product/add")
    public ApiRestResponse addProduct(@Valid @RequestBody AddProductReq addProductReq) {
        productService.add(addProductReq);
        return ApiRestResponse.success();
    }
    @Operation(summary = "upload image")
    @PostMapping("admin/upload/file")
    public ApiRestResponse upload(HttpServletRequest httpServletRequest, @RequestParam("file") MultipartFile file) {
        String filename = file.getOriginalFilename();
        String suffix = filename.substring(filename.lastIndexOf('.'));
        //生成文件名称UUID
        UUID uuid = UUID.randomUUID();
        String newFileName = uuid + suffix;
        //创建文件
        File fileDirectory = new File(Constant.FILE_UPLOAD_DIR);
        File destFile = new File(Constant.FILE_UPLOAD_DIR + newFileName);
        if (!fileDirectory.exists()) {
            if (!fileDirectory.mkdir()) {
                throw new MallException(MallExceptionEnum.MKDIR_FAILED);
            }
        }
        try {
            //传入的文件写到空的新文件
            file.transferTo(destFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            //返回上传地址 ip和端口号 加“”是为了把stringbuffer转换string
            return ApiRestResponse
                    .success(getHost(new URI(httpServletRequest.getRequestURL() + "")) + "/images/"
                            + newFileName);
        } catch (URISyntaxException e) {
            return ApiRestResponse.error(MallExceptionEnum.UPLOAD_FAILED);
        }
    }

    //获取ip和端口号
    private URI getHost(URI uri) {
        URI effectiveURI;
        try {
            effectiveURI = new URI(uri.getScheme(), uri.getUserInfo(), uri.getHost(), uri.getPort(),
                    null, null, null);
        } catch (URISyntaxException e) {
            effectiveURI = null;
        }
        return effectiveURI;
    }

    @Operation(summary = "admin update product")
    @PostMapping("/admin/product/update")
    public ApiRestResponse updateProduct(@Valid @RequestBody UpdateProductReq updateProductReq) {
        Product product = new Product();
        BeanUtils.copyProperties(updateProductReq, product);
        productService.update(product);
        return ApiRestResponse.success();
    }

    @Operation(summary = "admin delete product")
    @PostMapping("/admin/product/delete")
    public ApiRestResponse deleteProduct(@RequestParam Integer id) {
        productService.delete(id);
        return ApiRestResponse.success();
    }

    @Operation(summary = "admin batch update selling status")
    @PostMapping("/admin/product/batchUpdateSellStatus")
    public ApiRestResponse batchUpdateSellStatus(@RequestParam Integer[] ids,
                                                 @RequestParam Integer sellStatus) {
        productService.batchUpdateSellStatus(ids, sellStatus);
        return ApiRestResponse.success();
    }

    @Operation(summary = "admin product list")
    @GetMapping("/admin/product/list")
    public ApiRestResponse list(@RequestParam Integer pageNum,
                                @RequestParam Integer pageSize) {
        PageInfo pageInfo = productService.listForAdmin(pageNum, pageSize);
        return ApiRestResponse.success(pageInfo);
    }


}

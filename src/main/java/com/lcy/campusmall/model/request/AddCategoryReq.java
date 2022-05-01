package com.lcy.campusmall.model.request;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * 添加目录的请求类,为了安全起见最好不要直接用pojo的category以免暴露太多参数
 */
public class AddCategoryReq {
    //参数校验
    @Size(min = 2, max = 10,message = "characters数量错误")
    @NotNull
    private String name;
    @NotNull
    @Max(value = 3,message = "不能超过3位")
    private Integer type;
    @NotNull

    private Integer parentId;
    @NotNull

    private Integer orderNum;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(Integer orderNum) {
        this.orderNum = orderNum;
    }

    @Override
    public String toString() {
        return "AddCategoryReq{" +
                "name='" + name + '\'' +
                ", type=" + type +
                ", parentId=" + parentId +
                ", orderNum=" + orderNum +
                '}';
    }

}

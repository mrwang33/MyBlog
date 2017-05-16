package com.mb.entity;

/**
 * @author 王欢
 * 文章所属种类实体类
 */
public class Classify {
    private Integer classifyId;

    private String classifyName;

    public Integer getClassifyId() {
        return classifyId;
    }

    public void setClassifyId(Integer classifyId) {
        this.classifyId = classifyId;
    }

    public String getClassifyName() {
        return classifyName;
    }

    public void setClassifyName(String classifyName) {
        this.classifyName = classifyName == null ? null : classifyName.trim();
    }
}
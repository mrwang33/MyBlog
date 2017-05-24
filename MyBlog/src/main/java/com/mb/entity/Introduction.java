package com.mb.entity;

/**
 * @author 王欢
 * 自我介绍
 */
public class Introduction {
    private Integer id;
    //自我介绍
    private String introduction;
    
    public Introduction() {
	}

	public Introduction(Integer id, String introduction) {
		this.id = id;
		this.introduction = introduction;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction == null ? null : introduction.trim();
    }
}
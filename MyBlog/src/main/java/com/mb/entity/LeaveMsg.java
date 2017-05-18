package com.mb.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @author 王欢
 * 留言实体类
 */
public class LeaveMsg implements Serializable{
	private static final long serialVersionUID = -8571490570720368434L;
	//主键
    private String lmId;
    //留言内容
    private String lmContent;
    //留言邮箱
    private String lmEmail;
    //昵称
    private String lmName;
    //留言时间
    private Date lmDate;
    //父留言 是根留言的话 此项为空
    private String lmFatherid;
    //子留言
    private List<LeaveMsg> childLm;
    

    public LeaveMsg() {
	}

    
    
	public LeaveMsg(String lmId, String lmContent, String lmEmail, String lmName, Date lmDate, String lmFatherid,
			List<LeaveMsg> childLm) {
		this.lmId = lmId;
		this.lmContent = lmContent;
		this.lmEmail = lmEmail;
		this.lmName = lmName;
		this.lmDate = lmDate;
		this.lmFatherid = lmFatherid;
		this.childLm = childLm;
	}

	public String getLmId() {
        return lmId;
    }

    public void setLmId(String lmId) {
        this.lmId = lmId == null ? null : lmId.trim();
    }

    public String getLmContent() {
        return lmContent;
    }

    public void setLmContent(String lmContent) {
        this.lmContent = lmContent == null ? null : lmContent.trim();
    }

    public String getLmEmail() {
        return lmEmail;
    }

    public void setLmEmail(String lmEmail) {
        this.lmEmail = lmEmail == null ? null : lmEmail.trim();
    }

    public String getLmName() {
        return lmName;
    }

    public void setLmName(String lmName) {
        this.lmName = lmName == null ? null : lmName.trim();
    }

    public Date getLmDate() {
        return lmDate;
    }

    public void setLmDate(Date lmDate) {
        this.lmDate = lmDate;
    }

    public String getLmFatherid() {
        return lmFatherid;
    }

    public void setLmFatherid(String lmFatherid) {
        this.lmFatherid = lmFatherid == null ? null : lmFatherid.trim();
    }

	public List<LeaveMsg> getChildLm() {
		return childLm;
	}

	public void setChildLm(List<LeaveMsg> childLm) {
		this.childLm = childLm;
	}
    
}
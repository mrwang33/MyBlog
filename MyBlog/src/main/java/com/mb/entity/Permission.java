package com.mb.entity;

import java.io.Serializable;

/**
 * @author 王欢
 * 权限类
 */
public class Permission implements Serializable{
	private static final long serialVersionUID = -8885888155318025511L;
	//主键
	private String perId;
	//权限
    private String permissions;
    //权限代码
    private String perCode;
    
    public Permission() {
	}
    
	public Permission(String perId, String permissions, String perCode) {
		this.perId = perId;
		this.permissions = permissions;
		this.perCode = perCode;
	}

	public String getPerId() {
        return perId;
    }

    public void setPerId(String perId) {
        this.perId = perId == null ? null : perId.trim();
    }

    public String getPermissions() {
        return permissions;
    }

    public void setPermissions(String permissions) {
        this.permissions = permissions == null ? null : permissions.trim();
    }

    public String getPerCode() {
        return perCode;
    }

    public void setPerCode(String perCode) {
        this.perCode = perCode == null ? null : perCode.trim();
    }
    
}
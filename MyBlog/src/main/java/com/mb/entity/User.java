package com.mb.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * @author 王欢
 * 用户类
 */
public class User implements Serializable{
	private static final long serialVersionUID = -5575698448745487260L;
	//主键
    private String userId;
    //用户名
    private String username;
    //密码
    private String password;
    //注册时间
    private Date createdate;
    //用户状态 true 表示可用 false表示不可用
    private Boolean userState;
    //用户的角色
    private List<Role> roles;
    
    public User() {
	}

	public User(String userId, String username, String password, Date createdate, Boolean userState, List<Role> roles) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.createdate = createdate;
		this.userState = userState;
		this.roles = roles;
	}

	public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId == null ? null : userId.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Boolean getUserState() {
        return userState;
    }

    public void setUserState(Boolean userState) {
        this.userState = userState;
    }

	public List<Role> getRoles() {
		return roles;
	}

	public void setRoles(List<Role> roles) {
		this.roles = roles;
	}
    
    
}
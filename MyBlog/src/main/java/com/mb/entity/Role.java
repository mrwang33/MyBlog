package com.mb.entity;

import java.io.Serializable;
import java.util.List;

/**
 * @author 王欢
 * 角色类
 */
public class Role implements Serializable{
	private static final long serialVersionUID = -4910452280507505618L;
	//主键
	private String roleId;
	//角色名
    private String roleName;
    //角色拥有权限
    private List<Permission> permissions;

    public Role() {
	}

	public Role(String roleId, String roleName, List<Permission> permissions) {
		this.roleId = roleId;
		this.roleName = roleName;
		this.permissions = permissions;
	}

	public String getRoleId() {
        return roleId;
    }

    public void setRoleId(String roleId) {
        this.roleId = roleId == null ? null : roleId.trim();
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName == null ? null : roleName.trim();
    }

	public List<Permission> getPermissions() {
		return permissions;
	}

	public void setPermissions(List<Permission> permissions) {
		this.permissions = permissions;
	}
    
    
}
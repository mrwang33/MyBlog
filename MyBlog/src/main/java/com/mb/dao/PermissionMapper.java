package com.mb.dao;

import java.util.List;

import com.mb.entity.Permission;
import com.mb.entity.Role;

public interface PermissionMapper extends BaseMapper<Permission>{
	//获取特定角色的权限
	public List<Permission> getRolePermissions(Role role);
}
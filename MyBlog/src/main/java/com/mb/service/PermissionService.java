package com.mb.service;

import java.util.List;

import com.mb.entity.Permission;
import com.mb.entity.Role;

public interface PermissionService extends BaseService<Permission> {
	//获取特定角色的权限
	public List<Permission> getRolePermissions(Role role);
}

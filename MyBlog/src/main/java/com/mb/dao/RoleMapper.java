package com.mb.dao;

import java.io.Serializable;
import java.util.List;

import com.mb.entity.Role;

public interface RoleMapper extends BaseMapper<Role>{
	//根据user id 获取该用户对应角色
	public List<Role> getUserRole(Serializable userId);
	//根据角色名查找用户,用于新增角色防止重复
	public List<Role> getRoleByName(Role role);
	//清空该角色权限
	public int emptyRolePer(Role role);
}
package com.mb.dao;

import java.io.Serializable;
import java.util.List;

import com.mb.entity.Role;

public interface RoleMapper extends BaseMapper<Role>{
	//根据user id 获取该用户对应角色
	public List<Role> getUserRole(Serializable userId);
}
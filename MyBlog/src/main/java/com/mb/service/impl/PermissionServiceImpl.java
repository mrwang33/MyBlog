package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.PermissionMapper;
import com.mb.entity.Permission;
import com.mb.entity.Role;
import com.mb.service.PermissionService;

@Service("permissionService")
public class PermissionServiceImpl implements PermissionService {
	@Resource
	private PermissionMapper permissionMapper;
	
	
	@Override
	public List<Permission> getAll() {
		return permissionMapper.getAll();
	}

	@Override
	public Permission getById(Serializable id) {
		return permissionMapper.getById(id);
	}

	@Override
	public int insert(Permission t) throws Exception {
		return permissionMapper.insert(t);
	}

	@Override
	public int update(Permission t) throws Exception {
		return permissionMapper.update(t);
	}

	@Override
	public int delete(Serializable id) throws Exception {
		return permissionMapper.delete(id);
	}

	@Override
	public int deleteList(Serializable[] ids) throws Exception {
		return permissionMapper.deleteList(ids);
	}

	@Override
	public List<Permission> getRolePermissions(Role role) {
		return permissionMapper.getRolePermissions(role);
	}

}

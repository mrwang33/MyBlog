package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.common.CommonUtils;
import com.mb.dao.RoleMapper;
import com.mb.entity.Role;
import com.mb.entity.User;
import com.mb.service.RoleService;

@Service("roleService")
public class RoleServiceImpl implements RoleService {
	@Resource
	private RoleMapper roleMapper;
	
	@Override
	public List<Role> getAll() {
		return roleMapper.getAll();
	}

	@Override
	public Role getById(Serializable id) {
		return roleMapper.getById(id);
	}

	@Override
	public int insert(Role t) throws Exception {
		t.setRoleId(CommonUtils.getUUID());
		return roleMapper.insert(t);
	}

	@Override
	public int update(Role t) throws Exception {
		return roleMapper.update(t);
	}

	@Override
	public int delete(Serializable id) throws Exception {
		return roleMapper.delete(id);
	}

	@Override
	public int deleteList(Serializable[] id) throws Exception {
		return roleMapper.deleteList(id);
	}

	@Override
	public List<Role> getUserRole(Serializable userId) {
		return roleMapper.getUserRole(userId);
	}

	@Override
	public List<Role> getRoleByName(Role role) {
		return roleMapper.getRoleByName(role);
	}


}

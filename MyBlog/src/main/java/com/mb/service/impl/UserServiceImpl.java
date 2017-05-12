package com.mb.service.impl;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.common.CommonUtils;
import com.mb.dao.UserMapper;
import com.mb.entity.User;
import com.mb.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource
	private UserMapper userMapper;
	
	@Override
	public List<User> getAll() {
		return userMapper.getAll();
	}

	@Override
	public User getById(Serializable id) {
		return userMapper.getById(id);
	}

	@Override
	public int insert(User user) {
		user.setUserId(CommonUtils.getUUID());
		user.setCreatedate(new Timestamp(new Date().getTime()));
		return userMapper.insert(user);
	}

	@Override
	public int update(User t) {
		//先清空该用户的所有角色
		userMapper.emptyUserRole(t);
		return userMapper.update(t);
	}

	@Override
	public int delete(Serializable id) {
		return userMapper.delete(id);
	}

	@Override
	public int deleteList(Serializable[] ids) {
		return userMapper.deleteList(ids);
	}

	@Override
	public User login(User user) {
		return userMapper.login(user);
	}

	@Override
	public List<User> getUserByName(User user) {
		return userMapper.getUserByName(user);
	}

}

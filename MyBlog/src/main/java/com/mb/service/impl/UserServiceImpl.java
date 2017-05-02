package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.UserMapper;
import com.mb.entity.User;
import com.mb.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource
	private UserMapper userMapper;
	
	@Override
	public List<User> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User getById(Serializable id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(User t) {
		return userMapper.insert(t);
	}

	@Override
	public int update(User t) {
		return userMapper.update(t);
	}

	@Override
	public void delete(Serializable id) {
		userMapper.delete(id);
	}

	@Override
	public void deleteList(Serializable[] id) {
		// TODO Auto-generated method stub
	}

	@Override
	public User login(User user) {
		return userMapper.login(user);
	}

}

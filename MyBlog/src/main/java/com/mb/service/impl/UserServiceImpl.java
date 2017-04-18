package com.mb.service.impl;

import java.io.Serializable;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.dao.UserDAO;
import com.mb.entity.User;
import com.mb.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource
	private UserDAO userDAO;
	
	@Override
	public List<User> getAll() {
		return userDAO.getAll();
	}

	@Override
	public User getById(Serializable id) {
		return userDAO.getById(id);
	}

	@Override
	public int insert(User t) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int update(User t) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public void delete(Serializable id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteList(Serializable[] id) {
		// TODO Auto-generated method stub
		
	}


}

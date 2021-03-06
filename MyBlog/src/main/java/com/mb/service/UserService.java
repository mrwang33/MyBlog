package com.mb.service;

import java.util.List;

import com.mb.entity.User;

public interface UserService extends BaseService<User> {
	//login
	public User login(User user);
	//根据用户名查找用户,用于注册是检查用户名是否存在
	public List<User> getUserByName(User user);
}

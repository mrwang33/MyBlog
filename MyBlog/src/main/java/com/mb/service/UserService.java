package com.mb.service;

import com.mb.entity.User;

public interface UserService extends BaseService<User> {
	//login
	public User login(User user);
}

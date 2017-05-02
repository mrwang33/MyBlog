package com.mb.dao;

import com.mb.entity.User;

public interface UserMapper extends BaseMapper<User>{
	//login
	public User login(User user);
}
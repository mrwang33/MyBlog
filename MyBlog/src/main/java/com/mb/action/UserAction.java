package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mb.entity.User;
import com.mb.service.UserService;

@Controller
@RequestMapping("/user")
public class UserAction {
	@Resource
	private UserService userService;
	
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<User> all = userService.getAll();
		return all;
	}
}

package com.mb.action;

import java.io.IOException;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	
	@RequestMapping("/addUser")
	public String addUser(User user) {
		try {
			userService.insert(user);
			return "admin/userAndRole/user";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	@RequestMapping("/deleteUser")
	@ResponseBody //json格式
	public Object deleteUser(String[] pks) {
		try {
			return userService.deleteList(pks);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
}

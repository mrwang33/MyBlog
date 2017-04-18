package com.mb.action;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mb.entity.User;
import com.mb.service.UserService;

@Controller
@RequestMapping("/user")
public class UserAction {
	@Resource
	private UserService userService;

	@RequestMapping("/getUser")
	public String getUser(User user,Model model) {
		User byId = userService.getById(user.getId());
		model.addAttribute("user", byId);
		return "success";
	}
}

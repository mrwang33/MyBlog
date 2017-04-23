package com.mb.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainAction {

	@RequestMapping("/about")
	public String about() {
		//TODO 把相关东西查好
		return "about";
	}
	
	@RequestMapping("/leaveMsg")
	public String leaveMsg() {
		//TODO 把相关东西查好
		return "leaveMsg";
	}
	
	public String admin() {
		return "admin";
	}
	
}

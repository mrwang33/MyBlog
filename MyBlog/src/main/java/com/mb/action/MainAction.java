package com.mb.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainAction {

	@RequestMapping("/about")
	public String about() {
		return "about";
	}
	
	@RequestMapping("/leaveMsg")
	public String leaveMsg() {
		return "leaveMsg";
	}
}

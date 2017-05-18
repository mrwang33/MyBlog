package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mb.entity.LeaveMsg;
import com.mb.service.LeaveMsgService;

@Controller
@RequestMapping("/")
public class MainAction {
	@Resource
	private LeaveMsgService leaveMsgService;

	@RequestMapping("/about")
	public String about() {
		//TODO 把相关东西查好
		return "about";
	}
	
	@RequestMapping("/leaveMsg")
	public String leaveMsg(Model model) {
		List<LeaveMsg> rootLeaveMsg = leaveMsgService.getRootLeaveMsg();
		List<LeaveMsg> root = leaveMsgService.getAllChild(rootLeaveMsg);
		model.addAttribute("root", root);
		//总留言数
		model.addAttribute("length", leaveMsgService.getCount());
		return "leaveMsg";
	}
	
	@RequestMapping("/admin")
	public String admin() {
		return "admin/login";
	}
	
	@RequestMapping("/noPermission")
	public String error() {
		return "noPermission";
	}
}

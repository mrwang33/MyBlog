package com.mb.action;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mb.entity.User;

@Controller
@RequestMapping("/admin")
public class AdminAction {

	@RequestMapping("/login")
	public String login(User user,HttpServletRequest request) {
		Subject subject = SecurityUtils.getSubject() ;
        UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(),user.getPassword()) ;
        try {
			subject.login(token);
			return "admin/admin";
		} catch (Exception e) {
			request.setAttribute("error", "登录失败");
			return "redirect:/admin.action";
		}
	}
	
	@RequestMapping("/{loc}")
	public String loc(@PathVariable("loc")String loc) {
		return "admin/"+loc+"/"+loc;
	}
	
}

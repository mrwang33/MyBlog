package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mb.entity.About;
import com.mb.service.AboutService;

/**
 * @author 王欢
 * 博文管理controller
 */
@Controller
@RequestMapping("/about")
public class AboutAction {
	@Resource
	private AboutService aboutService;
	
	//获取所有博文
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<About> all = aboutService.getAll();
		return all;
	}
	
	//添加新博文
	@RequestMapping("/addAbout")
	public String addAbout(About about) {
		try{
			aboutService.insert(about);
			return "admin/about/about";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(Model model) {
		About about = aboutService.getById(1);
		model.addAttribute("about", about);
		return "admin/about/about";
	}
	
	
	//修改博文信息
	@RequestMapping("/editAbout")
	public String editAbout(About about) {
		try {
			aboutService.update(about);
			return "admin/about/about";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
}

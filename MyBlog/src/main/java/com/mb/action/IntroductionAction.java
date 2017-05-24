package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mb.entity.Introduction;
import com.mb.service.IntroductionService;

/**
 * @author 王欢
 * 自我介绍controller
 */
@Controller
@RequestMapping("/introduction")
public class IntroductionAction {
	@Resource
	private IntroductionService introductionService;
	
	//获取所有博文
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<Introduction> all = introductionService.getAll();
		return all;
	}
	
	//添加新博文
	@RequestMapping("/addIntroduction")
	public String addIntroduction(Introduction introduction) {
		try{
			introductionService.insert(introduction);
			return "admin/introduction/introduction";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(Model model) {
		Introduction introduction = introductionService.getById(1);
		model.addAttribute("introduction", introduction);
		return "admin/introduction/introduction";
	}
	
	
	//修改博文信息
	@RequestMapping("/editIntroduction")
	public String editIntroduction(Introduction introduction) {
		try {
			introductionService.update(introduction);
			return "admin/introduction/introduction";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
}

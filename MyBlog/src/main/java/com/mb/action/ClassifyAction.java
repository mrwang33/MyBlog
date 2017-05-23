package com.mb.action;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mb.entity.Permission;
import com.mb.entity.Classify;
import com.mb.service.PermissionService;
import com.mb.service.ClassifyService;

/**
 * @author 王欢
 * 博文分类操作controller
 */
@Controller
@RequestMapping("/classify")
public class ClassifyAction {
	@Resource
	private ClassifyService classifyService;
	@Resource
	private PermissionService permissionService;
	
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<Classify> all = classifyService.getAll();
		return all;
	}
	
	//跳转到添加页面
	@RequestMapping("/goAdd")
	public String goAdd(Model model) {
		return "admin/classify/addClassify";
	}
	
	//添加新分类
	@RequestMapping("/addClassify")
	public String addClassify(Classify classify) {
		try {
			classifyService.insert(classify);
			return "admin/classify/classify";
		}
		catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(String classifyId,Model model) {
		Classify classify = classifyService.getById(Integer.parseInt(classifyId));
		model.addAttribute("classify", classify);
		return "admin/classify/editClassify";
	}
	
	//修改
	@RequestMapping("/editClassify")
	public String editClassify(Classify classify) {
		try {
			classifyService.update(classify);
			return "admin/classify/classify";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//删除博文分类
	@RequestMapping("/deleteClassify")
	@ResponseBody //json格式
	public Object deleteClassify(String[] pks) {
		try {
			return classifyService.deleteList(pks);
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
}

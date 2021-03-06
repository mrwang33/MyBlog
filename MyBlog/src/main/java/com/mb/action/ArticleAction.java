package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mb.entity.Article;
import com.mb.entity.Classify;
import com.mb.service.ArticleService;
import com.mb.service.ClassifyService;

/**
 * @author 王欢
 * 博文管理controller
 */
@Controller
@RequestMapping("/article")
public class ArticleAction {
	@Resource
	private ArticleService articleService;
	@Resource
	private ClassifyService classifyService;
	
	//获取所有博文
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<Article> all = articleService.getAll();
		return all;
	}
	
	//跳转到添加页面
	@RequestMapping("/goAdd")
	public String goAdd(Model model) {
		 List<Classify> all = classifyService.getAll();
		 model.addAttribute("classifys", all);
		return "admin/article/addArticle";
	}
	
	//添加新博文
	@RequestMapping("/addArticle")
	public String addArticle(Article article) {
		try{
			articleService.insert(article);
			return "admin/article/article";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(String articleId,Model model) {
		List<Classify> all = classifyService.getAll();
		Article article = articleService.getById(articleId);
		model.addAttribute("article", article);
		model.addAttribute("classifys", all);
		return "admin/article/editArticle";
	}
	
	
	//修改博文信息
	@RequestMapping("/editArticle")
	public String editArticle(Article article) {
		try {
			articleService.update(article);
			return "admin/article/article";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	//删除博文
	@RequestMapping("/deleteArticle")
	@ResponseBody //json格式
	public Object deleteArticle(String[] pks) {
		try {
			return articleService.deleteList(pks);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}

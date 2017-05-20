package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mb.common.CommonUtils;
import com.mb.common.Page;
import com.mb.entity.Article;
import com.mb.entity.Classify;
import com.mb.entity.LeaveMsg;
import com.mb.service.ArticleService;
import com.mb.service.ClassifyService;
import com.mb.service.LeaveMsgService;

@Controller
@RequestMapping("/")
public class MainAction {
	@Resource
	private LeaveMsgService leaveMsgService;
	@Resource
	private ArticleService articleService;
	@Resource
	private ClassifyService ClassifyService;

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
	
	@RequestMapping("/blog")
	public String blog(Model model,Integer pageIndex,String keyWords,String classifyId) {
		//查找所有博文
		int count = articleService.getCount();
		Page<Article> page = new Page<Article>(3, count, null, null, 1);
		page = CommonUtils.createPage(page, pageIndex, keyWords, classifyId);
		page = articleService.getPage(page);
		List<Classify> classify = ClassifyService.getAll();
		model.addAttribute("page", page);
		model.addAttribute("classify", classify);
		return "blog";
	}
	
	//跳转到博客详情页
	@RequestMapping("/blogDetail")
	public String blogDetail(Model model,String articleId) {
		Article article = articleService.getById(articleId);
		model.addAttribute("article", article);
		return "blogDetail";
	}
}

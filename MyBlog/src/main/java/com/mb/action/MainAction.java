package com.mb.action;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mb.common.CommonUtils;
import com.mb.common.Page;
import com.mb.entity.Article;
import com.mb.entity.Classify;
import com.mb.entity.Comment;
import com.mb.entity.LeaveMsg;
import com.mb.service.AboutService;
import com.mb.service.ArticleService;
import com.mb.service.ClassifyService;
import com.mb.service.CommentService;
import com.mb.service.IntroductionService;
import com.mb.service.LeaveMsgService;

/**
 * @author 王欢
 * 主站contorller
 */
@Controller
@RequestMapping("/")
public class MainAction {
	@Resource
	private LeaveMsgService leaveMsgService;
	@Resource
	private ArticleService articleService;
	@Resource
	private ClassifyService ClassifyService;
	@Resource
	private CommentService commentService;
	@Resource
	private AboutService aboutService;
	@Resource
	private IntroductionService introductionService;
	
	
	public void addAttribute(Model model){
		List<Classify> classify = ClassifyService.getAll();
		//博文分类
		model.addAttribute("classify", classify);
		//热门博客
		model.addAttribute("hotArticles", articleService.getHotArticles());
		//自我介绍
		model.addAttribute("introduction", introductionService.getById(1));
	}

	@RequestMapping("/about")
	public String about(Model model) {
		//TODO 把相关东西查好
		this.addAttribute(model);
		//关于本站
		model.addAttribute("about", aboutService.getById(1));
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
	
	@RequestMapping("/blog")
	public String blog(Model model,Integer pageIndex,String keyWords,String classifyId) {
		if(keyWords!=null&&"".equals(keyWords)) {
			//替换留言中的html标签 防止xss注入攻击
			keyWords = keyWords.replaceAll("</?[^>]+>", "");
		}
		//查找所有博文
		int count = articleService.getCount(keyWords,classifyId);
		Page<Article> page = new Page<Article>(6, count, null, null, 1);
		page = CommonUtils.createPage(page, pageIndex, keyWords, classifyId);
		page = articleService.getPage(page);
		model.addAttribute("page", page);
		this.addAttribute(model);
		if (classifyId!=null&&!"".equals(classifyId)) {
			model.addAttribute("searchClas", ClassifyService.getById(Integer.parseInt(classifyId)));
		}
		return "blog";
	}
	
	//跳转到博客详情页
	@RequestMapping("/blogDetail")
	public String blogDetail(Model model,String articleId) {
		//先将浏览数加一
		try {
			List<Comment> treeComment = commentService.getAllCommentByTree(articleId);
			Article article = articleService.getById(articleId);
			articleService.addView(article);
			model.addAttribute("article", article);
			model.addAttribute("commentList", treeComment);
			//此博文下共多少评论
			model.addAttribute("commentSize",commentService.getCountInThisArticle(articleId));
			this.addAttribute(model);
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
		return "blogDetail";
	}
	
	//跳转到后台管理
	@RequestMapping("/admin")
	public String admin() {
		return "admin/login";
	}
	
	//权限不足的处理
	@RequestMapping("/noPermission")
	public String error() {
		return "noPermission";
	}

}

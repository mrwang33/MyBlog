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
import com.mb.service.ArticleService;
import com.mb.service.ClassifyService;
import com.mb.service.CommentService;
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
	@Resource
	private CommentService commentService;
	
	
	public void addAttribute(Model model){
		List<Classify> classify = ClassifyService.getAll();
		model.addAttribute("classify", classify);
		model.addAttribute("hotArticles", articleService.getHotArticles());
	}

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
		int count = articleService.getCount(keyWords,classifyId);
		Page<Article> page = new Page<Article>(3, count, null, null, 1);
		page = CommonUtils.createPage(page, pageIndex, keyWords, classifyId);
		page = articleService.getPage(page);
		model.addAttribute("page", page);
		this.addAttribute(model);
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
			model.addAttribute("commentSize",commentService.getCount(treeComment, 0));
			commentService.makeIndexZero();
			this.addAttribute(model);
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
		return "blogDetail";
	}
	
	//添加新评论
	@RequestMapping("/addComment")
	public String addComment(Comment comment) {
		String articleId = comment.getArticle().getArticleId();
		try {
			commentService.insert(comment);
			return "redirect:blogDetail.action?articleId="+articleId;
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
		
	}
}

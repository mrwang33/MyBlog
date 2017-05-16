package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
	/*
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(String articleId,Model model) {
		List<Role> roles = roleService.getAll();
		Article article = articleService.getById(articleId);
		model.addAttribute("article", JSONObject.toJSON(article));
		model.addAttribute("roles", roles);
		return "admin/article/editArticle";
	}
	
	
	//修改博文信息
	@RequestMapping("/editArticle")
	public String editArticle(Article article,String[] roleIds) {
		try {
			if (roleIds!=null&&roleIds.length>0) {
				ArrayList<Role> roleList = new ArrayList<Role>();
				for (String roleId : roleIds) {
					Role role = new Role();
					role.setRoleId(roleId);
					roleList.add(role);
				}
				article.setRoles(roleList);
			}
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
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	//根据博文名查找博文,用于注册和修改时检查博文名是否存在
	*//**
	 * @param article 前端传来的博文名
	 * @return
	 *//*
	@RequestMapping("/getArticleByName")
	@ResponseBody //json格式
	public Object getArticleByName(Article article) {
		List<Article> articles = articleService.getArticleByName(article);
		//如果是修改博文信息页 则需要移除list中需要修改的博文的本身
		if (article.getArticleId()!=null) {
			//查得当前正在进行修改的博文的信息
			Article currentArticle = articleService.getById(article.getArticleId());
			Iterator<Article> iterator = articles.iterator();
			while(iterator.hasNext()) {
				Article next = iterator.next();
				if (next.getArticlename().equals(currentArticle.getArticlename())) {
					iterator.remove();
				}
			}
		}
		if (articles!=null&&articles.size()>0) {
			//如果博文存在,则返回false表示验证不通过
			return false;
		}
		return true;
	}*/
}

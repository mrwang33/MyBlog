package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mb.entity.Article;
import com.mb.service.ArticleService;

/**
 * @author 王欢
 * 博文管理controller
 */
@Controller
@RequestMapping("/article")
public class ArticleAction {
	@Resource
	private ArticleService articleService;
	//获取所有用户
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<Article> all = articleService.getAll();
		return all;
	}
	
	//跳转到添加页面
	@RequestMapping("/goAdd")
	public String goAdd(Model model) {
//		List<Role> roles = roleService.getAll();
//		model.addAttribute("roles", roles);
		return "admin/article/addArticle";
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
	
	//添加新用户
	@RequestMapping("/addArticle")
	public String addArticle(Article article,String[] roleIds) {
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
			articleService.insert(article);
			return "admin/article/article";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//修改用户信息
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
	
	//删除用户
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
	
	//根据用户名查找用户,用于注册和修改时检查用户名是否存在
	*//**
	 * @param article 前端传来的用户名
	 * @return
	 *//*
	@RequestMapping("/getArticleByName")
	@ResponseBody //json格式
	public Object getArticleByName(Article article) {
		List<Article> articles = articleService.getArticleByName(article);
		//如果是修改用户信息页 则需要移除list中需要修改的用户的本身
		if (article.getArticleId()!=null) {
			//查得当前正在进行修改的用户的信息
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
			//如果用户存在,则返回false表示验证不通过
			return false;
		}
		return true;
	}*/
}

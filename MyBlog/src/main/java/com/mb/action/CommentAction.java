package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mb.entity.Comment;
import com.mb.entity.Classify;
import com.mb.service.CommentService;
import com.mb.service.ClassifyService;

/**
 * @author 王欢
 * 评论管理controller
 */
@Controller
@RequestMapping("/comment")
public class CommentAction {
	@Resource
	private CommentService commentService;
	
	//获取所有留言
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<Comment> all = commentService.getAll();
		return all;
	}
	
	
	//获取该留言下的子回复
	@RequestMapping("/getCommentChild")
	@ResponseBody //json格式
	public Object getCommentChild(Comment comment) {
		return commentService.getChildCount(comment);
	}
	
	//多选删除 判断所选评论下是否有子回复
	@RequestMapping("/getCommentChildByPks")
	@ResponseBody //json格式
	public Object getCommentChildByPks(String[] pks) {
		for (String pk : pks) {
			Comment comment = new Comment();
			comment.setCommentId(pk);
			int childCount = commentService.getChildCount(comment);
			if (childCount>0) {
				return childCount;
			}
		}
		return 0;
	}
	
	//删除留言
	@RequestMapping("/deleteComment")
	@ResponseBody //json格式
	public Object deleteComment(String[] pks) {
		try {
			return commentService.deleteList(pks);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	
	//添加新评论
	@RequestMapping("/addComment")
	public String addComment(Comment comment) {
		String articleId = comment.getArticle().getArticleId();
		try {
			commentService.insert(comment);
			return "redirect:../blogDetail.action?articleId="+articleId;
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
		
	}
}

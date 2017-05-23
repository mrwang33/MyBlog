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
//		List<Comment> commentChild = commentService.getCommentChild(comment);
//		if (commentChild!=null&&commentChild.size()>0) {
//			return 1;
//		}
		return 0;
	}
	//多选删除
	@RequestMapping("/getCommentChildByPks")
	@ResponseBody //json格式
	public Object getCommentChildByPks(String[] pks) {
//		for (String pk : pks) {
//			Comment comment = new Comment();
//			comment.setLmId(pk);
//			List<Comment> commentChild = commentService.getCommentChild(comment);
//			if (commentChild!=null&&commentChild.size()>0) {
//				return 1;
//			}
//		}
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
}

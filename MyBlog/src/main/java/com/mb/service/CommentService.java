package com.mb.service;

import java.util.List;

import com.mb.entity.Article;
import com.mb.entity.Comment;

public interface CommentService extends BaseService<Comment> {
	
	
	//获取该博文下的所有评论 并生成树状
	public List<Comment> getAllCommentByTree(String articleId);
	//获取该博文下根评论
	public List<Comment> getRootComment(String articleId);
	//根据根回复 查找根回复的所有子回复
	public List<Comment> getAllChild(List<Comment> root);
	//获取总评论数
	public int getCountInThisArticle(String articleId);
	//获取该评论下的子回复个数
	public int getChildCount(Comment comment);
}

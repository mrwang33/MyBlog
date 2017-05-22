package com.mb.dao;

import java.io.Serializable;
import java.util.List;

import com.mb.entity.Comment;

public interface CommentMapper extends BaseMapper<Comment>{
	//获取此博文下所有根评论
	public List<Comment> getRootComment(String articleId);
	//获取该评论的子回复
	public List<Comment> getChild(Comment comment);
	//获取该博文下的评论总数
	public int getCountInThisArticle(String articleId);
}
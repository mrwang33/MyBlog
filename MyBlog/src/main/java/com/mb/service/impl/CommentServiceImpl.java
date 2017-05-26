package com.mb.service.impl;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.common.CommonUtils;
import com.mb.dao.CommentMapper;
import com.mb.entity.Article;
import com.mb.entity.Comment;
import com.mb.service.CommentService;
import com.mb.service.SendEmailService;
@Service("commentService")
public class CommentServiceImpl implements CommentService {
	@Resource
	private CommentMapper commentMapper;
	@Resource
	private SendEmailService sendEmailService;
	
	public static int index;
	
	@Override
	public List<Comment> getAll() {
		return commentMapper.getAll();
	}

	@Override
	public Comment getById(Serializable id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Comment comment) throws Exception {
		if (comment.getFatherCommentId()==null||"".equals(comment.getFatherCommentId())) {
			comment.setFatherCommentId(null);
		}
		//替换评论中的html标签 防止xss注入攻击
		comment.setCommentContent(comment.getCommentContent().replaceAll("</?[^>]+>", ""));
		//发送邮件
//		sendEmailService.sendEmailToComment(comment);
		//设置主键
		comment.setCommentId(CommonUtils.getUUID());
		//设置时间
		comment.setCommentDate(new Timestamp(new Date().getTime()));
		return commentMapper.insert(comment);
	}

	@Override
	public int update(Comment t) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int delete(Serializable id) throws Exception {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteList(Serializable[] ids) throws Exception {
		return commentMapper.deleteList(ids);
	}

	@Override
	public List<Comment> getAllCommentByTree(String articleId) {
		List<Comment> treeComment = getAllChild(getRootComment(articleId));
		return treeComment;
	}

	@Override
	public List<Comment> getRootComment(String articleId) {
		List<Comment> root = commentMapper.getRootComment(articleId);
		return root;
	}

	@Override
	public List<Comment> getAllChild(List<Comment> root) {
		for (Comment comment : root) {
			List<Comment> child = commentMapper.getChild(comment);
			comment.setComments(child);
			getAllChild(child);
		}
		return root;
	}

	@Override
	public int getCountInThisArticle(String articleId) {
		return commentMapper.getCountInThisArticle(articleId);
	}

	@Override
	public int getChildCount(Comment comment) {
		return commentMapper.getChild(comment).size();
	}


	
}

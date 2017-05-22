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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Comment getById(Serializable id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(Comment comment) throws Exception {
		sendEmailService.sendEmailToComment(comment);
		//根元素的判断就是有articleid 而没有 fatherid 所以这里如果有fatherid 就将article设为null
		if (comment.getFatherCommentId()!=null&&!"".equals(comment.getFatherCommentId())) {
			comment.setArticle(null);
		} else {
			comment.setFatherCommentId(null);
		}
		comment.setCommentId(CommonUtils.getUUID());
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
		// TODO Auto-generated method stub
		return 0;
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
	public int getCount(List<Comment> commentsList,int count) {
		index += commentsList.size();
		for (Comment comment : commentsList) {
			List<Comment> child = comment.getComments();
			getCount(child,index);
		}
		return index;
	}

	@Override
	public void makeIndexZero() {
		this.index=0;
	}

	
}

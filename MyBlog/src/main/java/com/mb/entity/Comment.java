package com.mb.entity;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author 王欢
 * 评论实体类
 */
public class Comment {
	//主键
    private String commentId;
    //主键内容
    private String commentContent;
    //评论时间
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "GMT+8") 
    private Timestamp commentDate;
    //邮箱
    private String commentEmail;
    //评论昵称
    private String commentName;
    //评论的主题
    private Article article;
    //回复的评论
    private String fatherCommentId;
    //一级子回复
    private List<Comment> comments;
    
    public Comment() {
    	
	}
    
	public Comment(String commentId, String commentContent, Timestamp commentDate, String commentEmail,
			String commentName, Article article, String fatherCommentId, List<Comment> comments) {
		this.commentId = commentId;
		this.commentContent = commentContent;
		this.commentDate = commentDate;
		this.commentEmail = commentEmail;
		this.commentName = commentName;
		this.article = article;
		this.fatherCommentId = fatherCommentId;
		this.comments = comments;
	}

	public String getCommentId() {
        return commentId;
    }

    public void setCommentId(String commentId) {
        this.commentId = commentId == null ? null : commentId.trim();
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent == null ? null : commentContent.trim();
    }

    public String getCommentEmail() {
        return commentEmail;
    }

    public void setCommentEmail(String commentEmail) {
        this.commentEmail = commentEmail == null ? null : commentEmail.trim();
    }

    public String getCommentName() {
        return commentName;
    }

    public void setCommentName(String commentName) {
        this.commentName = commentName == null ? null : commentName.trim();
    }

	public Timestamp getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(Timestamp commentDate) {
		this.commentDate = commentDate;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}

	public String getFatherCommentId() {
		return fatherCommentId;
	}

	public void setFatherCommentId(String fatherCommentId) {
		this.fatherCommentId = fatherCommentId;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
    	
	
}
package com.mb.entity;

import java.util.Date;

/**
 * @author 王欢
 * 评论实体类
 */
public class Comment {
    private String commentId;

    private String commentContent;

    private Date commentDate;

    private String commentEmail;

    private String commentName;

    private String comArtId;

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

    public Date getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(Date commentDate) {
        this.commentDate = commentDate;
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

    public String getComArtId() {
        return comArtId;
    }

    public void setComArtId(String comArtId) {
        this.comArtId = comArtId == null ? null : comArtId.trim();
    }
}
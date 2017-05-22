package com.mb.service;

import com.mb.entity.Comment;
import com.mb.entity.LeaveMsg;

/**
 * @author 王欢
 * 邮件发送接口
 */
public interface SendEmailService {
	//给留言用户发送邮件
	public void sendEmailToLeaveMsg(LeaveMsg leaveMsg);
	//给评论用户发送邮件
	public void sendEmailToComment(Comment comment);
}

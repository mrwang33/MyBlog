package com.mb.service.impl;

import javax.annotation.Resource;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

import com.mb.entity.Comment;
import com.mb.entity.LeaveMsg;
import com.mb.service.SendEmailService;

@Component("sendEmailService")
public class SendEmailServiceImpl implements SendEmailService {
	@Resource
	private MailSender mailSender;
	@Resource
	private SimpleMailMessage simepleMailMessage;
	
	@Override
	public void sendEmailToLeaveMsg(LeaveMsg leaveMsg) {
		simepleMailMessage.setSubject("您好!"+leaveMsg.getLmName());
		simepleMailMessage.setText("欢迎光临我的个人博客站!有什么建议或者意见就回复这个邮箱吧!");
		simepleMailMessage.setTo(leaveMsg.getLmEmail());
		mailSender.send(simepleMailMessage);
	}

	@Override
	public void sendEmailToComment(Comment comment) {
		simepleMailMessage.setSubject("您好!"+comment.getCommentName());
		simepleMailMessage.setText("欢迎光临我的个人博客站!有什么建议或者意见就回复这个邮箱吧!");
		simepleMailMessage.setTo(comment.getCommentEmail());
		mailSender.send(simepleMailMessage);
	}

}

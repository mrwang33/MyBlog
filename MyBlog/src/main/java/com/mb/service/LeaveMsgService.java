package com.mb.service;

import java.util.List;

import com.mb.entity.LeaveMsg;

public interface LeaveMsgService extends BaseService<LeaveMsg> {
	//获取根回复
	public List<LeaveMsg> getRootLeaveMsg();
	//根据根回复 查找根回复的所有子回复
	public List<LeaveMsg> getAllChild(List<LeaveMsg> root);
	//获取总留言数
	public int getCount();
	//获取子回复
	public List<LeaveMsg> getLeaveMsgChild(LeaveMsg leaveMsg);
}

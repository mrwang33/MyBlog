package com.mb.dao;


import java.util.List;

import com.mb.entity.LeaveMsg;

public interface LeaveMsgMapper extends BaseMapper<LeaveMsg>{
	//获取根回复
	public List<LeaveMsg> getRootLeaveMsg();
	//获取该回复的子回复
	public List<LeaveMsg> getChild(LeaveMsg leaveMsg);
	//获取总留言数
	public int getCount();
}
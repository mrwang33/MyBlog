package com.mb.service.impl;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.mb.common.CommonUtils;
import com.mb.dao.LeaveMsgMapper;
import com.mb.entity.LeaveMsg;
import com.mb.service.LeaveMsgService;

@Service("leaveMsgService")
public class LeaveMsgServiceImpl implements LeaveMsgService {
	@Resource
	private LeaveMsgMapper leaveMsgMapper;

	@Override
	public List<LeaveMsg> getAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public LeaveMsg getById(Serializable id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int insert(LeaveMsg leaveMsg) throws Exception {
		leaveMsg.setLmId(CommonUtils.getUUID());
		leaveMsg.setLmDate(new Timestamp(new Date().getTime()));
		return leaveMsgMapper.insert(leaveMsg);
	}

	@Override
	public int update(LeaveMsg t) throws Exception {
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
	public List<LeaveMsg> getRootLeaveMsg() {
		return leaveMsgMapper.getRootLeaveMsg();
	}

	@Override
	public List<LeaveMsg> getAllChild(List<LeaveMsg> root) {
		// TODO Auto-generated method stub
		for (LeaveMsg leaveMsg : root) {
			List<LeaveMsg> child = leaveMsgMapper.getChild(leaveMsg);
			leaveMsg.setChildLm(child);
			getAllChild(child);
		}
		return root;
	}

	@Override
	public int getCount() {
		return leaveMsgMapper.getCount();
	}

	

}

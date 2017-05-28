package com.mb.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mb.entity.LeaveMsg;
import com.mb.entity.Classify;
import com.mb.service.LeaveMsgService;
import com.mb.service.ClassifyService;

/**
 * @author 王欢
 * 留言管理controller
 * 
 * 
 */
@Controller
@RequestMapping("/leaveMsg")
public class LeaveMsgAction {
	@Resource
	private LeaveMsgService leaveMsgService;
	
	//获取所有留言
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<LeaveMsg> all = leaveMsgService.getAll();
		return all;
	}
	
	//添加新留言
	@RequestMapping("/addLeaveMsg")
	public String addLeaveMsg(LeaveMsg leaveMsg) {
		try{
			if (leaveMsg!=null) {
				if ("".equals(leaveMsg.getLmFatherid())) {
					leaveMsg.setLmFatherid(null);
				}
				leaveMsgService.insert(leaveMsg);
			}
			return "redirect:../leaveMsg.action";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//获取该留言下的子回复
	@RequestMapping("/getLeaveMsgChild")
	@ResponseBody //json格式
	public Object getLeaveMsgChild(LeaveMsg leaveMsg) {
		List<LeaveMsg> leaveMsgChild = leaveMsgService.getLeaveMsgChild(leaveMsg);
		if (leaveMsgChild!=null&&leaveMsgChild.size()>0) {
			return 1;
		}
		return 0;
	}
	
	//多选删除 判断所选留言下是否有子回复
	@RequestMapping("/getLeaveMsgChildByPks")
	@ResponseBody //json格式
	public Object getLeaveMsgChildByPks(String[] pks) {
		for (String pk : pks) {
			LeaveMsg leaveMsg = new LeaveMsg();
			leaveMsg.setLmId(pk);
			List<LeaveMsg> leaveMsgChild = leaveMsgService.getLeaveMsgChild(leaveMsg);
			if (leaveMsgChild!=null&&leaveMsgChild.size()>0) {
				return 1;
			}
		}
		return 0;
	}
	
	//删除留言
	@RequestMapping("/deleteLeaveMsg")
	@ResponseBody //json格式
	public Object deleteLeaveMsg(String[] pks) {
		try {
			return leaveMsgService.deleteList(pks);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}

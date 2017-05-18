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
 */
@Controller
@RequestMapping("/leaveMsg")
public class LeaveMsgAction {
	@Resource
	private LeaveMsgService leaveMsgService;
	@Resource
	private ClassifyService classifyService;
	
	//获取所有留言
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<LeaveMsg> all = leaveMsgService.getAll();
		return all;
	}
	
	//跳转到添加页面
	@RequestMapping("/goAdd")
	public String goAdd(Model model) {
		 List<Classify> all = classifyService.getAll();
		 model.addAttribute("classifys", all);
		return "admin/leaveMsg/addLeaveMsg";
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
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(String leaveMsgId,Model model) {
		List<Classify> all = classifyService.getAll();
		LeaveMsg leaveMsg = leaveMsgService.getById(leaveMsgId);
		model.addAttribute("leaveMsg", leaveMsg);
		model.addAttribute("classifys", all);
		return "admin/leaveMsg/editLeaveMsg";
	}
	
	
	//修改留言信息
	@RequestMapping("/editLeaveMsg")
	public String editLeaveMsg(LeaveMsg leaveMsg) {
		try {
			leaveMsgService.update(leaveMsg);
			return "admin/leaveMsg/leaveMsg";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
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

package com.mb.action;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mb.entity.Role;
import com.mb.entity.User;
import com.mb.service.RoleService;
import com.mb.service.UserService;

@Controller
@RequestMapping("/user")
public class UserAction {
	@Resource
	private UserService userService;
	@Resource
	private RoleService roleService;
	
	//获取所有用户
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<User> all = userService.getAll();
		return all;
	}
	
	//跳转到添加页面
	@RequestMapping("/goAdd")
	public String goAdd(Model model) {
		List<Role> roles = roleService.getAll();
		model.addAttribute("roles", roles);
		return "admin/user/addUser";
	}
	
	//添加新用户
	@RequestMapping("/addUser")
	public String addUser(User user,String[] roleIds) {
		try {
			if (roleIds!=null&&roleIds.length>0) {
				ArrayList<Role> roleList = new ArrayList<Role>();
				for (String roleId : roleIds) {
					Role role = new Role();
					role.setRoleId(roleId);
					roleList.add(role);
				}
				user.setRoles(roleList);
			}
			userService.insert(user);
			return "admin/user/user";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//删除用户
	@RequestMapping("/deleteUser")
	@ResponseBody //json格式
	public Object deleteUser(String[] pks) {
		try {
			return userService.deleteList(pks);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping("/goEdit")
	public String goEdit(User user,Model model) {
		return "admin/user/editUser";
	}
	
	//根据用户名查找用户,用于注册是检查用户名是否存在
	@RequestMapping("/getUserByName")
	@ResponseBody //json格式
	public Object getUserByName(User user) {
		List<User> users = userService.getUserByName(user);
		if (users!=null&&users.size()>0) {
			//如果用户存在,则返回false表示验证不通过
			return false;
		}
		return true;
	}
}

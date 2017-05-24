package com.mb.action;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import javax.json.Json;
import javax.servlet.http.HttpSession;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.mb.entity.Role;
import com.mb.entity.User;
import com.mb.service.RoleService;
import com.mb.service.UserService;

/**
 * @author 王欢
 * 用户操作controller
 */
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
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(String userId,Model model,HttpSession session) {
		List<Role> roles = roleService.getAll();
		User user = userService.getById(userId);
		model.addAttribute("user", JSONObject.toJSON(user));
		model.addAttribute("roles", roles);
		return "admin/user/editUser";
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
	
	//修改用户信息
	@RequestMapping("/editUser")
	public String editUser(User user,String[] roleIds) {
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
			userService.update(user);
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
	
	//根据用户名查找用户,用于注册和修改时检查用户名是否存在
	/**
	 * @param user 前端传来的用户名
	 * @return
	 */
	@RequestMapping("/getUserByName")
	@ResponseBody //json格式
	public Object getUserByName(User user) {
		List<User> users = userService.getUserByName(user);
		//如果是修改用户信息页 则需要移除list中需要修改的用户的本身
		if (user.getUserId()!=null) {
			//查得当前正在进行修改的用户的信息
			User currentUser = userService.getById(user.getUserId());
			Iterator<User> iterator = users.iterator();
			while(iterator.hasNext()) {
				User next = iterator.next();
				if (next.getUsername().equals(currentUser.getUsername())) {
					iterator.remove();
				}
			}
		}
		if (users!=null&&users.size()>0) {
			//如果用户存在,则返回false表示验证不通过
			return false;
		}
		return true;
	}
}

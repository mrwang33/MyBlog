package com.mb.action;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.mb.entity.Permission;
import com.mb.entity.Role;
import com.mb.service.PermissionService;
import com.mb.service.RoleService;

/**
 * @author 王欢
 * 角色操作controller
 */
@Controller
@RequestMapping("/role")
public class RoleAction {
	@Resource
	private RoleService roleService;
	@Resource
	private PermissionService permissionService;
	
	@RequestMapping("/getAll")
	@ResponseBody //json格式
	public Object getAll(){
		List<Role> all = roleService.getAll();
		return all;
	}
	
	//跳转到添加页面
	@RequestMapping("/goAdd")
	public String goAdd(Model model) {
		List<Permission> pers = permissionService.getAll();
		model.addAttribute("pers", pers);
		return "admin/role/addRole";
	}
	
	//添加新用户
	@RequestMapping("/addRole")
	public String addRole(Role role,String[] perIds) {
		try {
			if (perIds!=null&&perIds.length>0) {
				ArrayList<Permission> pers = new ArrayList<Permission>();
				for (String perId : perIds) {
					Permission per = new Permission();
					per.setPerId(perId);
					pers.add(per);
				}
				role.setPermissions(pers);
			}
			roleService.insert(role);
			return "admin/role/role";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
	//跳转到修改页面
	@RequestMapping("/goEdit")
	public String goEdit(String roleId,Model model) {
		List<Permission> pers = permissionService.getAll();
		Role role = roleService.getById(roleId);
		model.addAttribute("role", JSONObject.toJSON(role));
		model.addAttribute("pers", pers);
		return "admin/role/editRole";
	}
	
	//根据rolename查找role 防止新建时重复
	@RequestMapping("/getRoleByName")
	@ResponseBody //json格式
	public Object getRoleByName(Role role) {
		List<Role> roles = roleService.getRoleByName(role);
		//如果是修改角色信息页 则需要移除list中需要修改的角色的本身
		if (role.getRoleId()!=null) {
			//查得当前正在进行修改的用户的信息
			Role currentRole = roleService.getById(role.getRoleId());
			Iterator<Role> iterator = roles.iterator();
			while(iterator.hasNext()) {
				Role next = iterator.next();
				if (next.getRoleName().equals(currentRole.getRoleName())) {
					iterator.remove();
				}
			}
		}
		if (roles!=null&&roles.size()>0) {
			//如果用户存在,则返回false表示验证不通过
			return false;
		}
		return true;
	}
	
	
	//修改角色信息
	@RequestMapping("/editRole")
	public String editRole(Role role,String[] perIds) {
		try {
			if (perIds!=null&&perIds.length>0) {
				ArrayList<Permission> pers = new ArrayList<Permission>();
				for (String perId : perIds) {
					Permission per = new Permission();
					per.setPerId(perId);
					pers.add(per);
				}
				role.setPermissions(pers);
			}
			roleService.update(role);
			return "admin/role/role";
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	//删除角色
	@RequestMapping("/deleteRole")
	@ResponseBody //json格式
	public Object deleteRole(String[] pks) {
		try {
			return roleService.deleteList(pks);
		} catch (Exception e) {
			e.printStackTrace();
			return "error";
		}
	}
	
}

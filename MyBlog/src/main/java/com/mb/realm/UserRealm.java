package com.mb.realm;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.apache.shiro.ShiroException;
import org.apache.shiro.authc.AccountException;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.mb.entity.Permission;
import com.mb.entity.Role;
import com.mb.entity.User;
import com.mb.service.PermissionService;
import com.mb.service.RoleService;
import com.mb.service.UserService;

public class UserRealm extends AuthorizingRealm {
	@Resource
	private UserService userService;
	@Resource
	private PermissionService permissionService;
	@Resource
	private RoleService roleService;
	
	/* 
	 * 检查是否拥有对应权限时调用该方法
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection pc) {
		System.out.println("zaima");
		User user = (User)pc.getPrimaryPrincipal();
		ArrayList<String> perList = new ArrayList<String>();
		//获取该用户所有角色
		List<Role> roles = roleService.getUserRole(user.getUserId());
		//获取所有权限
		for (Role role : roles) {
			List<Permission> pers = permissionService.getRolePermissions(role);
			for (Permission permission : pers) {
				perList.add(permission.getPerCode());
			}
		}
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();  
        authorizationInfo.addStringPermissions(perList);
        return authorizationInfo;  
	}

	/* 
	 * 登录时调用该方法
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken) authToken;
		User user = new User();
		user.setUsername(token.getUsername());
		user.setPassword(new String(token.getPassword()));
		User login = userService.login(user);
		if(login==null){
			throw new AccountException("帐号或密码不正确！");
		}
		return new SimpleAuthenticationInfo(login,login.getPassword(), getName());
	}


}

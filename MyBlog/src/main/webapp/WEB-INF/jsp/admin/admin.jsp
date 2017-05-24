<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
   response.setHeader("Pragma","no-cache");   
   response.setHeader("Cache-Control","no-cache");   
   response.setDateHeader("Expires", 0);   
   response.setHeader("Cache-Control", "no-store");  
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>个人博客后台管理</title>
    
    <META HTTP-EQUIV="pragma" CONTENT="no-cache">    
    <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">    
    <META HTTP-EQUIV="expires" CONTENT="0">   
	<link href="plugins/fullPage/jquery.fullPage.css" rel="stylesheet"/>
	<link href="plugins/bootstrap-3.3.0/css/bootstrap.min.css" rel="stylesheet"/>
	<link href="plugins/material-design-iconic-font-2.2.0/css/material-design-iconic-font.min.css" rel="stylesheet"/>
	<link href="plugins/waves-0.7.5/waves.min.css" rel="stylesheet"/>
	<link href="plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css" rel="stylesheet"/>
	<link href="css/admin.css" rel="stylesheet"/>
	<style>
	/** skins **/
	#zheng-upms-server #header {background: #29A176;}
	#zheng-upms-server .content_tab{background: #29A176;}
	#zheng-upms-server .s-profile>a{background: url(images/zheng-upms.png) left top no-repeat;}
	
	#zheng-cms-admin #header {background: #455EC5;}
	#zheng-cms-admin .content_tab{background: #455EC5;}
	#zheng-cms-admin .s-profile>a{background: url(images/zheng-cms.png) left top no-repeat;}
	
	#zheng-pay-admin #header {background: #F06292;}
	#zheng-pay-admin .content_tab{background: #F06292;}
	#zheng-pay-admin .s-profile>a{background: url(images/zheng-pay.png) left top no-repeat;}
	
	#zheng-ucenter-home #header {background: #6539B4;}
	#zheng-ucenter-home .content_tab{background: #6539B4;}
	#zheng-ucenter-home .s-profile>a{background: url(images/zheng-ucenter.png) left top no-repeat;}
	
	#zheng-oss-web #header {background: #0B8DE5;}
	#zheng-oss-web .content_tab{background: #0B8DE5;}
	#zheng-oss-web .s-profile>a{background: url(images/zheng-oss.png) left top no-repeat;}
	
	#test #header {background: test;}
	#test .content_tab{background: test;}
	#test .s-profile>a{background: url(test) left top no-repeat;}
	</style>
</head>
<body>
<header id="header">
	<ul id="menu">
		<li id="guide" class="line-trigger">
			<div class="line-wrap">
				<div class="line top"></div>
				<div class="line center"></div>
				<div class="line bottom"></div>
			</div>
		</li>
		<li id="logo" class="hidden-xs">
			<a href="index.html">
				<img src="images/logo1.png"/>
			</a>
			<span id="system_title">权限管理系统</span>
		</li>
		<li class="pull-right">
			<ul class="hi-menu">
				<li class="dropdown">
					<a class="waves-effect waves-light" data-toggle="dropdown" href="javascript:;">
						<i class="him-icon zmdi zmdi-more-vert"></i>
					</a>
					<ul class="dropdown-menu dm-icon pull-right">
						<li class="hidden-xs">
							<a class="waves-effect" data-ma-action="fullscreen" href="javascript:fullPage();"><i class="zmdi zmdi-fullscreen"></i> 全屏模式</a>
						</li>
						<li>
							<a class="waves-effect" href="admin/logout.action"><i class="zmdi zmdi-run"></i> 退出登录</a>
						</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
</header>
<section id="main">
	<!-- 左侧导航区 -->
	<aside id="sidebar">
		<!-- 个人资料区 -->
		<div class="s-profile">
			<a class="waves-effect waves-light" href="javascript:;">
				<div class="sp-pic">
					<img src="images/avatar.jpg"/>
				</div>
				<div class="sp-info">
					欢迎您!${sessionScope.username}
					<i class="zmdi zmdi-caret-down"></i>
				</div>
			</a>
			<ul class="main-menu">
				<li>
					<a class="waves-effect" href="admin/logout.action"><i class="zmdi zmdi-run"></i> 退出登录</a>
				</li>
			</ul>
		</div>
		<!-- /个人资料区 -->
		<!-- 菜单区 -->
		<ul class="main-menu">
			<li>
			<a class="waves-effect" href="javascript:Tab.addTab('首页', 'home');"><i class="zmdi zmdi-home"></i> 首页</a>
			</li>
			<li class="sub-menu system_menus system_1 3">
			<a class="waves-effect" href="javascript:;"><i class="zmdi zmdi-accounts"></i> 角色用户管理</a>
			<ul>
				<li><a class="waves-effect" href="javascript:Tab.addTab('角色管理', 'admin/role.action');">角色管理</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('用户管理', 'admin/user.action');">用户管理</a></li>
			</ul>
			</li>
			<li class="sub-menu system_menus system_1 7">
			<a class="waves-effect" href="javascript:;"><i class="zmdi zmdi-collection-text"></i> 文章内容管理</a>
			<ul>
				<li><a class="waves-effect" href="javascript:Tab.addTab('博文管理', 'admin/article.action');">博文管理</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('博文分类', 'admin/classify.action');">博文分类</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('评论管理', 'admin/comment.action');">评论管理</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('留言管理', 'admin/leaveMsg.action');">留言管理</a></li>
			</ul>
			</li>
			<li class="sub-menu system_menus system_1 0">
			<a class="waves-effect" href="javascript:;"><i class="zmdi zmdi-accounts-list"></i> 网站简介设置</a>
			<ul>
				<li><a class="waves-effect" href="javascript:Tab.addTab('个人介绍', 'introduction/goEdit.action');">个人介绍</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('关于网站', 'about/goEdit.action');">关于网站</a></li>
			</ul>
			</li>
			<li class="sub-menu system_menus system_2 12" style="display:none;">
			<a class="waves-effect" href="javascript:;"><i class="zmdi zmdi-menu"></i> 标签类目管理</a>
			<ul>
				<li><a class="waves-effect" href="javascript:Tab.addTab('标签管理', '/manage/tag/index');">标签管理</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('类目管理', '/manage/category/index');">类目管理</a></li>
			</ul>
			</li>
			<li class="sub-menu system_menus system_2 15" style="display:none;">
			<a class="waves-effect" href="javascript:;"><i class="zmdi zmdi-collection-text"></i> 文章内容管理</a>
			<ul>
				<li><a class="waves-effect" href="javascript:Tab.addTab('文章管理', '/manage/article/index');">文章管理</a></li>
				<li><a class="waves-effect" href="javascript:Tab.addTab('回收管理', '/manage/article/recycle');">回收管理</a></li>
			</ul>
			</li>
			<li>
			<div class="upms-version">
				&copy; WANGHUAN V1.0.0
			</div>
			</li>
		</ul>
		<!-- /菜单区 -->
	</aside>
	<!-- /左侧导航区 -->
	<section id="content">
		<div class="content_tab">
			<div class="tab_left">
				<a class="waves-effect waves-light" href="javascript:;"><i class="zmdi zmdi-chevron-left"></i></a>
			</div>
			<div class="tab_right">
				<a class="waves-effect waves-light" href="javascript:;"><i class="zmdi zmdi-chevron-right"></i></a>
			</div>
			<ul id="tabs" class="tabs">
				<li id="tab_home" data-index="home" data-closeable="false" class="cur">
					<a class="waves-effect waves-light">首页</a>
				</li>
			</ul>
		</div>
		<div class="content_main">
			<div id="iframe_home" class="iframe cur">
				<p><h4>GGBlog后台管理系统</h4></p>
				<p><h4>系统功能概述：</h4></p>
				<p><b>用户管理</b>：可以新增、修改、删除用户，并且可以给用户分配相应角色(一个用户可以拥有多个角色)</p>
				<p><b>角色管理</b>：可以新增、修改、删除角色，并且可以给角色分配相应权限(一个角色可以拥有多个权限) 权限可以决定对应角色的功能</p>
				<p><b>文章内容管理</b>：可以对博文、博文分类、博文评论和留言 进行增删改查操作 ps:评论和留言只能删除 无法在这里进行修改和新增</p>
				<p><b>网站简介设置</b>：可以对关于本站和自我介绍进行设置</p>
				<p><b>用户会话管理</b>：提供分布式用户会话管理</p>
				<p><h4>关于作者</h4></p>
				<p><b>姓　　名</b>：王欢</p>
				<p><b>电子邮箱</b>：wang1386528@gmail.com</p>
			</div>
		</div>
	</section>
</section>
<footer id="footer"></footer>

<script src="plugins/jquery.1.12.4.min.js"></script>
<script src="plugins/bootstrap-3.3.0/js/bootstrap.min.js"></script>
<script src="plugins/waves-0.7.5/waves.min.js"></script>
<script src="plugins/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="plugins/BootstrapMenu.min.js"></script>
<script src="plugins/device.min.js"></script>
<script src="plugins/fullPage/jquery.fullPage.min.js"></script>
<script src="plugins/fullPage/jquery.jdirk.min.js"></script>
<script src="plugins/jquery.cookie.js"></script>

<script src="js/admin.js"></script>
</body>
</html>

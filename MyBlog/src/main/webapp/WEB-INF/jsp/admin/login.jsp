<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
			response.setHeader("Cache-Control","no-store");
	response.setHeader("Cache-Control","no-cache");
	response.setHeader("Pragma","no-cache");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>后台管理-登录</title>

 <META HTTP-EQUIV="pragma" CONTENT="no-cache">    
 <META HTTP-EQUIV="Cache-Control" CONTENT="no-cache, must-revalidate">    
 <META HTTP-EQUIV="expires" CONTENT="0">  


<link href="plugins/bootstrap-3.3.0/css/bootstrap.min.css"
	rel="stylesheet" />
<link
	href="plugins/material-design-iconic-font-2.2.0/css/material-design-iconic-font.min.css"
	rel="stylesheet" />
<link href="plugins/waves-0.7.5/waves.min.css"
	rel="stylesheet" />
<link href="plugins/checkbix/css/checkbix.min.css"
	rel="stylesheet" />
<link href="css/login.css" rel="stylesheet" />
</head>
<body>
	<div id="login-window" style="height;height: 300;">
		<div class="input-group m-b-20">
			<span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
			<div class="fg-line">
				<input id="username" type="text" class="form-control"
					name="username" placeholder="帐号">
			</div>
		</div>
		<div class="input-group m-b-20">
			<span class="input-group-addon"><i class="zmdi zmdi-male"></i></span>
			<div class="fg-line">
				<input id="password" type="password" class="form-control"
					name="password" placeholder="密码">
			</div>
		</div>
		<div class="input-group m-b-20">
			<span class="input-group-addon"><i class="zmdi zmdi-badge-check"></i></span>
			<div class="fg-line">
				<img alt="zaima" src="admin/getCode.action">
			</div>
		</div>
		<div class="input-group m-b-20">
			<span class="input-group-addon"><i class="zmdi zmdi-badge-check"></i></span>
			<div class="fg-line">
				<input id="code" type="text" class="form-control"
					name="code" placeholder="请输入验证码">
			</div>
		</div>
		<div class="clearfix"></div>
		<a id="login-bt" href="javascript:;"
			class="waves-effect waves-button waves-float"><i
			class="zmdi zmdi-arrow-forward"></i></a>
	</div>
	<script src="plugins/jquery.1.12.4.min.js"></script>
	<script src="plugins/bootstrap-3.3.0/js/bootstrap.min.js"></script>
	<script src="plugins/waves-0.7.5/waves.min.js"></script>
	<script src="plugins/checkbix/js/checkbix.min.js"></script>

	<script src="js/login.js"></script>
	<script type="text/javascript">
		Checkbix.init();
	</script>
</body>
</html>

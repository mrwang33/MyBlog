<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>后台管理-登录</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">


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
	<div id="login-window">
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
		<div class="clearfix"></div>
		<div class="checkbox">
			<input id="rememberMe" type="checkbox" class="checkbix"
				data-text="自动登录" name="rememberMe">
		</div>
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
		
		function submit() {
			var username = $('#username').val();
			var password = $("#password").val();
		    // 取得要提交页面的URL  
		    var action = "http://127.0.0.1:8081/admin/login.action";  
		    // 创建Form  
		    var form = $('<form></form>');  
		    // 设置属性  
		    form.attr('action', action);  
		    form.attr('method', 'post');  
		    // 创建Input  
		    var name = $('<input type="text" name="username" />');  
		    name.attr('value', username);  
		    var pw = $('<input type="text" name="password" />');  
		    pw.attr('value', password);  
		    // 附加到Form  
		    form.append(name);  
		    form.append(pw);  
		    $(document.body).append(form);
		    // 提交表单  
		    form.submit();  
		    // 注意return false取消链接的默认动作  
		    return false;  
		}
	</script>
</body>
</html>

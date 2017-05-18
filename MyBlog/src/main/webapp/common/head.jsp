<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<link href="css/csss.css" rel="stylesheet">
<script src="js/push.js"></script>
<script src="js/jquery.min.js"></script>
<!--顶部静态导航-->
<!--导航条 navbar-fixed-top：固定在顶部。navbar-default：白色的背景黑色的字。navbar-inverse：黑色的背景加白色的字；-->
<!--role="navigation"为了增强可访问性(和浏览器的兼容性)，加上 role="navigation" 属性。方便bootstrap中js处理导航条的显示样式.-->
<nav id="zyn-header" class="navbar navbar-inverse navbar-fixed-top"
	role="navigation">
	<div class="container">
		<!--.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。-->
		<!--Logo Brand-导航条的页头,bootstrap中的一个带有图标的标签, 然后这里也是在移动端, 就是小于768设备显示的效果 -->
		<div class="navbar-header">
			<!--小屏显示 显示内容指向.bs-navbar-collapse -->
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-navbar-collapse"
				aria-expanded="false">
				<span class="sr-only">导航条</span> <span class="icon-bar"></span> <span
					class="icon-bar"></span> <span class="icon-bar"></span>
			</button>
			<a href="">
				<div class="navbar-brand"></div>
			</a>
		</div>

		<!--导航条 3.这部分也是移动端折叠的部分, 也是为了能够更好的展现页面在移动端. -->
		<div class="collapse navbar-collapse" id="bs-navbar-collapse">
			<ul class="nav navbar-nav top-navbar-nav">
				<li id="home"><a class="toplevel" title="zynblog首页"
					href=""> <span
						class="glyphicon glyphicon-home"></span> 主页
				</a></li>
				<li id="aboutme" class="dropdown "><a
					href="about.action"
					class="dropdown-toggle toplevel" role="button" aria-haspopup="true"
					aria-expanded="false"> <span
						class="glyphicon glyphicon-info-sign"></span> 关于本站
				</a></li>
				<li id="leavemsg" class="dropdown "><a
					href="leaveMsg.action"
					class="dropdown-toggle toplevel" role="button" aria-haspopup="true"
					aria-expanded="false"> <span class="glyphicon glyphicon-send"></span>
						留言墙
				</a></li>
			</ul>


			<script type="text/javascript">
				$(function() {
					$('#searchWords').on('keydown', function(e) {
						var key = e.which;
						if (key == 13) {
							e.preventDefault();
							var words = $('#searchWords').val();
							words = $.trim(words);
							if (words == ' ' || words == null || words == undefined) {
								alert('请输入搜索词');
							} else {
								$('#searchform').submit();
							}
						}
						return false;
					});
				});
			</script>
			<form id="searchform" class="navbar-form navbar-right" role="search"
				target="_blank" method="get"
				action="http://www.zynblog.com/Search/Index">
				<div class="form-group">
					<input type="text" id="searchWords" name="searchWords"
						class="form-control" data-provide="typeahead" autocomplete="off"
						placeholder="请输入要搜索关键词">
				</div>
				<button type="submit" class="btn" id="searchbtn">搜索</button>
			</form>
		</div>
	</div>
</nav>
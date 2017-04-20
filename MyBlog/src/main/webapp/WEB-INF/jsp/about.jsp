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

<title>摸鱼博客-关于本站</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="技术博客,摸鱼">
<meta http-equiv="description" content="个人博客">
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
<link href="css/aboutme.css" rel="stylesheet">
<link href="css/csss.css" rel="stylesheet">
<script src="js/push.js"></script>
<script src="js/Script.js"></script>
<script src="js/hm.js"></script>
<script src="js/jquery.min.js"></script>

</head>

<body class="nav-fixed" style="zoom: 1;">
<%@include file="../../common/head.jsp" %>
	<!--主体内容-->
	<div id="zyn-bodyer">
		<div class="container">
			<!--.container 类用于固定宽度并支持响应式布局的容器。-->
			<div class="row">
				<!--row必须包含在.container（固定宽度）或 .container-fluid （100% 宽度）中,通过row在水平方向创建一组column12个-->
				<!--主体-->
				<div id="mainbody" class="col-md-8">
					<div id="ie-warning" class="alert alert-danger fade in">
						<button type="button" class="close" data-dismiss="alert">×</button>
						<span class="glyphicon glyphicon-exclamation-sign"></span>
						请注意，ZynBlog并不支持低于IE8的浏览器，为了获得最佳效果，推荐使用FireFox浏览器。
					</div>
					<!-- 内容主体 包含三部分内容：1.每日提示、2.文章列表、3. 分页条-->





					<div class="panel panel-green-sea">
						<div class="panel-heading">
							<h2 class="panel-h1-title">关于本站</h2>
						</div>
						<div class="panel-body bg-white">
							<div style="float:left; margin-right:20px; margin-top:20px">
								<img src="images/weixin_aboutme.jpg" width="140"
									height="125" alt="微信扫一扫">
							</div>
							<div>
								<p>本站定位为IT技术博客站，博客内容主要涉及编程语言、复杂网络、机器学习、推荐算法、数据挖掘等方面。
									全站均由本人开发，基于ASP.NET MVC框架，使用C#进行编写，前端和后台UI框架采用Bootstrap搭建，数据库为MS
									SQLServer，服务器为Windows Server 2012
									R2版腾讯云主机，域名www.zynblog.com购自阿里万网, 豫ICP备16019396号-1。</p>
							</div>
							<hr>
							<h3>初衷</h3>
							<p style="margin-top:1px;margin-bottom:0">写博是一个思考和沉淀的过程。</p>
							<p style="margin-top:1px;margin-bottom:0">对内：是一个solution
								record的地方；是自己的知识仓库。</p>
							<p style="margin-top:1px;margin-bottom:0">对外：是别人了解你的最直接方式；是交流、分享经验的平台。</p>

							<hr>
							<h3>联系方式</h3>
							<p>邮箱：zyn_haust@126.com</p>
							<p>
								新浪微博：<a href="http://www.zynblog.com/weibo.com/u/2298628981"
									target="_blank" rel="nofollow">http://weibo.com</a>
							</p>

							<hr>
							<h3>文章版权声明</h3>
							<p>1、欢迎转载本站文章，本站文章版权归作者所有，转载请声明原文出处。 请尊重他人劳动成果,共建美好的网络环境。</p>
							<p>
								2、<a rel="license"
									href="http://creativecommons.org/licenses/by-sa/3.0/cn/"> <img
									alt="知识共享许可协议" style="border-width:0"
									src="images/88x31.png">
								</a> 本站作品采用 <a rel="license"
									href="http://creativecommons.org/licenses/by-sa/3.0/cn/">知识共享署名-相同方式共享
									3.0 中国大陆许可协议</a>进行许可。
							</p>
							<p>3、本站转载的文章都有声明作者或文章的来源。但有部分文章找不到相关作者信息，这些文章版权为原作者所有。
								如有版权等问题，原作者可发邮件给我以进行处理。</p>

							<hr>
							<h3>友链互换</h3>
							<p>想要互换友链的朋友可以联系我: zyn_haust@126.com。</p>

							<hr>
							<h3>一句箴言</h3>
							<p class="bg-success text-success">Just do it,now!</p>
						</div>
					</div>


				</div>

				<!--右侧边栏:大概包含五部分内容：1.关注我、2.目录分类、3.热门文章、4.最新评论、5.标签云或友情链接-->
				<aside class="col-md-4" id="sidebar"> <aside>
				<div class="panel panel-zyn hidden-xs">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-user newicon"></span> 夜无痕
					</div>
					<div class="panel-body"
						style="padding:10px;font-size: 15px; line-height: 1.5;">
						<div>
							<div
								style="width:150px;text-align:center;font-size:14px;float:left;">
								<img id="wxlook" class="img-responsive" style="margin-right:5px"
									width="145" height="145" alt="微信扫一扫" title="打开微信扫一扫"
									src="images/weixin.png"> 微信扫一扫
							</div>
							<div style="text-indent:2em;">
								<p>
									这是一个程序员的独立博客站，主要用于分享与编程技术相关的内容， 同时这里也是博主记录工作学习中遇到的问题及其解决方案的地方。
									PS:夜无痕:非著名程序员，IT界的一名小学生。目前在研究网络舆情、复杂网络、机器学习等... 更多信息请点击：<a
										target="_blank" href="http://www.zynblog.com/About"
										style="color:#1abc9c">关于本站.</a>
								</p>
							</div>
						</div>
					</div>
					<hr style="margin:0 0 10px 0">
					<div class="gzwm">
						<ul>
							<li><a class="github" href="https://github.com/YallZhang"
								target="_blank" title="GitHub"></a></li>
							<li><a class="xlwb" href="http://weibo.com/u/2298628981"
								target="_blank" title="新浪微博"></a></li>
							<li><a class="douban"
								href="https://www.douban.com/people/zyn_" target="_blank"
								title="豆瓣"></a></li>
							<li><a class="twitter" href="http://www.twitter.com/"
								title="推特"></a></li>
						</ul>
					</div>
				</div>
				</aside> <aside id="zyn_latest_comments-2">
				<div class="panel panel-zyn hidden-xs">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-tree-deciduous newicon"></span>
						雁过留声 <span class="panel-remove glyphicon glyphicon-remove-circle"></span>
						<span class="panel-toggle glyphicon glyphicon-upload"></span>
					</div>
					<ul class="list-group list-group-flush">
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404746811076346212.jpg"
								class="avatar avatar-40 photo" height="40" width="40"
								src="images/6360193404746811076346212.jpg">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									扎心了，老铁，你居然直接移除有害标签 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404074901084765038.jpg"
								class="avatar avatar-40 photo" height="40" width="40"
								src="images/6360193404074901084765038.jpg">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									11 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193403959818648681314.jpg"
								class="avatar avatar-40 photo" height="40" width="40"
								src="images/6360193403959818648681314.jpg">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									很不错。模仿前端写了个界面 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193403609800414283917.jpg"
								class="avatar avatar-40 photo" height="40" width="40"
								src="images/6360193403609800414283917.jpg">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/30#comments-title">
									fsdfsdfd </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404226471614736025.jpg"
								class="avatar avatar-40 photo" height="40" width="40"
								src="images/6360193404226471614736025.jpg">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									楼主加油 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404823377597946328.jpg"
								class="avatar avatar-40 photo" height="40" width="40"
								src="images/6360193404823377597946328.jpg">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									123aa </a>
						</span></li>

					</ul>
				</div>
				</aside> <aside id="tag_cloud">
				<div class="panel panel-zyn hidden-xs">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-cloud newicon"></span> 上上签儿
					</div>
					<div id="tagbox">
						<a href="http://www.zynblog.com/About#" title="4个话题"
							style="color:#f76b70;font-size: 12.897959183673pt;">ASP.NET
							MVC</a> <a href="http://www.zynblog.com/About#" title="18个话题"
							style="color:#eab035;font-size: 20pt;">Zynblog</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#0094ff;font-size: 14pt;">非典型程序猿</a> <a
							href="http://www.zynblog.com/About#" title="2个话题"
							style="color:#be5bc1;font-size: 10.204081632653pt;">C#</a> <a
							href="http://www.zynblog.com/About#" title="4个话题"
							style="color:#f76b70;font-size: 12.897959183673pt;">javascript</a>
						<a href="http://www.zynblog.com/About#" title="2个话题"
							style="color:#be5bc1;font-size: 10.204081632653pt;">jQuery</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#0094ff;font-size: 14pt;">设计模式</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#23f0c9;font-size: 8pt;">Python</a> <a
							href="http://www.zynblog.com/About#" title="2个话题"
							style="color:#be5bc1;font-size: 10.204081632653pt;">Bootstrap</a>
						<a href="http://www.zynblog.com/About#" title="3个话题"
							style="color:#cba879;font-size: 11.673469387755pt;">Java</a> <a
							href="http://www.zynblog.com/About#" title="18个话题"
							style="color:#eab035;font-size: 20pt;">机器学习</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#0094ff;font-size: 14pt;">非著名程序员</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#23f0c9;font-size: 8pt;">数据挖掘</a> <a
							href="http://www.zynblog.com/About#" title="3个话题"
							style="color:#cba879;font-size: 11.673469387755pt;">分布式</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#23f0c9;font-size: 8pt;">C/C++</a> <a
							href="http://www.zynblog.com/About#" title="3个话题"
							style="color:#cba879;font-size: 11.673469387755pt;">前端</a> <a
							href="http://www.zynblog.com/About#" title="2个话题"
							style="color:#be5bc1;font-size: 10.204081632653pt;">推荐系统</a> <a
							href="http://www.zynblog.com/About#" title="4个话题"
							style="color:#f76b70;font-size: 12.897959183673pt;">大数据</a> <a
							href="http://www.zynblog.com/About#" title="18个话题"
							style="color:#eab035;font-size: 20pt;">Zynblog</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#0094ff;font-size: 14pt;">数据分析</a> <a
							href="http://www.zynblog.com/About#" title="1个话题"
							style="color:#23f0c9;font-size: 8pt;">复杂网络</a> <a
							href="http://www.zynblog.com/About#" title="3个话题"
							style="color:#cba879;font-size: 11.673469387755pt;">舆情分析</a>
					</div>
				</div>
				</aside> </aside>
			</div>
		</div>
	</div>
	<%@include file="../../common/foot.jsp" %>
</body>
</html>

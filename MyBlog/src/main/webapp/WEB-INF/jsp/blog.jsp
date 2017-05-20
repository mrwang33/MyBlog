<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>摸鱼博客</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="技术博客,摸鱼">
<meta http-equiv="description" content="个人博客">
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
<script src="js/Script1.js"></script>

<script>
	var _hmt = _hmt || [];
	(function() {
		var hm = document.createElement("script");
		hm.src = "//hm.baidu.com/hm.js?33404e49b0dcf2b9235821f92da9cbe6";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s);
	})();
</script>


<script>
	(function() {
		var bp = document.createElement('script');
		var curProtocol = window.location.protocol.split(':')[0];
		if (curProtocol === 'https') {
			bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
		} else {
			bp.src = 'http://push.zhanzhang.baidu.com/push.js';
		}
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(bp, s);
	})();
</script>

<!--[if lt IE 9]>
          <script src="/Content/js/ie/modernizr-2.6.2.js></script>
          <script src="/Content/js/ie/respond.min.js></script>
          <script src="/Content/js/ie/html5shiv.js></script>
    <![endif]-->

</head>

<body class="nav-fixed">
	<%@include file="../../common/head.jsp"%>
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




					<div class="well fade in daytips"
						style="padding:15px;background-color: #f9f9f9;">
						<button type="button" class="close" data-dismiss="alert">×</button>
						<div id="tweather" style="line-height:20px">
							If you don't bird me, I don't bird you, too.
							<div id="wicon" class="pull-right" style="margin-right:5px">
								<img src="images/duoyun.gif" height="20" width="20">&nbsp;合肥&nbsp;
								15&nbsp;~&nbsp;23℃
							</div>
						</div>
					</div>


					<div id="article-list">
						<div id="loading" style="display: none; text-align: center;">
							<img src="images/ico_loading2.gif" height="32" width="32">
						</div>
						<c:forEach var="article" items="${page.pageList}">
							<article class="excerpt excerpt-first"> <header>
							<a class="cat" href="#">${article.classify.classifyName} <i></i></a>
							<h2>
								<a href="blogDetail.action?articleId=${article.articleId}" title="${article.articleTitle}">${article.articleTitle}</a>
							</h2>
							</header>
							<p class="meta">
								<span class="posttime">${article.articleDate}</span><span class="viewnum">浏览(<a
									href="#">${article.articleViews}</a>)
								</span><span class="commentnum">评论(<a
									href="http://www.zynblog.com/Archives/Index/1#comments-title">58</a>)
								</span><span class="praisebtn"> <img class="praisenum"
									src="images/ico_praise.png" height="15" width="15">(<a
									data-id="1" praise-flag="0" href="http://www.zynblog.com/">${article.articleStars}</a>)
								</span>
							</p>
							<p class="note">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${article.articleContent}</p>
							<footer class="entry-footer"> <span itemprop="keywords"
								class="tags-links"><a rel="tag"
								href="http://www.zynblog.com/">ASP.NET</a><a rel="tag"
								href="http://www.zynblog.com/">MVC</a><a rel="tag"
								href="http://www.zynblog.com/">Bootstrap</a><a rel="tag"
								href="http://www.zynblog.com/">响应式</a><a rel="tag"
								href="http://www.zynblog.com/">博客</a></span> <a
								class="more-link gotoArchive" rel="nofollow"
								href="http://www.zynblog.com/Archives/Index/1">继续阅读 »</a></footer></article>
						</c:forEach>
					</div>


					<div class="pagination">
						<!--pagation本来就是BootStrap的类，现在用的是自定义的Bootstrap类-->
						<ul>
							<li id="start-page"><a href="blog.action">首页</a></li>
							<c:forEach begin="1" end="${page.pageCount}" var="i">
								<c:choose>
									<c:when test="${i==page.pageIndex}">
										<li class="active show-page"><span>${i}</span></li>
									</c:when>
									<c:otherwise>
										<li class="show-page"><a href="blog.action?pageIndex=${i}">${i}</a></li>
									</c:otherwise>
								</c:choose>
							</c:forEach>
<!-- 							<li class="active show-page"><span>1</span></li> -->
<!-- 							<li class="show-page"><a href="http://www.zynblog.com/Home/WrapArtList/0?pageIndex=2&amp;pageSize=7">2</a></li> -->
<!-- 							<li class="show-page"><a href="http://www.zynblog.com/Home/WrapArtList/0?pageIndex=3&amp;pageSize=7">3</a></li> -->
<!-- 							<li class="show-page"><a -->
<!-- 								href="http://www.zynblog.com/Home/WrapArtList/0?pageIndex=4&amp;pageSize=7">4</a></li> -->
							<c:if test="${page.pageCount!=page.pageIndex}">
								<li class="next-page"><a href="blog.action?pageIndex=${page.pageIndex+1}">下一页</a></li>
								<li id="end-page"><a href="blog.action?pageIndex=${page.pageCount}">末页</a></li>
							</c:if>
							<li id="total-page"><span>共${page.pageCount}页</span></li>
						</ul>
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
									alt="微信扫一扫" title="打开微信扫一扫" src="images/weixin.png"
									height="145" width="145"> 微信扫一扫
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
				</aside> <aside id="doc_category">
				<div class="panel panel-zyn hidden-xs">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-tags newicon"></span> 文以类聚
					</div>
					<div class="d_tags">
						<a href="http://www.zynblog.com/Home/Index/1"> ASP.NET MVC (8)
						</a> <a href="http://www.zynblog.com/Home/Index/3"> 开源工具 (5) </a> <a
							href="http://www.zynblog.com/Home/Index/4"> 前端 (11) </a> <a
							href="http://www.zynblog.com/Home/Index/5"> 网络舆情 (1) </a> <a
							href="http://www.zynblog.com/Home/Index/6"> 复杂网络 (0) </a> <a
							href="http://www.zynblog.com/Home/Index/7"> 推荐系统 (1) </a> <a
							href="http://www.zynblog.com/Home/Index/8"> 机器学习 (0) </a> <a
							href="http://www.zynblog.com/Home/Index/9"> Python (0) </a> <a
							href="http://www.zynblog.com/Home/Index/10"> Matlab (0) </a> <a
							href="http://www.zynblog.com/Home/Index/11"> 软件工程 (1) </a> <a
							href="http://www.zynblog.com/Home/Index/12"> Java (0) </a> <a
							href="http://www.zynblog.com/Home/Index/13"> C/C++ (0) </a> <a
							href="http://www.zynblog.com/Home/Index/14"> 算法 (0) </a>
					</div>
				</div>
				</aside> <aside id="hot_article">
				<div class="panel panel-zyn hidden-xs">
					<div class="panel-heading">
						<span class="glyphicon glyphicon-leaf newicon"></span> 炙手可热 <span
							class="panel-remove glyphicon glyphicon-remove-circle"></span> <span
							class="panel-toggle glyphicon glyphicon-upload"></span>
					</div>

					<ul class="list-group list-group-flush">

						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/1" title="开篇">
									开篇 </a>
						</span> <span class="badge">1923</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/2"
								title="如何使用Bootstrap typeahead插件实现搜索框自动补全"> 如何使用Bootstrap
									typeahead插件实现搜索框自动补全 </a>
						</span> <span class="badge">779</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/3"
								title="使用Lucene对分词结果进行倒排索引 "> 使用Lucene对分词结果进行倒排索引 </a>
						</span> <span class="badge">315</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/31"
								title="怎么让百度蜘蛛快速收录自己的网站"> 怎么让百度蜘蛛快速收录自己的网站 </a>
						</span> <span class="badge">307</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/29"
								title="使用腾讯云主机windows server 2012 IIS8部署ASP.NET MVC后访问出错:未能加载文件或程序集System.Web.Http.WebHost ">
									使用腾讯云主机windows server 2012 IIS8部署ASP.NET
									MVC后访问出错:未能加载文件或程序集System.Web.Http.WebHost </a>
						</span> <span class="badge">200</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/32"
								title="总结软件架构特征"> 总结软件架构特征 </a>
						</span> <span class="badge">195</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/30"
								title="在IIS8上部署网站时如何设置使用域名和IP均可访问：">
									在IIS8上部署网站时如何设置使用域名和IP均可访问： </a>
						</span> <span class="badge">165</span></li>
						<li class="list-group-item"><span class="post-title">
								<a href="http://www.zynblog.com/Archives/Index/27"
								title="从算法到案例：推荐系统必读的10篇精选技术文章"> 从算法到案例：推荐系统必读的10篇精选技术文章 </a>
						</span> <span class="badge">131</span></li>
					</ul>
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
								class="avatar avatar-40 photo"
								src="images/6360193404746811076346212.jpg" height="40"
								width="40">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									扎心了，老铁，你居然直接移除有害标签 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404074901084765038.jpg"
								class="avatar avatar-40 photo"
								src="images/6360193404074901084765038.jpg" height="40"
								width="40">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									11 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193403959818648681314.jpg"
								class="avatar avatar-40 photo"
								src="images/6360193403959818648681314.jpg" height="40"
								width="40">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									很不错。模仿前端写了个界面 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193403609800414283917.jpg"
								class="avatar avatar-40 photo"
								src="images/6360193403609800414283917.jpg" height="40"
								width="40">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/30#comments-title">
									fsdfsdfd </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img
								data-url="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404226471614736025.jpg"
								class="avatar avatar-40 photo"
								src="images/6360193404226471614736025.jpg" height="40"
								width="40">
						</span> <span class="comment-log"> <a
								href="http://www.zynblog.com/Archives/Index/1#comments-title">
									楼主加油 </a>
						</span></li>
						<li class="list-group-item"><span class="author-avatar">
								<img data-url="images/6360193404823377597946328.jpg"
								class="avatar avatar-40 photo"
								src="images/6360193404823377597946328.jpg" height="40"
								width="40">
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
						<a href="#" title="4个话题"
							style="color: rgb(247, 107, 112); font-size: 17px; left: -2.98099px; top: 162.464px; opacity: 1.30167; z-index: 0;">ASP.NET
							MVC</a> <a href="#" title="4个话题"
							style="color: rgb(247, 107, 112); font-size: 14px; left: -12.2043px; top: 163.683px; opacity: 0.592785; z-index: 1;">javascript</a><a
							href="#" title="18个话题"
							style="color: rgb(234, 176, 53); font-size: 14px; left: 43.3827px; top: 213.174px; opacity: 0.567623; z-index: 2;">Zynblog</a><a
							href="#" title="1个话题"
							style="color: rgb(0, 148, 255); font-size: 16px; left: 130.308px; top: 209.782px; opacity: 1.18871; z-index: 3;">非典型程序猿</a><a
							href="#" title="2个话题"
							style="color: rgb(190, 91, 193); font-size: 20px; left: 82.8235px; top: 152.205px; opacity: 2.15612; z-index: 4;">C#</a><a
							href="#" title="2个话题"
							style="color: rgb(190, 91, 193); font-size: 19px; left: 53.4748px; top: 100.461px; opacity: 1.82944; z-index: 5;">jQuery</a><a
							href="#" title="1个话题"
							style="color: rgb(0, 148, 255); font-size: 15px; left: 1.69911px; top: 79.6165px; opacity: 0.857923; z-index: 6;">设计模式</a><a
							href="#" title="1个话题"
							style="color: rgb(35, 240, 201); font-size: 13px; left: 23.1734px; top: 112.9px; opacity: 0.342816; z-index: 7;">Python</a><a
							href="#" title="3个话题"
							style="color: rgb(203, 168, 121); font-size: 13px; left: 52.2437px; top: 159.91px; opacity: 0.180799; z-index: 8;">Java</a><a
							href="#" title="18个话题"
							style="color: rgb(234, 176, 53); font-size: 13px; left: 130.737px; top: 195.69px; opacity: 0.26359; z-index: 9;">机器学习</a><a
							href="#" title="2个话题"
							style="color: rgb(190, 91, 193); font-size: 14px; left: 140.895px; top: 188.416px; opacity: 0.618148; z-index: 10;">Bootstrap</a><a
							href="#" title="1个话题"
							style="color: rgb(0, 148, 255); font-size: 17px; left: 147.34px; top: 154.519px; opacity: 1.32058; z-index: 11;">非著名程序员</a><a
							href="#" title="1个话题"
							style="color: rgb(35, 240, 201); font-size: 19px; left: 151.404px; top: 99.7643px; opacity: 1.93362; z-index: 12;">数据挖掘</a><a
							href="#" title="3个话题"
							style="color: rgb(203, 168, 121); font-size: 17px; left: 100.028px; top: 45.1292px; opacity: 1.46754; z-index: 13;">分布式</a><a
							href="#" title="1个话题"
							style="color: rgb(35, 240, 201); font-size: 15px; left: 69.3213px; top: 33.6199px; opacity: 0.682828; z-index: 14;">C/C++</a><a
							href="#" title="2个话题"
							style="color: rgb(190, 91, 193); font-size: 13px; left: 74.8767px; top: 57.4684px; opacity: 0.249034; z-index: 15;">推荐系统</a><a
							href="#" title="3个话题"
							style="color: rgb(203, 168, 121); font-size: 13px; left: 108.679px; top: 107.978px; opacity: 0.115894; z-index: 16;">前端</a><a
							href="#" title="4个话题"
							style="color: rgb(247, 107, 112); font-size: 13px; left: 170.447px; top: 136.853px; opacity: 0.226562; z-index: 17;">大数据</a><a
							href="#" title="18个话题"
							style="color: rgb(234, 176, 53); font-size: 14px; left: 173.173px; top: 113.426px; opacity: 0.602058; z-index: 18;">Zynblog</a><a
							href="#" title="1个话题"
							style="color: rgb(0, 148, 255); font-size: 16px; left: 167.926px; top: 61.1548px; opacity: 0.955104; z-index: 19;">数据分析</a><a
							href="#" title="1个话题"
							style="color: rgb(35, 240, 201); font-size: 14px; left: 138.127px; top: 29.8944px; opacity: 0.582981; z-index: 20;">复杂网络</a><a
							href="#" title="3个话题"
							style="color: rgb(203, 168, 121); font-size: 13px; left: 149.851px; top: 62.3815px; opacity: 0.27104; z-index: 21;">舆情分析</a>
					</div>
				</div>
				</aside> </aside>
			</div>
		</div>
	</div>

	<%@include file="../../common/foot.jsp"%>
</body>
</html>

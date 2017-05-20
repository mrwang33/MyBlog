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







					<article class="article container well">

					<div class="breadcrumb breadset">
						<!-- 面包屑 -->
						<span class="glyphicon glyphicon-home"></span> <a
							title="Go to Zynblog" href="/" class=" home">Zynblog</a> / <a
							title="ASP.NET MVC " href="/Home/Index/1"> ASP.NET MVC </a> /
					</div>

					<header class="article-header">
					<h1 class="article-title">
						<a href="">${article.articleTitle }</a>
					</h1>
					<!--//文章关键词 上面放关键词,文章最下面放阅读、评论、点赞 -->

					<div class="article-keyword">
						关键词： <span class="item">ASP.NET</span> <span class="item">MVC</span>
						<span class="item">Bootstrap</span> <span class="item">响应式</span>
						<span class="item">博客</span>
					</div>

					</header> <article class="article-content">

					${article.articleContent}
					</article>


					<div class="article-meta">
						<span class="item"><i>posted@</i> ${article.articleDate}</span> <span
							class="item">浏览（<a href="#">2108</a>）
						</span> <span class="item commentcount">评论（<a href="#">63</a>）
						</span> <span class="praisebtn"> <img class="praisenum"
							src="/Content/images/ico_praise.png" data-bd-imgshare-binded="1">
							（<a data-id="1" praise-flag="0" href="#">493</a>）
						</span>
					</div>

					<!-- 分页 :逻辑稍微复杂一点点-->
					<div class="article-pager bs-example">
						<ul class="pager">
							<li class="next"><a rel="next" class="gotoArchive"
								href="/Archives/Index/2">下一篇</a></li>
						</ul>
					</div>


					<script>
						window._bd_share_config = {
							common : {
								bdText : ' 开篇。本博客站基于ASP.NET MVC + EF6.0，采用Bootstrap响应式布局搭建，因此使用IE8以下的浏览器访问时可能会...',
								bdDesc : '',
								bdUrl : 'http://www.zynblog.com/Archives/Index/1',
								bdSign : 'on', //是否进行回流统计。
								bdMini : '2', //下拉浮层中分享按钮的列数
								bdMiniList : false //自定义下拉浮层中的分享按钮类型和排列顺序
							},
							share : [ {
								//此处放置分享按钮设置
								"bdSize" : 20
							} ],
							slide : [ {
								bdImg : 0,
								bdPos : "right",
								bdTop : 100
							} ],
							image : [ {
								//此处放置图片分享设置
								viewType : 'list',
								viewPos : 'top',
								viewColor : 'black',
								viewSize : '16',
								viewList : [ 'qzone', 'tsina', 'weixin', 'tqq', 'douban' ]
							} ],
							selectShare : [ {
								//此处放置划词分享设置
								"bdselectMiniList" : [ 'qzone', 'tqq', 'weixin', 'bdxc', 'tqf', 'tsina', 'douban' ]
							} ]
						}
						with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
					</script> <!-- 文章分享结束 --> <!-- Baidu Button END --> </article>
					<!--打赏-->
					<div style="margin-bottom:20px;">
						<a title="打赏，支持一下" class="dashang" onclick="dashangToggle()"
							href="javascript:void(0)"> </a>
					</div>
					<!-- 相关文章 -->
					<div id="comments-template">
						<div class="comments-wrap">
							<div id="comments" data-url="/Comment/PostCmt">

								<h3 id="comments-title" class="comments-header alert alert-info">
									63条评论</h3>

								<div id="loading-comments" style="display: none;">
									<img src="/Content/images/ico_loading2.gif"
										data-bd-imgshare-binded="1">
								</div>






								<ol class="commentlist">
									<li id="comment-8"
										class="comment even thread-even depth-1 parent"><article
											id="div-comment-8" class="comment-body">
										<footer class="comment-meta">
										<div class="comment-author vcard">
											<img
												src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404138966823636676.jpg"
												class="avatar avatar-70 photo" height="60" width="60"><b
												class="fn"><a href="" rel="external nofollow"
												class="floor">测试帐号 </a></b><span class="says">say :</span>
										</div>
										<div class="comment-metadata">
											<a href=""><time datetime="2016/6/23 12:30:04">2016/6/23
												12:30:04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#D2322D">1楼</font></time></a>
										</div>
										</footer>
										<div class="comment-content">
											<p>发布后首次测试评论，（1级评论会以邮件方式通知博主/2级回复会以邮件方式通知父评论）收件人点邮件中的链接即可直达此处。（如果您未收到邮件通知，那么很有可能是您邮箱地址填错了，要么就是静静地躺在你邮箱的垃圾箱中）</p>
										</div>
										<div class="reply">
											<a class="comment-reply-link" href="ajax地址"
												onclick="return addComment.moveForm(&quot;div-comment-8&quot;,8, &quot;respond&quot;, &quot;1&quot;)">回复</a>
										</div>
										</article>
										<ol class="children">
											<li id="comment-106"
												class="comment even thread-even depth-1 parent"><article
													id="div-comment-106" class="comment-body">
												<footer class="comment-meta">
												<div class="comment-author vcard">
													<img
														src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404699933676188961.png"
														class="avatar avatar-70 photo" height="60" width="60"><b
														class="fn"><a href="" rel="external nofollow"
														class="floor">199510</a></b><span class="says">say :</span>
												</div>
												<div class="comment-metadata">
													<a href=""><time datetime="2016/7/28 15:01:58">2016/7/28
														15:01:58</time></a>
												</div>
												</footer>
												<div class="comment-content">
													<p>123</p>
												</div>
												<div class="reply">
													<a class="comment-reply-link" href="ajax地址"
														onclick="return addComment.moveForm(&quot;div-comment-106&quot;,106, &quot;respond&quot;, &quot;1&quot;)">回复</a>
												</div>
												</article></li>
										</ol></li>
									<li id="comment-9"
										class="comment even thread-even depth-1 parent"><article
											id="div-comment-9" class="comment-body">
										<footer class="comment-meta">
										<div class="comment-author vcard">
											<img
												src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404901506728073862.jpg"
												class="avatar avatar-70 photo" height="60" width="60"><b
												class="fn"><a href="" rel="external nofollow"
												class="floor">西西</a></b><span class="says">say :</span>
										</div>
										<div class="comment-metadata">
											<a href=""><time datetime="2016/6/24 9:47:32">2016/6/24
												9:47:32&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#D2322D">2楼</font></time></a>
										</div>
										</footer>
										<div class="comment-content">
											<p>这博客，是你自己做的？自己租的服务器？</p>
										</div>
										<div class="reply">
											<a class="comment-reply-link" href="ajax地址"
												onclick="return addComment.moveForm(&quot;div-comment-9&quot;,9, &quot;respond&quot;, &quot;1&quot;)">回复</a>
										</div>
										</article>
										<ol class="children">
											<li id="comment-11"
												class="comment even thread-even depth-1 parent"><article
													id="div-comment-11" class="comment-body">
												<footer class="comment-meta">
												<div class="comment-author vcard">
													<img
														src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193405201522381557345.jpg"
														class="avatar avatar-70 photo" height="60" width="60"><b
														class="fn"><a href="" rel="external nofollow"
														class="floor">夜无痕</a></b><span class="says">say :</span>
												</div>
												<div class="comment-metadata">
													<a href=""><time datetime="2016/6/24 10:10:00">2016/6/24
														10:10:00</time></a>
												</div>
												</footer>
												<div class="comment-content">
													<p>腾讯云主机.</p>
												</div>
												<div class="reply">
													<a class="comment-reply-link" href="ajax地址"
														onclick="return addComment.moveForm(&quot;div-comment-11&quot;,11, &quot;respond&quot;, &quot;1&quot;)">回复</a>
												</div>
												</article></li>
										</ol></li>
									<li id="comment-10"
										class="comment even thread-even depth-1 parent"><article
											id="div-comment-10" class="comment-body">
										<footer class="comment-meta">
										<div class="comment-author vcard">
											<img
												src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160623/20160623083458522.jpg"
												class="avatar avatar-70 photo" height="60" width="60"><b
												class="fn"><a href="" rel="external nofollow"
												class="floor">路过</a></b><span class="says">say :</span>
										</div>
										<div class="comment-metadata">
											<a href=""><time datetime="2016/6/24 10:04:49">2016/6/24
												10:04:49&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#D2322D">3楼</font></time></a>
										</div>
										</footer>
										<div class="comment-content">
											<p>加油，希望有更多精彩内容</p>
										</div>
										<div class="reply">
											<a class="comment-reply-link" href="ajax地址"
												onclick="return addComment.moveForm(&quot;div-comment-10&quot;,10, &quot;respond&quot;, &quot;1&quot;)">回复</a>
										</div>
										</article></li>
									<li id="comment-17"
										class="comment even thread-even depth-1 parent"><article
											id="div-comment-17" class="comment-body">
										<footer class="comment-meta">
										<div class="comment-author vcard">
											<img
												src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404226471614736025.jpg"
												class="avatar avatar-70 photo" height="60" width="60"><b
												class="fn"><a href="" rel="external nofollow"
												class="floor">服务器</a></b><span class="says">say :</span>
										</div>
										<div class="comment-metadata">
											<a href=""><time datetime="2016/6/24 22:40:24">2016/6/24
												22:40:24&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#D2322D">4楼</font></time></a>
										</div>
										</footer>
										<div class="comment-content">
											<p>给个服务器的详细配置清单呗，我这几天在考虑换个服务商</p>
										</div>
										<div class="reply">
											<a class="comment-reply-link" href="ajax地址"
												onclick="return addComment.moveForm(&quot;div-comment-17&quot;,17, &quot;respond&quot;, &quot;1&quot;)">回复</a>
										</div>
										</article>
										<ol class="children">
											<li id="comment-19"
												class="comment even thread-even depth-1 parent"><article
													id="div-comment-19" class="comment-body">
												<footer class="comment-meta">
												<div class="comment-author vcard">
													<img
														src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193405201522381557345.jpg"
														class="avatar avatar-70 photo" height="60" width="60"><b
														class="fn"><a href="" rel="external nofollow"
														class="floor">博主</a></b><span class="says">say :</span>
												</div>
												<div class="comment-metadata">
													<a href=""><time datetime="2016/6/24 22:45:21">2016/6/24
														22:45:21</time></a>
												</div>
												</footer>
												<div class="comment-content">
													<p>服务器使用的是腾讯云主机的最低配置。具体配置是这样的： 操作系统： Windows Server
														2012 R2 标准版 64位中文版 ； CPU： 1核 ； 内存 ：1GB ； 公网带宽 1Mbps ； 系统盘
														50GB(本地磁盘) ；本站的文件都存储在七牛云盘中,而且以后换服务器的话也不用折腾各种静态文件了。</p>
												</div>
												<div class="reply">
													<a class="comment-reply-link" href="ajax地址"
														onclick="return addComment.moveForm(&quot;div-comment-19&quot;,19, &quot;respond&quot;, &quot;1&quot;)">回复</a>
												</div>
												</article></li>
										</ol></li>
									<li id="comment-21"
										class="comment even thread-even depth-1 parent"><article
											id="div-comment-21" class="comment-body">
										<footer class="comment-meta">
										<div class="comment-author vcard">
											<img
												src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/20160619153003348.jpg"
												class="avatar avatar-70 photo" height="60" width="60"><b
												class="fn"><a href="" rel="external nofollow"
												class="floor">影子明</a></b><span class="says">say :</span>
										</div>
										<div class="comment-metadata">
											<a href=""><time datetime="2016/6/25 11:47:47">2016/6/25
												11:47:47&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#D2322D">5楼</font></time></a>
										</div>
										</footer>
										<div class="comment-content">
											<p>发表评论最好弄一个第三方登录才能评论</p>
										</div>
										<div class="reply">
											<a class="comment-reply-link" href="ajax地址"
												onclick="return addComment.moveForm(&quot;div-comment-21&quot;,21, &quot;respond&quot;, &quot;1&quot;)">回复</a>
										</div>
										</article>
										<ol class="children">
											<li id="comment-22"
												class="comment even thread-even depth-1 parent"><article
													id="div-comment-22" class="comment-body">
												<footer class="comment-meta">
												<div class="comment-author vcard">
													<img
														src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193405201522381557345.jpg"
														class="avatar avatar-70 photo" height="60" width="60"><b
														class="fn"><a href="" rel="external nofollow"
														class="floor">博主</a></b><span class="says">say :</span>
												</div>
												<div class="comment-metadata">
													<a href=""><time datetime="2016/6/25 11:53:43">2016/6/25
														11:53:43</time></a>
												</div>
												</footer>
												<div class="comment-content">
													<p>刚开始是想采用社会化登录的，后来考虑访客可能会嫌麻烦，所以也就没采用第三方登录。给访客最大的自由度，起个喜欢的昵称、输入正确的邮箱就行了，无需注册，保护隐私。你觉得呢？</p>
												</div>
												<div class="reply">
													<a class="comment-reply-link" href="ajax地址"
														onclick="return addComment.moveForm(&quot;div-comment-22&quot;,22, &quot;respond&quot;, &quot;1&quot;)">回复</a>
												</div>
												</article>
												<ol class="children">
													<li id="comment-28"
														class="comment even thread-even depth-1 parent"><article
															id="div-comment-28" class="comment-body">
														<footer class="comment-meta">
														<div class="comment-author vcard">
															<img
																src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/20160619153003348.jpg"
																class="avatar avatar-70 photo" height="60" width="60"><b
																class="fn"><a href="" rel="external nofollow"
																class="floor">影子明</a></b><span class="says">say :</span>
														</div>
														<div class="comment-metadata">
															<a href=""><time datetime="2016/6/25 20:03:39">2016/6/25
																20:03:39</time></a>
														</div>
														</footer>
														<div class="comment-content">
															<p>好 ！ 想法好</p>
														</div>
														<div class="reply">
															<a class="comment-reply-link" href="ajax地址"
																onclick="return addComment.moveForm(&quot;div-comment-28&quot;,28, &quot;respond&quot;, &quot;1&quot;)">回复</a>
														</div>
														</article>
														<ol class="children">
															<li id="comment-104"
																class="comment even thread-even depth-1 parent"><article
																	id="div-comment-104" class="comment-body">
																<footer class="comment-meta">
																<div class="comment-author vcard">
																	<img
																		src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193405220273277799149.jpg"
																		class="avatar avatar-70 photo" height="60" width="60"><b
																		class="fn"><a href="" rel="external nofollow"
																		class="floor">jngjgjf</a></b><span class="says">say
																		:</span>
																</div>
																<div class="comment-metadata">
																	<a href=""><time datetime="2016/7/24 19:05:25">2016/7/24
																		19:05:25</time></a>
																</div>
																</footer>
																<div class="comment-content">
																	<p>回复一下</p>
																</div>
																<div class="reply">
																	<a class="comment-reply-link" href="ajax地址"
																		onclick="return addComment.moveForm(&quot;div-comment-104&quot;,104, &quot;respond&quot;, &quot;1&quot;)">回复</a>
																</div>
																</article>
																<ol class="children">
																	<li id="comment-107"
																		class="comment even thread-even depth-1 parent"><article
																			id="div-comment-107" class="comment-body">
																		<footer class="comment-meta">
																		<div class="comment-author vcard">
																			<img
																				src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404699933676188961.png"
																				class="avatar avatar-70 photo" height="60"
																				width="60"><b class="fn"><a href=""
																				rel="external nofollow" class="floor">199510</a></b><span
																				class="says">say :</span>
																		</div>
																		<div class="comment-metadata">
																			<a href=""><time datetime="2016/7/29 13:30:08">2016/7/29
																				13:30:08</time></a>
																		</div>
																		</footer>
																		<div class="comment-content">
																			<p>1123313</p>
																		</div>
																		<div class="reply">
																			<a class="comment-reply-link" href="ajax地址"
																				onclick="return addComment.moveForm(&quot;div-comment-107&quot;,107, &quot;respond&quot;, &quot;1&quot;)">回复</a>
																		</div>
																		</article>
																		<ol class="children">
																			<li id="comment-182"
																				class="comment even thread-even depth-1 parent"><article
																					id="div-comment-182" class="comment-body">
																				<footer class="comment-meta">
																				<div class="comment-author vcard">
																					<img
																						src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193403714496708395825.jpg"
																						class="avatar avatar-70 photo" height="60"
																						width="60"><b class="fn"><a href=""
																						rel="external nofollow" class="floor">tetete</a></b><span
																						class="says">say :</span>
																				</div>
																				<div class="comment-metadata">
																					<a href=""><time datetime="2016/12/29 17:17:53">2016/12/29
																						17:17:53</time></a>
																				</div>
																				</footer>
																				<div class="comment-content">
																					<p>111</p>
																				</div>
																				<div class="reply">
																					<a class="comment-reply-link" href="ajax地址"
																						onclick="return addComment.moveForm(&quot;div-comment-182&quot;,182, &quot;respond&quot;, &quot;1&quot;)">回复</a>
																				</div>
																				</article></li>
																		</ol></li>
																</ol></li>
															<li id="comment-183"
																class="comment even thread-even depth-1 parent"><article
																	id="div-comment-183" class="comment-body">
																<footer class="comment-meta">
																<div class="comment-author vcard">
																	<img
																		src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193403714496708395825.jpg"
																		class="avatar avatar-70 photo" height="60" width="60"><b
																		class="fn"><a href="" rel="external nofollow"
																		class="floor">tetete</a></b><span class="says">say
																		:</span>
																</div>
																<div class="comment-metadata">
																	<a href=""><time datetime="2016/12/29 17:18:09">2016/12/29
																		17:18:09</time></a>
																</div>
																</footer>
																<div class="comment-content">
																	<p>safsf</p>
																</div>
																<div class="reply">
																	<a class="comment-reply-link" href="ajax地址"
																		onclick="return addComment.moveForm(&quot;div-comment-183&quot;,183, &quot;respond&quot;, &quot;1&quot;)">回复</a>
																</div>
																</article></li>
														</ol></li>
													<li id="comment-225"
														class="comment even thread-even depth-1 parent"><article
															id="div-comment-225" class="comment-body">
														<footer class="comment-meta">
														<div class="comment-author vcard">
															<img
																src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193405271838443942308.jpg"
																class="avatar avatar-70 photo" height="60" width="60"><b
																class="fn"><a href="" rel="external nofollow"
																class="floor">xgeek</a></b><span class="says">say :</span>
														</div>
														<div class="comment-metadata">
															<a href=""><time datetime="2017/2/13 10:07:05">2017/2/13
																10:07:05</time></a>
														</div>
														</footer>
														<div class="comment-content">
															<p>说的不错，就是这个理儿。</p>
														</div>
														<div class="reply">
															<a class="comment-reply-link" href="ajax地址"
																onclick="return addComment.moveForm(&quot;div-comment-225&quot;,225, &quot;respond&quot;, &quot;1&quot;)">回复</a>
														</div>
														</article>
														<ol class="children">
															<li id="comment-239"
																class="comment even thread-even depth-1 parent"><article
																	id="div-comment-239" class="comment-body">
																<footer class="comment-meta">
																<div class="comment-author vcard">
																	<img
																		src="http://o82pwjziv.bkt.clouddn.com/HeadIcon/20160619/6360193404473359543548931.jpg"
																		class="avatar avatar-70 photo" height="60" width="60"><b
																		class="fn"><a href="" rel="external nofollow"
																		class="floor">qq</a></b><span class="says">say :</span>
																</div>
																<div class="comment-metadata">
																	<a href=""><time datetime="2017/3/15 18:49:44">2017/3/15
																		18:49:44</time></a>
																</div>
																</footer>
																<div class="comment-content">
																	<p>发发发</p>
																</div>
																<div class="reply">
																	<a class="comment-reply-link" href="ajax地址"
																		onclick="return addComment.moveForm(&quot;div-comment-239&quot;,239, &quot;respond&quot;, &quot;1&quot;)">回复</a>
																</div>
																</article></li>
														</ol></li>
												</ol></li>
										</ol></li>
								</ol>
								<div class="pagination" style="text-align: right;">
									<ul>
										<li id="start-page"><a
											href="/Comment/WrapComment/1?pageIndex=1&amp;pageSize=5">首页</a></li>
										<li class="active show-page"><span>1</span></li>
										<li class="show-page"><a
											href="/Comment/WrapComment/1?pageIndex=2&amp;pageSize=5">2</a></li>
										<li class="show-page"><a
											href="/Comment/WrapComment/1?pageIndex=3&amp;pageSize=5">3</a></li>
										<li class="show-page"><a
											href="/Comment/WrapComment/1?pageIndex=4&amp;pageSize=5">4</a></li>
										<li class="show-page"><a
											href="/Comment/WrapComment/1?pageIndex=5&amp;pageSize=5">5</a></li>
										<li class="show-page"><a
											href="/Comment/WrapComment/1?pageIndex=6&amp;pageSize=5">6</a></li>
										<li class="next-page"><a
											href="/Comment/WrapComment/1?pageIndex=2&amp;pageSize=5">下一页</a></li>
										<li id="end-page"><a
											href="/Comment/WrapComment/1?pageIndex=13&amp;pageSize=5">末页</a></li>
										<li id="total-page"><span>共-13-页</span></li>
									</ul>
								</div>
							</div>






							<div id="respond" class="comment-respond">
								<h3 id="reply-title" class="comment-reply-title">
									<i class="fa fa-pencil"></i> 快来评论 <small> <a
										rel="nofollow" id="cancel-comment-reply-link" href=""
										style="display:none;"> 取消回复 </a>
									</small>
								</h3>


								<form novalidate="novalidate" action="" method="post"
									id="commentform" class="comment-form">


									<input id="vid" name="VId" value="224" type="hidden">

									<div class="row">
										<div class="col-md-6" style="float:none">

											<div class="form-group">
												<div class="input-group">
													<div class="input-group-addon">
														<span class="glyphicon glyphicon-user"></span>
													</div>

													<input type="text" size="20" id="vname" name="VName"
														class="form-control" placeholder="起个昵称吧" value="wang33"
														disabled="" required="">
												</div>
											</div>
										</div>
										<div class="col-md-6">

											<div class="form-group">
												<div class="input-group">
													<div class="input-group-addon">
														<span class="glyphicon glyphicon-envelope"></span>
													</div>

													<input type="text" size="20" id="vemail" name="VEmail"
														class="form-control" placeholder="请输入您的邮箱"
														value="wang1386528@gmail.com" disabled="" required="">
												</div>
											</div>
										</div>
									</div>

									<textarea id="comment" class="form-control"
										placeholder="赶快发表你的见解吧！" name="CmtText" cols="30" rows="3"
										required="">                        
                    </textarea>
									<div id="loading" style="display: none;">
										<img src="/Content/images/ico_loading2.gif"
											data-bd-imgshare-binded="1"> <span>正在提交, 请稍候...</span>
									</div>
									<div id="error" style="display: none;">#</div>

									<p class="form-submit">
										<input name="submit" class="hiddeninput" id="submit"
											value="发表评论" type="submit"> <input name="CmtArtId"
											class="hiddeninput" value="1" id="comment_post_ID"
											type="hidden"> <input name="ParentId"
											class="hiddeninput" value="0" id="comment_parent"
											type="hidden"> <input name="PageSize" id="PageSize"
											type="hidden" class="hiddeninput" value="5">
									</p>
								</form>

							</div>
							<!-- #respond -->

						</div>
					</div>


					<div class="content">
						<div class="hide_box">
							<!--遮罩-->
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

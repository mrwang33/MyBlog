<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.mb.entity.LeaveMsg"%>
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	List<LeaveMsg> root = (List<LeaveMsg>)request.getAttribute("root");
	
%>
<%!
	//其实我并不想在jsp里面写java代码的 这是我的无奈之举 如果您有不用java代码解决这个问题的方法 请您不吝赐教
	public void deployLeaveMsg(List<LeaveMsg> root,int index,JspWriter out) throws Exception {
	if(root!=null&&root.size()>0){
		for (int i=0;i<root.size();i++) {
			//回复标签开始
			if(index==0) {
				out.print("<li id='comment-"+root.get(i).getLmId()+"' class='comment even thread-even depth-1 parent'>");
			} else {
				out.print("<ol class='children'><li id='comment-3' class='comment even thread-even depth-1 parent'>");
			}
			
			out.print("<article id='div-comment-"+root.get(i).getLmId()+"' class='comment-body'>");
			out.print("<footer class='comment-meta'>");
			out.print("<div class='comment-author vcard'>");
			out.print("<img src='images/avatar.png' class='avatar avatar-70 photo' height='60' width='60'>");
			out.print("<b class='fn'>");
			out.print("<a href='' rel='external nofollow' class='floor'>"+root.get(i).getLmName()+"</a></b>&nbsp;&nbsp;&nbsp;&nbsp;");
			out.print("<a style='color:rgba(0, 39, 59, 0.35);' >");
			out.print("<time datetime=''>"+new SimpleDateFormat("yyyy/MM/dd HH:mm:ss").format(root.get(i).getLmDate())+"</time>");
			out.print("</a>");
			out.print("</div>");
			if(index==0) {
				out.print("<div class='comment-metadata' style='color:#D2322D'>#"+(i+1)+"</div>");
			}
			out.print("</footer>");
			out.print("<div class='comment-content'>");
			out.print("<p>"+root.get(i).getLmContent()+"</p>");
			out.print("</div>");
			out.print("<div class='reply'>");
			out.print("<a style='cursor:pointer;' class='comment-reply-link' onclick='reply(\""+root.get(i).getLmId()+"\",\""+root.get(i).getLmName()+"\")' >回复</a>");
			out.print("</div>");
			out.print("</article>");
			
			deployLeaveMsg(root.get(i).getChildLm(), 1, out);
			//结束回复标签
			if(index==0) {
				out.print("</li>");
			} else {
				out.print("</ol>");
			}
		}
	}
	}
 %>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>摸鱼博客-留言板</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
<link href="css/csss.css" rel="stylesheet" />
<script src="js/Script.js"></script>
<!-- <script src="js/jquery-1.9.1.min.js"></script> -->


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





					<article class="article container well" style="text-align:center;">

					<header class="pageheader clearfix">
					<h1 class="">
						<a href="#">留言板</a>
					</h1>
					</header>
					<div id='leavemsg' class="article-content">
						<p style='margin-bottom:0px;'>
							<img class="article-emot inline" src="images/watermelon.png"
								style="display: inline;">
						</p>
						<p style='margin-bottom:0px;'>嗯，留言板就先做成这样吧，如果你有好的建议和想法可以给我留言。</p>
						<p style='margin-bottom:0px;'>(本站无需注册,起个昵称,输入正确邮箱即可留言/评论)</p>
						<p style='margin-bottom:0px;'>(已对Sql注入/XSS做过处理,请不要再alert/or1=1,ok?)</p>
					</div>
					</article>

					<div id="comments-template">
						<div class="comments-wrap">
							<div id="comments" data-url="leaveMsg.action">
								<h3 id="comments-title" class="comments-header alert alert-info">
									${length} 条留言&nbsp; &nbsp; <a style="color:red" href="#submit">快速留言&gt;&gt;&gt;</a>
								</h3>

								<ol class="commentlist">
									<%
										deployLeaveMsg(root, 0, out);
									 %>
								</ol>
							</div>






							<div id="respond" class="comment-respond">
								<h3 id="reply-title" class="comment-reply-title">
									<i class="fa fa-pencil"></i> 欢迎留言 <small> <a
										rel="nofollow" id="cancel-comment-reply-link" href=""
										style="display:none;"> 取消回复 </a>
									</small>
								</h3>


								<form novalidate="novalidate" action="leaveMsg/addLeaveMsg.action" method="post" id="commentform" class="comment-form">
                
                
                <input id="vid" name="VId" value="224" type="hidden">

                <div class="row">
                    <div class="col-md-6">
                        
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                                <input type="text" size="20" id="vname" name="lmName" class="form-control" placeholder="起个昵称"  required="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" size="20" id="vemail" name="lmEmail" class="form-control" placeholder="请输入您的邮箱"  required="">
                                <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <textarea id="comment" class="form-control" placeholder="赶快发表你的见解吧！" name="lmContent" cols="30" rows="3" required=""></textarea>
                <div id="loading" style="display: none;"> <img src="images/ico_loading2.gif">
                	<span>正在提交, 请稍候...</span>
                </div><div id="error" style="display: none;">#</div>

                <p class="form-submit" style="text-align:center">
                    <input name="submit" class="hiddeninput" id="submit" value="发表留言" type="submit">
                    <input name="lmFatherid" id="lmFatherid" value="" type="hidden">
                </p>
            </form>

							</div>
							<!-- #respond -->

						</div>
					</div>


				</div>

				<!--右侧边栏:大概包含五部分内容：1.关注我、2.目录分类、3.热门文章、4.最新评论、5.标签云或友情链接-->
				<aside class="col-md-4" id="sidebar"> </aside>
			</div>
		</div>
	</div>

	<%@include file="../../common/foot.jsp"%>
	<script type="text/javascript">
        $('#sidebar').remove();
        $('#mainbody').attr('class', 'col-md-12');
        var ww = $('#navbar-header').width()- 200 + 'px';
        $('#mainbody').css("padding-top", "10px");
        $('#mainbody').css("padding-bottom", "10px");
        $('#mainbody').css("padding-left", ww);
        $('#mainbody').css("padding-right", ww);
        
        function reply(fatherId,fatherName) {
        	//滚动到最底部
			var h = document.documentElement.scrollHeight || document.body.scrollHeight;
  			window.scrollTo(h,h);
  			document.getElementById("comment").innerHTML="回复:"+fatherName+" ";
  			document.getElementById("lmFatherid").value=fatherId;
        }
    </script>
</body>
</html>

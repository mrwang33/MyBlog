<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
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
    <link href="css/csss.css" rel="stylesheet"/>
    <script src="js/Script.js"></script>

     
    <script type="text/javascript">
        jQuery(function () {

            jQuery('#leavemsg').addClass('active');

            jQuery.ajaxSetup({ cache: false });

            //从邮件链接过来的会用到下面两个参数
            var rootLvmId = 0;
            var parentLvmId = 0;
            var lvmId = 0;
            //是否是从邮件链接过来
            var flag = '';

            if (flag == "1") {
                //从邮件链接过来;方法内去定位锚点
                //应该是根据评论的.Id倒着取推断该条评论属于第几页的
                //至于页数，就固定好了
                rootLvmId = '';
                parentLvmId = '';
                lvmId = '';  //评论锚点的id
            }

            GenerateLeaveMsg(flag, rootLvmId, parentLvmId, lvmId);
           
        });

        function GenerateLeaveMsg(anchorflag, anchorRootLvmId, anchorParentLvmId, anchorLvmId) {
            var $ = jQuery.noConflict();
            //清空<textarea></textarea>
            $('textarea').each(function () {
                this.value = ''
            });

            $.ajax({
                type: "GET",
                url: "/LeaveMsg/WrapLeaveMsg",

                dataType: "json",
                beforeSend: function () {
                    $('.comments-wrap #comments .pagination').remove();   //去除分页
                    $('.comments-wrap #comments .commentlist').remove(); //直接将所有留言的大容器去掉
                    $('#loading-comments').slideDown(); //缓冲图标缓慢展示
                },
                dataType: "json",
                success: function (data) {
                    if (data.Status == "1") {
                        $('#loading-comments').slideUp('fast');  //缓冲图标向上隐藏
                        //留言内容淡入
                        $('.comments-wrap #comments').append(data.CoreData);

                        var imgshow = $('#comments img');
                    }
                   
                    //加载完留言后, 定位
                    //ajax加载完页面数据后定位到响应留言锚点
                    if (anchorflag == "1") {
                        location.hash = '#comment-' + anchorRootLvmId;//定位到根评论区
                        $('#comment-' + anchorLvmId).css('border', 'solid 2px #1abc9c');
                        $('#comment-' + anchorParentLvmId).css('border', 'solid 2px #1abc9c');
                        $('#comment-' + anchorRootLvmId).css('border', 'solid 2px #1abc9c');
                    }
                }
            });
        };
    </script>


    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?33404e49b0dcf2b9235821f92da9cbe6";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>

    
    <script>
    (function () {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
            bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
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
                        <span class="glyphicon glyphicon-exclamation-sign"></span> 请注意，ZynBlog并不支持低于IE8的浏览器，为了获得最佳效果，推荐使用FireFox浏览器。
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
            <img class="article-emot inline" src="images/watermelon.png" style="display: inline;">
        </p>
       <p style='margin-bottom:0px;'>嗯，留言板就先做成这样吧，如果你有好的建议和想法可以给我留言。</p>
        <p style='margin-bottom:0px;'>(本站无需注册,起个昵称,输入正确邮箱即可留言/评论)</p>
		<p style='margin-bottom:0px;'>(已对Sql注入/XSS做过处理,请不要再alert/or1=1,ok?)</p>
    </div>
</article>

<div id="comments-template">
    <div class="comments-wrap">
        <div id="comments" data-url="/LeaveMsg/PostLvm">
            <h3 id="comments-title" class="comments-header alert alert-info">
                130条留言&nbsp; &nbsp;  <a style='color:red' href='#submit'>快速留言>>></a>
            </h3>

            <div id="loading-comments">
                <img src="images/ico_loading2.gif" />
            </div>

        </div>
        
        <div id="respond" class="comment-respond">
            <h3 id="reply-title" class="comment-reply-title">
                <i class="fa fa-pencil"></i>
                欢迎留言
                <small>
                    <a rel="nofollow" id="cancel-comment-reply-link" href="" style="display:none;">
                        取消回复
                    </a>
                </small>
            </h3>

            
            <form novalidate="novalidate" action="" method="post" id="commentform" class="comment-form">
                
                
                <input id="vid" name="VId" value="" type="hidden" />

                <div class="row">
                    <div class="col-md-6">
                        
                        <div class="form-group">
                            <div class="input-group">
                                <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
                                <input type="text" size="20" id="vname" name="VName" class="form-control" placeholder="起个昵称" value=""  required>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" size="20" id="vemail" name="VEmail" class="form-control" placeholder="请输入您的邮箱" value=""  required>
                                <div class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></div>
                            </div>
                        </div>
                    </div>
                </div>

                <textarea id="comment" class="form-control" placeholder="赶快发表你的见解吧！" name="LMessage" cols="30" rows="3" required>
                    
                </textarea>

                <p class="form-submit" style="text-align:center">
                    <input name="submit" class="hiddeninput" id="submit" value="发表留言" type="submit">  
                    <input name="CmtArtId" class="hiddeninput" value="" id="comment_post_ID" type="hidden">  
                    <input name="ParentId" class="hiddeninput" value="0" id="comment_parent" type="hidden">  
                </p>
            </form>

        </div><!-- #respond -->

    </div>
</div>

   
                </div>

                <!--右侧边栏:大概包含五部分内容：1.关注我、2.目录分类、3.热门文章、4.最新评论、5.标签云或友情链接-->
                <aside class="col-md-4" id="sidebar">
                    
                </aside>
            </div>
        </div>
    </div>

	<%@include file="../../common/foot.jsp" %>
    <script type="text/javascript">
        $('#sidebar').remove();
        $('#mainbody').attr('class', 'col-md-12');
        var ww = $('#navbar-header').width()- 200 + 'px';
        $('#mainbody').css("padding-top", "10px");
        $('#mainbody').css("padding-bottom", "10px");
        $('#mainbody').css("padding-left", ww);
        $('#mainbody').css("padding-right", ww);
    </script>
</body>
</html>

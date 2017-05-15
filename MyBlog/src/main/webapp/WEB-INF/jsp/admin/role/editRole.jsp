<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>修改角色</title>
    
	<link href="admin/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
        <link href="admin/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
        <link href="admin/assets/styles.css" rel="stylesheet" media="screen">
        <script src="admin/vendors/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row-fluid">
                <!--/span-->
                <div class="span12" id="content">
                     <!-- validation -->
                    <div class="row-fluid">
                         <!-- block -->
                        <div class="block">
                            <div class="navbar navbar-inner block-header">
                                <div class="muted pull-left">修改角色</div>
                            </div>
                            <div class="block-content collapse in">
                                <div class="span12">
					<!-- BEGIN FORM-->
					<form action="role/editRole.action" method="post" id="form_sample_1" class="form-horizontal">
						<fieldset>
							<div class="alert alert-error hide">
								<button class="close" data-dismiss="alert"></button>
								有点问题哦,您是不是哪里填错了?
							</div>
							<div class="alert alert-success hide">
								<button class="close" data-dismiss="alert"></button>
								修改成功!即将跳转回列表!
							</div>
  							<div class="control-group">
  								<label class="control-label">角色名<span class="required">*</span></label>
  								<div class="controls">
  									<input type="text" id="roleName" name="roleName" value="${role.roleName}" data-required="1" class="span6 m-wrap"/>
  								</div>
  							</div>
  							<!-- 多选select -->
  							<div class="control-group">
                                  <label class="control-label" for="multiSelect">权限</label>
                                  <div class="controls">
                                    <select multiple="multiple" name="perIds" id="multiSelect" class="chzn-select span4">
                                      <c:forEach var="per" items="${pers}">
									       <option id="per_${per.perId}" value='${per.perId}'>${per.permissions}</option>
									  </c:forEach>
                                    </select>
                                  </div>
                             </div>
                             <input type="hidden" id="roleId" name="roleId" value="${role.roleId}" />
  							<div class="form-actions">
  								<button type="submit" class="btn btn-primary">修改</button>
  								<button type="button" onclick="history.go(-1)" class="btn">取消</button>
  							</div>
						</fieldset>
					</form>
					<!-- END FORM-->
				</div>
			    </div>
			</div>
                     	<!-- /block -->
		    </div>
                     <!-- /validation -->


                </div>
            </div>
        </div>
        <!--/.fluid-container-->
        <link href="admin/vendors/datepicker.css" rel="stylesheet" media="screen">
        <link href="admin/vendors/uniform.default.css" rel="stylesheet" media="screen">
        <link href="admin/vendors/chosen.min.css" rel="stylesheet" media="screen">

        <link href="admin/vendors/wysiwyg/bootstrap-wysihtml5.css" rel="stylesheet" media="screen">

        <script src="admin/vendors/jquery-1.9.1.js"></script>
        <script src="admin/bootstrap/js/bootstrap.min.js"></script>
        <script src="admin/vendors/jquery.uniform.min.js"></script>
        <script src="admin/vendors/chosen.jquery.min.js"></script>
        <script src="admin/vendors/bootstrap-datepicker.js"></script>

        <script src="admin/vendors/wysiwyg/wysihtml5-0.3.0.js"></script>
        <script src="admin/vendors/wysiwyg/bootstrap-wysihtml5.js"></script>

        <script src="admin/vendors/wizard/jquery.bootstrap.wizard.min.js"></script>

	<script type="text/javascript" src="admin/vendors/jquery-validation/dist/jquery.validate.min.js"></script>
	<script src="admin/assets/form-validation-role-edit.js"></script>
        
	<script src="assets/scripts.js"></script>
        <script>

	jQuery(document).ready(function() {   
	   FormValidation.init();
	    //回显角色对应的权限
	   $.each($.parseJSON('${role.permissions}'),function(index,per){
			$("#per_"+per.perId).attr("selected",true)
		});
	});
	

        $(function() {
            $(".datepicker").datepicker();
            $(".uniform_on").uniform();
            $(".chzn-select").chosen();
            $('.textarea').wysihtml5();

            $('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;
                var $percent = ($current/$total) * 100;
                $('#rootwizard').find('.bar').css({width:$percent+'%'});
                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $('#rootwizard').find('.pager .next').hide();
                    $('#rootwizard').find('.pager .finish').show();
                    $('#rootwizard').find('.pager .finish').removeClass('disabled');
                } else {
                    $('#rootwizard').find('.pager .next').show();
                    $('#rootwizard').find('.pager .finish').hide();
                }
            }});
            $('#rootwizard .finish').click(function() {
                alert('Finished!, Starting over!');
                $('#rootwizard').find("a[href*='tab1']").trigger('click');
            });
        });
        </script>
    </body>
</html>

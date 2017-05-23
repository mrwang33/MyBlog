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

<title>博文分类管理</title>

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
<link
	href="plugins/bootstrap-table-1.11.0/bootstrap-table.min.css"
	rel="stylesheet" />
<link href="plugins/waves-0.7.5/waves.min.css"
	rel="stylesheet" />
<link href="plugins/jquery-confirm/jquery-confirm.min.css"
	rel="stylesheet" />
<link href="plugins/select2/css/select2.min.css"
	rel="stylesheet" />

<link href="css/common.css" rel="stylesheet" />
</head>
<body>
	<div id="main">
		<div id="toolbar">
			<a class="waves-effect waves-button" href="javascript:;"
				onclick="createAction()"><i class="zmdi zmdi-plus"></i> 新增用户</a> <a
				class="waves-effect waves-button" href="javascript:;"
				onclick="updateAction()"><i class="zmdi zmdi-edit"></i> 编辑用户</a> <a
				class="waves-effect waves-button" href="javascript:;"
				onclick="deleteAction()"><i class="zmdi zmdi-close"></i> 删除用户</a>
		</div>
		<table id="table" style="font-size:12px"></table>
	</div>
	<!-- 新增 -->
	<div id="createDialog" class="crudDialog" hidden>
		<form>
			<div class="form-group">
				<label for="input1">标题</label> <input id="input1" type="text"
					class="form-control">
			</div>
			<div class="form-group">
				<label for="input2">名称</label> <input id="input2" type="text"
					class="form-control">
			</div>
			<div class="form-group">
				<label for="input3">根目录</label> <input id="input3" type="text"
					class="form-control">
			</div>
			<div class="form-group">
				<label for="input4">图标</label> <input id="input4" type="text"
					class="form-control">
			</div>
		</form>
	</div>
	<script src="plugins/jquery.1.12.4.min.js"></script>
	<script src="plugins/bootstrap-3.3.0/js/bootstrap.min.js"></script>
	<script
		src="plugins/bootstrap-table-1.11.0/bootstrap-table.min.js"></script>
	<script
		src="plugins/bootstrap-table-1.11.0/locale/bootstrap-table-zh-CN.min.js"></script>
	<script src="plugins/waves-0.7.5/waves.min.js"></script>
	<script src="plugins/jquery-confirm/jquery-confirm.min.js"></script>
	<script src="plugins/select2/js/select2.min.js"></script>

	<script src="js/common.js"></script>
	<script>
		var $table = $('#table');
		$(function() {
			$(document).on('focus', 'input[type="text"]', function() {
				$(this).parent().find('label').addClass('active');
			}).on('blur', 'input[type="text"]', function() {
				if ($(this).val() == '') {
					$(this).parent().find('label').removeClass('active');
				}
			});
			// bootstrap table初始化
			// http://bootstrap-table.wenzhixin.net.cn/zh-cn/documentation/
			$table.bootstrapTable({
				url : 'classify/getAll.action',
				height : getHeight(),
				striped : true,
				search : true,
				searchOnEnterKey : true,
				showRefresh : true,
				showToggle : true,
				showColumns : true,
				minimumCountColumns : 2,
				showPaginationSwitch : true,
				clickToSelect : true,
				detailView : true,
				detailFormatter : 'detailFormatter',
				pagination : true,
				paginationLoop : false,
				classes : 'table table-hover table-no-bordered',
				//sidePagination: 'server',
				//silentSort: false,
				smartDisplay : false,
				idField : 'id',
				sortName : 'id',
				sortOrder : 'desc',
				escape : true,
				searchOnEnterKey : true,
				idField : 'systemId',
				maintainSelected : true,
				toolbar : '#toolbar',
				columns : [
					{
						field : 'state',
						checkbox : true
					},
					{
						field : 'classifyId',
						title : '编号',
						sortable : true,
						align : 'center',
						halign : 'center'
					},
					{
						field : 'classifyName',
						title : '分类名',
						sortable : true,
						align : 'center',
						halign : 'center'
					},
					{
						field : 'action',
						title : '操作',
						halign : 'center',
						align : 'center',
						formatter : 'actionFormatter',
						events : 'actionEvents',
						clickToSelect : false
					}
				]
			}).on('all.bs.table', function(e, name, args) {
				$('[data-toggle="tooltip"]').tooltip();
				$('[data-toggle="popover"]').popover();
			});
		});
		function actionFormatter(value, row, index) {
			return [
				'<a class="edit ml10" href="javascript:void(0)" data-toggle="tooltip" title="Edit"><i class="glyphicon glyphicon-edit"></i></a>　',
				'<a class="remove ml10" href="javascript:void(0)" data-toggle="tooltip" title="Remove"><i class="glyphicon glyphicon-remove"></i></a>'
			].join('');
		}
	
		window.actionEvents = {
			'click .edit' : function(e, value, row, index) {
				location.href = "classify/goEdit.action?classifyId="+row.classifyId;
			},
			'click .remove' : function(e, value, row, index) {
				$.confirm({
					type : 'red',
					animationSpeed : 300,
					title : false,
					content : '警告!!!删除该分类会导致该分类下所有博文删除,是否继续？',
					buttons : {
						confirm : {
							text : '确认',
							btnClass : 'waves-effect waves-button',
							action : function() {
								$.ajax({
								  url: "classify/deleteClassify.action",
								  type:"POST",
								  //设置为传统方式传送参数
								  traditional:true,
								  data:{pks:row.classifyId},
								  success: function(data){
									  if(data>0){
									  	$.confirm({
											title : false,
											content : '已删除'+data+"条数据",
											autoClose : 'cancel|3000',
											backgroundDismiss : true,
											onClose : function() {
												$('#table').bootstrapTable('refresh');
											},
											buttons : {
												cancel : {
													text : '取消',
													btnClass : 'waves-effect waves-button'
												}
											}
										});
									  }else{
									  	$.confirm({
											title : false,
											content : "删除数据失败",
											autoClose : 'cancel|3000',
											backgroundDismiss : true,
											buttons : {
												cancel : {
													text : '取消',
													btnClass : 'waves-effect waves-button'
												}
											}
										});
									  }
								  }
								});
							}
						},
						cancel : {
							text : '取消',
							btnClass : 'waves-effect waves-button'
						}
					}
				});
			}
		};
		function detailFormatter(index, row) {
			var html = [];
			$.each(row, function(key, value) {
				html.push('<p><b>' + key + ':</b> ' + value + '</p>');
			});
			return html.join('');
		}
		// 新增
		function createAction() {
			location.href = "classify/goAdd.action";
		}
		// 编辑
		function updateAction() {
			var rows = $table.bootstrapTable('getSelections');
			if (rows.length == 0 || rows.length>1) {
				$.confirm({
					title : false,
					content : '请选择一条记录！',
					autoClose : 'cancel|3000',
					backgroundDismiss : true,
					buttons : {
						cancel : {
							text : '取消',
							btnClass : 'waves-effect waves-button'
						}
					}
				});
			} else {
				location.href = "classify/goEdit.action?classifyId="+rows[0].classifyId;
			}
		}
		// 删除
		function deleteAction() {
			var rows = $table.bootstrapTable('getSelections');
			if (rows.length == 0) {
				$.confirm({
					title : false,
					content : '请至少选择一条记录！',
					autoClose : 'cancel|3000',
					backgroundDismiss : true,
					buttons : {
						cancel : {
							text : '取消',
							btnClass : 'waves-effect waves-button'
						}
					}
				});
			} else {
				$.confirm({
					type : 'red',
					animationSpeed : 300,
					title : false,
					content : '警告!!!删除该分类会导致该分类下所有博文删除,是否继续？',
					buttons : {
						confirm : {
							text : '确认',
							btnClass : 'waves-effect waves-button',
							action : function() {
								var classifyIds = new Array();
								for (var i = 0; i < rows.length; i++) {
									classifyIds[i] = rows[i].classifyId;
								}
								$.ajax({
								  url: "classify/deleteClassify.action",
								  type:"POST",
								  //设置为传统方式传送参数
								  traditional:true,
								  data:{pks:classifyIds},
								  success: function(data){
									  if(data>0){
									  	$.confirm({
											title : false,
											content : '已删除'+data+"条数据",
											autoClose : 'cancel|3000',
											backgroundDismiss : true,
											onClose : function() {
												$('#table').bootstrapTable('refresh');
											},
											buttons : {
												cancel : {
													text : '取消',
													btnClass : 'waves-effect waves-button'
												}
											}
										});
									  }else{
									  	$.confirm({
											title : false,
											content : "删除数据失败",
											autoClose : 'cancel|3000',
											backgroundDismiss : true,
											buttons : {
												cancel : {
													text : '取消',
													btnClass : 'waves-effect waves-button'
												}
											}
										});
									  }
								  }
								});
							}
						},
						cancel : {
							text : '取消',
							btnClass : 'waves-effect waves-button'
						}
					}
				});
			}
		}
	</script>
</body>
</html>

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

<title>留言管理</title>

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
				<a class="waves-effect waves-button" href="javascript:;" onclick="deleteAction()"><i class="zmdi zmdi-close"></i> 删除留言</a>
		</div>
		<table id="table" style="font-size:12px"></table>
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
			$.confirm({
				title : false,
				content : '留言管理是不允许修改和新增的,只能进行删除操作!',
				autoClose : 'cancel|5000',
				backgroundDismiss : true,
				buttons : {
					cancel : {
						text : '知道了',
						btnClass : 'waves-effect waves-button'
					}
				}
			});
		
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
				url : 'leaveMsg/getAll.action',
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
						field : 'lmId',
						title : 'ID',
						sortable : true,
						align : 'center',
						halign : 'center'
					},
					{
						field : 'lmName',
						title : '昵称',
						sortable : true,
						align : 'center',
						halign : 'center'
					},
					{
						field : 'lmEmail',
						title : '邮箱',
						sortable : true,
						align : 'center',
						halign : 'center'
					},
					{
						field : 'lmContent',
						title : '内容',
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
				'<a class="remove ml10" href="javascript:void(0)" data-toggle="tooltip" title="Remove"><i class="glyphicon glyphicon-remove"></i></a>'
			].join('');
		}
	
		window.actionEvents = {
			'click .remove' : function(e, value, row, index) {
				$.confirm({
					type : 'red',
					animationSpeed : 300,
					title : false,
					content : '确认删除该条记录吗？',
					buttons : {
						confirm : {
							text : '确认',
							btnClass : 'waves-effect waves-button',
							action : function() {
								$.ajax({
								  //先检查有没有子回复
								  url: "leaveMsg/getLeaveMsgChild.action",
								  type:"POST",
								  //设置为传统方式传送参数
								  traditional:true,
								  data:{lmId:row.lmId},
								  success: function(data){
									  if(data>0){
									  	$.confirm({
											type : 'red',
											animationSpeed : 300,
											title : false,
											content : '当前留言下有回复 删除该留言将导致所有回复都删除 是否继续?',
											buttons :{
												cancel : {
													text : '取消',
													btnClass : 'waves-effect waves-button'
												},
												confirm : {
													text : '删除',
													btnClass : 'waves-effect waves-button',
													action : function() {
														$.ajax({
															url: "leaveMsg/deleteLeaveMsg.action",
															type:"post",
															traditional:true,
								  							data:{pks:row.lmId},
								  							success: function(data) {
								  								if(data>0) {
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
								  								} else {
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
												}
											}
										});
									  }else{
									  	$.ajax({
										  url: "leaveMsg/deleteLeaveMsg.action",
										  type:"POST",
										  //设置为传统方式传送参数
										  traditional:true,
										  data:{pks:row.lmId},
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
		// 删除
		function deleteAction() {
			var rows = $table.bootstrapTable('getSelections');
			var lmIds = new Array();
			for (var i = 0; i < rows.length; i++) {
				lmIds[i] = rows[i].lmId;
			}
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
					content : '确认删除该条记录吗？',
					buttons : {
						confirm : {
							text : '确认',
							btnClass : 'waves-effect waves-button',
							action : function() {
								$.ajax({
								  //先检查有没有子回复
								  url: "leaveMsg/getLeaveMsgChildByPks.action",
								  type:"POST",
								  //设置为传统方式传送参数
								  traditional:true,
								  data:{pks:lmIds},
								  success: function(data){
									  if(data>0){
									  	$.confirm({
											type : 'red',
											animationSpeed : 300,
											title : false,
											content : '当前留言下有回复 删除该留言将导致所有回复都删除 是否继续?',
											buttons :{
												cancel : {
													text : '取消',
													btnClass : 'waves-effect waves-button'
												},
												confirm : {
													text : '删除',
													btnClass : 'waves-effect waves-button',
													action : function() {
														$.ajax({
															url: "leaveMsg/deleteLeaveMsg.action",
															type:"post",
															traditional:true,
								  							data:{pks:lmIds},
								  							success: function(data) {
								  								if(data>0) {
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
								  								} else {
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
												}
											}
										});
									  }else{
									  	$.ajax({
										  url: "leaveMsg/deleteLeaveMsg.action",
										  type:"POST",
										  //设置为传统方式传送参数
										  traditional:true,
										  data:{pks:lmIds},
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

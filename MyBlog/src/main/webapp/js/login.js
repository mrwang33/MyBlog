$(function() {
	// Waves初始化
	Waves.displayEffect();
	// 输入框获取焦点后出现下划线
	$('.form-control').focus(function() {
		$(this).parent().addClass('fg-toggled');
	}).blur(function() {
		$(this).parent().removeClass('fg-toggled');
	});
});
Checkbix.init();
$(function() {
	// 点击登录按钮
	$('#login-bt').click(function() {
		login();
	});
	// 回车事件
	$('#username, #password').keypress(function (event) {
		if (13 == event.keyCode) {
			login();
		}
	});
});
// 登录
function login() {
	var username = $('#username').val();
	var password = $("#password").val();
    // 取得要提交页面的URL  
    var action = "admin/login.action";  
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
}
//定义全局layer
var layer;
layui.use('layer', function(){
 layer = layui.layer;
});

//显示登录
function clickLogin(){
	//让登录被选中
	$(".switch-login-registration li").last().removeClass("layui-this");	

	$(".switch-login-registration li").first().addClass("layui-this");

	$(".registerDialog").css("display","none");
	$(".loginDialog").css("display","block");
	
	layer.open({
	        type: 1, 
	        offset: 'auto',
	     	title:false,
	     	scrollbar: false,
			content: $('#dialogWrap') //这里content是一个普通的String
	       });
}
//显示注册
function clickRegister(){
	//让注册被选中
	$(".switch-login-registration li").first().removeClass("layui-this");	
	$(".switch-login-registration li").last().addClass("layui-this");
	
	$(".registerDialog").css("display","block");
	$(".loginDialog").css("display","none");
	
	
	layer.open({
	        type: 1, 
	        offset: 'auto',
	     	title:false,
	     	scrollbar: false,
			content: $('#dialogWrap') //这里content是一个普通的String
	       });
}

//登录注册切换绑定事件
$(function(){
	
	$(".switch-login-registration li").each(function(i){
	var temp=i;
	$(this).click(function(){
		$(".switch-login-registration li").removeClass("layui-this");
		if(i==0){
		//让登录显示让注册不显示
		
		$(this).addClass("layui-this");
		
		$(".registerDialog").css("display","none");
		$(".loginDialog").css("display","block");
		}
		if(i==1){
		//让注册显示登录不显示
		$(this).addClass("layui-this");
		
		$(".loginDialog").css("display","none");
		$(".registerDialog").css("display","block");
		}
		
		
	});
	
});
	
})


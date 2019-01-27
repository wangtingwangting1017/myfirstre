//定义全局layer
var layer;
layui.use('layer', function(){
 layer = layui.layer;
});

//显示登录
function clickLogin(){
	layer.open({
	        type: 1, 
	        offset: 'auto',
	     	title:false,
	     	scrollbar: false,
			content: $('#dialogWrap') //这里content是一个普通的String
	       });
}

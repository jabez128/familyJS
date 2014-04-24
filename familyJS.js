;(function(name,context,factory){
	if(typeof define == 'function' && define.amd){
		define(factory);
	}else{
		context[name] = factory();
	}
})('family',this,function(){
	return function(){
		
	}
})
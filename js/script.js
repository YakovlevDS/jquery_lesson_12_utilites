
var newVar = 50;
jQuery(function($) {

	/*var el = document.getElementById('stuck_container');
	
	if($.contains(document.body, el)) {
		$(el).css({'border':'1px solid red'});
	}*/
	
	//data()
	/*var ul = $('.sf-menu');
	
	var value = {
		one : 10,
		two : 20
	}
	
	//$.data(ul,'data','Hello world');
	$.data(ul,'data',value);
	
	console.log($.data(ul,'data').two);*/
	
	
	//each 
	/*
	var arr = ['one','two','three'];
	
	var result = $.each(arr, function (index, value) {
		
		console.log(index + ' - ' + value);
		
	});
	
	console.log(result);*/
	
	/*
	var object1 = {
		one : 10,
		two : 20,
		three : {
			val1:'Hello',
			val2: 'world',
			val3:'!'
		}
	}
	
	var object2 = {
		one : 100,
		four : 'string',
		three : {
			val1:'Ben',
			val2: 'Bob'
			
		}
	}
	
	var result = $.extend(true,object1, object2 );
	
	console.log(JSON.stringify(result));
	
	*/
	
	//var newVar = '50';
	/*console.log(newVar);
	$.globalEval("newVar = 'Hello world'; alert(newVar); ");
	console.log(newVar);*/
	
	
	/*
	//var arr = [1,2,3,4,5,6,7,8,9,10];
	var arr = $('p');
	
	function func(el,ind) {
		if(el == 4 || ind == 2) {
			return false;
		}
		else {
			return true;
		}
	}
	
	var result = $.grep(arr,func);
	
	
	console.log(result);*/
	
	var arr = [1, "Bob", "Sid"];
	//console.log($.inArray('Bob',arr));
	
	//console.log($.isArray(arr));
	//console.log($.isEmptyObject({}));
	
	
	/*function func(el,ind) {
		if(el == 4 || ind == 2) {
			return false;
		}
		else {
			return true;
		}
	}
	
	console.log($.isFunction(arr));*/
	
	
	//console.log($.isNumeric({}));
	//console.log($.isPlainObject('hello'));  // new Object()
	//console.log($.isWindow(document));  // new Object()
	
	
	
	
	
	
	
	
	
	
 
});


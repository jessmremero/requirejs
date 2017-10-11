requirejs(["helper/util","helper/topbar","helper/banner"], function(util,app,banner) {
    console.log('main开始执行了')
	console.log(app)
	var h = util.add(3,3)
	var div = document.createElement('div')
	div.innerHTML = h
	document.body.appendChild(div)
	
});
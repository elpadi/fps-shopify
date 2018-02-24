var App = function() {
};

Object.defineProperty(App.prototype, 'libUrl', { value: function libUrl(name, version, path) {
	return `https://cdn.jsdelivr.net/npm/${name}@${version}/${path}`;
}});

Object.defineProperty(App.prototype, 'addJs', { value: function addJs(url) {
	var element = document.createElement('script');
	element.async = true;
	element.defer = true;
	element.src = url;
	document.body.appendChild(element);
	return element;
}});

Object.defineProperty(App.prototype, 'addCss', { value: function addCss(url) {
	var element = document.createElement('link');
	element.rel = 'stylesheet';
	element.href = url;
	document.head.appendChild(element);
	return element;
}});

Object.defineProperty(App.prototype, 'loadLibrary', { value: function loadLibrary(libInfo) {
	var promises = libInfo.FILES.map(function(path) {
		var url = this.libUrl(libInfo.NAME, libInfo.VERSION, path);
		return new Promise(function(resolve, reject) {
			var element = this[path.endsWith('js') ? 'addJs' : 'addCss'].call(this, url);
			element.addEventListener('load', resolve);
		}.bind(this));
	}.bind(this));
	return Promise.all(promises);
}});

Object.defineProperty(App.prototype, 'initSlideshows', { value: function initSlideshows() {
}});

Object.defineProperty(App.prototype, 'initZoom', { value: function initZoom() {
	$('.zoom').find('img').each(function(i, img) {
		$(img.parentElement).addClass('zoom-init').zoom({ url: img.dataset.zoom });
	});
}});

Object.defineProperty(App.prototype, 'init', { value: function init() {
}});

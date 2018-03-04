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

Object.defineProperty(App.prototype, 'initSlideshows', { value: function initSlideshows(options) {
	if (arguments.length < 1) options = {};
	$('.slides')
		.filter((i, node) => node.children.length > 1)
		.slick($.extend({ dots: true, arrows: false, autoplay: true, autoplaySpeed: 6000 }, options));
}});

Object.defineProperty(App.prototype, 'initProduct', { value: function initProduct() {
	var p = new App.Product();
	$('#product-colors').find('button').on('click', p.onColorBoxClick.bind(p));
	$('.product__variant select').on('change', p.onVariantMenuChange.bind(p));
	this.initSlideshows({ fade: true });
	setTimeout(this.initZoom.bind(this), 1000);
}});

Object.defineProperty(App.prototype, 'initZoom', { value: function initZoom() {
	$('.zoom').find('img').each(function(i, img) {
		$(img.parentElement).addClass('zoom-init').zoom({ url: img.dataset.zoom });
	});
}});

Object.defineProperty(App.prototype, 'setupBurger', { value: function setupBurger() {
	document.getElementById('hamburger').addEventListener('click', function(e) {
		var burgerClasses = e.currentTarget.classList,
			menuClasses = document.getElementById('main-nav').classList;
		burgerClasses.toggle('is-open');
		burgerClasses.toggle('is-closed');
		menuClasses.toggle('is-open');
	});
}});

Object.defineProperty(App.prototype, 'init', { value: function init() {
	this.setupBurger();
}});

App.Product = function() {
	var info = document.getElementById('product-info'),
		header = document.getElementById('product-header');
	info.insertBefore(header, info.children[0]);
	info.classList.add('header-moved');
};

/**
 * Select the correct option in the color select menu.
 * Let the onChange event handler update the selected color box.
 */
Object.defineProperty(App.Product.prototype, 'onColorBoxClick', { value: function onColorBoxClick(e) {
	var color = e.currentTarget.children[0].innerHTML;
	var select = document.getElementById('variant--color');
	select.value = color;
	select.dispatchEvent(new Event('change'));
}});

/**
 * Mark the specific color box as selected.
 */
Object.defineProperty(App.Product.prototype, 'selectColorBox', { value: function selectColorBox(color) {
	var container = $('#product-colors');
	container.find('li').removeClass('selected');
	container.find(`button[data-color-slug="${color}"]`).parent().addClass('selected');
}});


/**
 * Fired when the color select menu changes.
 * Update the color boxes to the correct state.
 */
Object.defineProperty(App.Product.prototype, 'onColorMenuChange', { value: function onColorMenuChange(e) {
	//this.onVariantOptionChange();
	var options = e.currentTarget.options;
	this.selectColorBox(options[options.selectedIndex].dataset.valueSlug);
}});

/**
 * Optional function to do something else besides moving forward to this.onVariantOptionChange()
 *
Object.defineProperty(App.Product.prototype, 'onSizeMenuChange', { value: function onSizeMenuChange(e) {
	this.onVariantOptionChange();
}});
/* */

Object.defineProperty(App.Product.prototype, 'getVariantIdFromSelectedOptions', { value: function getVariantIdFromSelectedOptions(values) {
	var options = Array.from(document.getElementById('product-variants-select').options);
	var valueString = values.join(' / ');
	var index = options.findIndex(function(op) {
		return op.innerHTML === valueString;
	});
	return index > -1 ? options[index].value : '';
}});

/**
 * Called after any specific variant has changed.
 * Needs to update the true (hidden) variant menu to the correct option.
 */
Object.defineProperty(App.Product.prototype, 'onVariantOptionChange', { value: function onVariantOptionChange() {
	var values = $('.product__variant select').get().map(function(select) { return select.value; });
	try {
		if (!values.length) throw 'Could not fetch select elements';
		if (!values.every(function(val) { return val !== ''; })) throw "Not all variants selected";
	}
	catch (msg) {
		console.error(msg);
		return;
	}
	document.getElementById('product-variants-select').value = this.getVariantIdFromSelectedOptions(values);
}});

/**
 * Fires when the menu for one specific variant changes.
 * Optionally runs additional code for each specific variant.
 */
Object.defineProperty(App.Product.prototype, 'onVariantMenuChange', { value: function onVariantMenuChange(e) {
	this.onVariantOptionChange();
	var slugParts = e.currentTarget.id.split('--').pop().split('-');
	var VariantName = slugParts.map(function(s) { return s[0].toUpperCase() + s.substr(1); }).join('');
	var fn = `on${VariantName}MenuChange`;
	if (fn in this) this[fn].call(this, e);
}});


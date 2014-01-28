var elements = [$('#id-för-första-sidan'), $('#id-för-andra-sidan')];

var selectElement = function(element) {
	for(var e in elements) {
		if(elements[e] !== element)
			elements[e].hide();
	}
	current = element.show();
}
selectElement(elements[0]);

for(var e in elements) {
	e.click(function() {
		selectElement($(this));
	});
}
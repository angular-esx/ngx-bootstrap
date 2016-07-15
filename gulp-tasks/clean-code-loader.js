module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
    
	return "module.exports = " + JSON.stringify(content.replace(/(?:\r\n|\r|\n)/g, '').replace(/  +/g, ' '));
}
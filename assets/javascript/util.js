String.prototype.xor = function(key) {
    return Array.from(
        this,
        (c, i) => String.fromCharCode(c.charCodeAt() ^ key.charCodeAt(i % key.length))
    ).join('');
}

String.prototype.enc = function()
{
	return encodeURI(this);
}

String.prototype.dec = function()
{
	return decodeURI(this);
}

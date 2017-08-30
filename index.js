/**
 * Maybe write a webpack plugin to handle this.
 */

const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

function useCacheLoader(source) {
	return source;
}
module.exports = useCacheLoader;

useCacheLoader.pitch = function () {
	var options = loaderUtils.getOptions(this) || {};
	var base = options.cacheFolder;
	if (!base) {
		throw new Error("useCacheLoader must has a cacheFolder option");
	}

	if (options.getCachePath) {
		var cacheFilepath = options.getCachePath(this.resourcePath, this.options.context);
	} else {
		cacheFilepath = getCacheFilepath(this.resourcePath, this.options.context, base);
	}

	try {
		return getCacheContent(cacheFilepath);
	} catch (e) {
		// pass
	}
}

function getCacheFilepath(pathString, part, repl) {
	return pathString.replace(part, repl);
}

function getCacheContent(request) {
	var content = fs.readFileSync(request, {encoding: 'utf8'});
	return content;
}

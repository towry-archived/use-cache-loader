# use cache file loader for webpack

A simple webpack loader to use cache file.

## Install

```bash
npm install use-cache-loader --save-dev
```

## Usage

```js
{
  loader: 'use-cache-loader',
  options: {
    cacheFolder: 'your-path-to-cache-folder',
    getCachePath: function (resourcePath, contextDir) { }, /* optional, to get the cache file path */
  }
}
```


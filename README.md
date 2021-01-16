# Serialize

Serialize form data into a query string, array, object, or JSON string.

1. [Installation](#installation)
2. [Creating a new instance](#creating-a-new-instance)
3. [Instance methods](#instance-methods)

## Installation

### Script Tag

The easiest way to get started is by using the jsDelivr CDN via an HTML `<script></script>` tag.

Serialize uses [semantic versioning](https://semver.org). You can grab a major, minor, or patch version from the CDN with the @1.2.3 syntax. You can find all available versions under [releases](https://github.com/kieranbarker/serialize/releases).

```html
<script src="https://cdn.jsdelivr.net/npm/@kieranbarker/serialize@1/dist/serialize.min.js"></script>
```

You can also [download the files directly from GitHub](https://github.com/kieranbarker/serialize/archive/main.zip).

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```html
<script src="path/to/serialize.min.js"></script>
```

### ES Module

Serialize also supports modern browsers and module bundlers (Rollup, Webpack, Snowpack, etc.) using the ES module `import` syntax. Use the `.es` version.

```js
import { Serialize } from 'https://cdn.jsdelivr.net/npm/@kieranbarker/serialize@1/dist/serialize.es.min.js';
```

### CommonJS

You can also use npm. First, install the package via the command line.

```shell
npm i @kieranbarker/serialize
```

Then import the package.

```js
const { Serialize } = require('@kieranbarker/serialize');
```

### AMD

If you use RequireJS, SystemJS, or another AMD format, you can import Serialize with the `.amd` version.

```js
requirejs(['https://cdn.jsdelivr.net/npm/@kieranbarker/serialize@1/dist/serialize.amd.min.js'], function ({ Serialize }) {
  //...
});
```

## Creating a new instance

To create a new Serialize instance, simply instantiate the class using the `new` operator.

You pass in an [`HTMLFormElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement).

**NOTE: Each form field needs to have a `name` attribute.**

I'm using the [`document.forms`](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms) property throughout this documentation:

```js
const serialize = new Serialize(document.forms[0]);
```

But you can select a form any way you like:

```js
const form = document.querySelector('form');
const serialize = new Serialize(form);
```

## Instance methods

### string()

Serialize all form data into a query string.

**Parameters:** None.

**Returns:** {String} The serialized form data.

```js
document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new Serialize(this).string();
  console.log(data);
});
```

### array()

Serialize all form data into an array.

**Parameters:** None.

**Returns:** {Array} The serialized form data.

```js
document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new Serialize(this).array();
  console.log(data);
});
```

### object()

Serialize all form data into an object.

**Parameters:** None.

**Returns:** {Object} The serialized form data.


```js
document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new Serialize(this).object();
  console.log(data);
});
```

### json()

Serialize all form data into a JSON string.

**Parameters:** None.

**Returns:** {String} The serialized form data.


```js
document.forms[0].addEventListener('submit', function (event) {
  event.preventDefault();
  const data = new Serialize(this).json();
  console.log(data);
});
```
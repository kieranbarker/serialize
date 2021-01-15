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
<script src="https://cdn.jsdelivr.net/npm/serialize@1/dist/serialize.min.js"></script>
```

You can also [download the files directly from GitHub](https://github.com/kieranbarker/serialize/archive/main.zip).

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```html
<script src="path/to/serialize.min.js"></script>
```

### ES Module

Serialize also supports modern browsers and module bundlers (Rollup, Webpack, Snowpack, etc.) using the ES module `import` syntax. Use the `.es` version.

```js
import { Serialize } from 'https://cdn.jsdelivr.net/npm/serialize@1/dist/serialize.es.min.js';
```

### CommonJS

You can also use npm. First, install the package via the command line.

```shell
npm i serialize
```

Then import the package.

```js
const { Serialize } = require('serialize');
```

### AMD

If you use RequireJS, SystemJS, or another AMD format, you can import Serialize with the `.amd` version.

```js
requirejs(['https://cdn.jsdelivr.net/npm/serialize@1/dist/serialize.amd.min.js'], function ({ Serialize }) {
  //...
});
```

## Creating a new instance

To create a new Serialize instance, simply instantiate the class using the `new` operator.

You pass in an `HTMLFormElement`:

```js
// Get the first form on the page
const form = document.querySelector('form');

// Create a new Serialize instance
const serialize = new Serialize(form);
```

**NOTE: Each form field needs to have a `name` attribute.**

## Instance methods

### string()

Serialize all form data into a query string.

**Parameters:** None.

**Returns:** The serialized form data.

```js
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const queryString = new Serialize(this).string();
  console.log(queryString);
});
```

### array()

Serialize all form data into an array.

**Parameters:** None.

**Returns:** The serialized form data.

```js
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const arr = new Serialize(this).array();
  console.log(arr);
});
```

### object()

Serialize all form data into an object.

**Parameters:** None.

**Returns:** The serialized form data.


```js
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const obj = new Serialize(this).object();
  console.log(obj);
});
```

### json()

Serialize all form data into a JSON string.

**Parameters:** None.

**Returns:** The serialized form data.


```js
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const json = new Serialize(this).json();
  console.log(json);
});
```
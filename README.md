# Webpack/Babel Introduction

# What the heck is webpack?

Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

[Webpack Website](https://webpack.js.org/)


# What the heck is Babel?

Allows you to use "next generation" JavaScript without having to worry about browser, or node compatibility.

Examples:

ES6
```
const x = [1,2,3]

const y = [...x, 4]
```

Browser compatible javascript
```
var x = [1,2,3];
var y = [].concat(x, [4]);
```


ES6
```
const name = 'Tim';
const favoriteColor = 'Blue';

`${name}'s favorite color is ${favoriteColor}`
```

Browser compatible javascript
```
var name = 'Tim';
var favoriteColor = 'Blue';
"".concat(name, "'s favorite color is ").concat(favoriteColor);
```

ES6
````
import schedule from 'node-schedule';
```

Browser compatible javascript
```
const schedule = require('node-schedule');
```

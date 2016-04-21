#not-type-of
***
not-type-of is tool of type checking just reverse for [node-modules/is-type-of]. It makes conditionals more human-readable when coordination with [is-type-of]. 
 
##Installation

```shell
$ npm install not-type-of
```

##Example

```js
var not = require('not-type-of');
var is = require('is-type-of');

// base example from [is-type-of]
not.array([1]); // => false
not.primitive(true); // => false
not.primitive({}); // => true
not.generatorFunction(function * () {}); // => false
not.long(Math.pow(2, 33)); // => false
not.double(0); // => true


// example that not-type-of makes conditionals human-readable 

var obj0 = createObjWithRandomType();
var obj1 = createObjWithRandomType();
var obj2 = createObjWithRandomType();  

if (is.string(obj0) && not.string(obj1) && not.array(obj2)) {

    console.log('obj0 is string, obj1 not string and obj2 not array');

} else if (is.long(obj0) && not.double(obj1)) {

    console.log('obj0 is long and obj1 not double');

} else ... {
    ...
}


// create a obj with random type
function createObjWithRandomType() {
   ...
}

```

##Dependencies

- [is-type-of]

##Authors

- [LnsooXD](https://github.com/LnsooXD)

## License

- [MIT](http://spdx.org/licenses/MIT)

[node-modules/is-type-of]: https://github.com/node-modules/is-type-of#is-type-of
[is-type-of]: https://github.com/node-modules/is-type-of#is-type-of

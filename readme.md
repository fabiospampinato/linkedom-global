# LinkeDOM Global

Make Node a browser-like environment, by using [LinkeDOM](https://github.com/WebReflection/linkedom).

## Install

```sh
npm install --save linkedom-global
```

## Usage

Simply importing it will register browser-like globals:

```ts
import 'linkedom-global'; // Register globals using 'linkedom'
// import 'linkedom-global/cached'; // Register globals using 'linkedom/cached'
// import 'linkedom-global/worker'; // Register globals using 'linkedom/worker'

console.log ( typeof globalThis.window ); // => 'object'
console.log ( typeof globalThis.document ); // => 'object'
console.log ( typeof globalThis.navigator ); // => 'object'
```

## License

MIT © Fabio Spampinato

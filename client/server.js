//import { add, ping } from '../wasm/build/js/packages/kotlin-wasm-nodejs-example-wasm-js/kotlin/kotlin-wasm-nodejs-example-wasm-js.mjs';
import { add, ping } from './kotlin-wasm-nodejs-example-wasm-js.mjs';

console.log(ping());

const result = add(3, 4);
console.log(`add(3, 4) = ${result}`);

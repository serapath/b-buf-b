# b-buf-b
base-x to bytesbuffer to base-x (x=2,8,10,16,32,36,64)

https://www.npmjs.com/package/b-buf-b

https://serapath.github.io/b-buf-b/

# use
`npm install b-buf-b`
```js
const {
  base2string_to_bytebuffer,
  bytebuffer_to_base2string,
  base8string_to_bytebuffer,
  bytebuffer_to_base8string,
  base10input_to_bytebuffer,
  bytebuffer_to_base10bigint,
  base16string_to_bytebuffer,
  bytebuffer_to_base16string,
  base32string_to_bytebuffer,
  bytebuffer_to_base32string,
  base36string_to_bytebuffer,
  bytebuffer_to_base36string,
  base64string_to_bytebuffer,
  bytebuffer_to_base64string,
} = require('b-buf-b')

const randombytes = require('randombytes')

const ee = randombytes(7)
// BASE 2
const $b2 = bytebuffer_to_base2string(ee)
const $buf2 = base2string_to_bytebuffer($b2)
// BASE 8
const $b8 = bytebuffer_to_base8string(ee)
const $buf8 = base8string_to_bytebuffer($b8)
// BASE 10 (bigint)
const $b10 = bytebuffer_to_base10bigint(ee)
const $buf10 = base10input_to_bytebuffer($b10)
// BASE 16
const $b16 = bytebuffer_to_base16string(ee)
const $buf16 = base16string_to_bytebuffer($b16)
// BASE 32
const $b32 = bytebuffer_to_base32string(ee)
const $buf32 = base32string_to_bytebuffer($b32)
// BASE 36
const $b36 = bytebuffer_to_base36string(ee)
const $buf36 = base36string_to_bytebuffer($b36)
// BASE 64
const $b64 = bytebuffer_to_base64string(ee)
const $buf64 = base64string_to_bytebuffer($b64)
```
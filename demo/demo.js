const Buffer = require('safe-buffer').Buffer
const randombytes = require('randombytes')

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
} = require('..')

const results = []
const ee = randombytes(7)
// BASE 2
const $b2 = bytebuffer_to_base2string(ee)
const $buf2 = base2string_to_bytebuffer($b2)
results.push({$b2, $buf2, $eee2: ee })
// BASE 8
const $b8 = bytebuffer_to_base8string(ee)
const $buf8 = base8string_to_bytebuffer($b8)
results.push({$b8, $buf8, $eee8: ee })
// BASE 10 (bigint)
const $b10 = bytebuffer_to_base10bigint(ee)
const $buf10 = base10input_to_bytebuffer($b10)
results.push({$b10: `${$b10}`, $buf10, $eee10: ee })
// BASE 16
const $b16 = bytebuffer_to_base16string(ee)
const $buf16 = base16string_to_bytebuffer($b16)
results.push({$b16, $buf16, $eee16: ee})
// BASE 32
const $b32 = bytebuffer_to_base32string(ee)
const $buf32 = base32string_to_bytebuffer($b32)
results.push({$b32, $buf32, $eee32: ee})
// BASE 36
const $b36 = bytebuffer_to_base36string(ee)
const $buf36 = base36string_to_bytebuffer($b36)
results.push({$b36, $buf36, $eee36: ee})
// BASE 64
const $b64 = bytebuffer_to_base64string(ee)
const $buf64 = base64string_to_bytebuffer($b64)
results.push({$b64, $buf64, $eee64: ee})


if (typeof window) document.body.innerHTML = `<pre>${
  JSON.stringify(results, 0, 2)
}</pre>`
else console.log(results)
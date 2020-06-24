const Buffer = require('safe-buffer').Buffer
/******************************************************************************
  buf-base-buf
******************************************************************************/
module.exports = {
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
}
/******************************************************************************
  BASE 2
******************************************************************************/
function base2string_to_bytebuffer (base2string) {
  return Buffer.from(base2string.match(to8digits).map(base2_tohex).join(''), 'hex')
}
function bytebuffer_to_base2string (bytebuffer) {
  return Array.from(bytebuffer).map(byte2base2string).join('')
}
/******************************************************************************
  BASE 8
******************************************************************************/
function base8string_to_bytebuffer (base8string) {
  return Buffer.from(base8string.match(to3digits).map(base8_tohex).join(''), 'hex')
}
function bytebuffer_to_base8string (bytebuffer) {
  return Array.from(bytebuffer).map(byte2base8string).join('')
}
/******************************************************************************
  BASE 10
******************************************************************************/
function base10input_to_bytebuffer (base10input) {
  const b16 = BigInt(base10input).toString(16)
  return Buffer.from(b16.padStart(size(b16.length), '0'), 'hex') 
}
function bytebuffer_to_base10bigint (bytebuffer) {
  return BigInt(`0x${bytebuffer.toString('hex')}`)
}
/******************************************************************************
  BASE 16
******************************************************************************/
function base16string_to_bytebuffer (base16string) {
  return Buffer.from(base16string.toString('hex'), 'hex')
}
function bytebuffer_to_base16string (bytebuffer) {
  return bytebuffer.toString('hex')
}
/******************************************************************************
  BASE 32
******************************************************************************/
function base32string_to_bytebuffer (base32string) {
  return Buffer.from(base32string.match(to2digits).map(base32_toHex).join(''), 'hex')
}
function bytebuffer_to_base32string (bytebuffer) {
  return Array.from(bytebuffer).map(byte2base32string).join('')
}
/******************************************************************************
  BASE 36
******************************************************************************/
function base36string_to_bytebuffer (base36string) {
  return Buffer.from(base36string.match(to2digits).map(base36_toHex).join(''), 'hex')
}
function bytebuffer_to_base36string (bytebuffer) {
  return Array.from(bytebuffer).map(byte2base36string).join('')
}
/******************************************************************************
  BASE 64
******************************************************************************/
function base64string_to_bytebuffer (base64string) {
  return Buffer.from(base64string, 'base64')
}
function bytebuffer_to_base64string (bytebuffer) {
  return bytebuffer.toString('base64')
}
/******************************************************************************
  HELPER
******************************************************************************/
const size = len => len % 2 + len
const to2digits = RegExp(`.{1,2}`, 'g')
const to3digits = RegExp(`.{1,3}`, 'g')
const to8digits = RegExp(`.{1,8}`, 'g')
const zeropad2 = str => str.padStart(2, '0')
const zeropad3 = str => str.padStart(3, '0')
const zeropad8 = str => str.padStart(8, '0')
const num2hex = num => zeropad2(num.toString(16))
const base2_tohex   = base2  => num2hex(parseInt(base2, 2))
const base8_tohex   = base8  => num2hex(parseInt(base8, 8))
const base32_toHex  = base32 => num2hex(parseInt(base32, 32))
const base36_toHex  = base36 => num2hex(parseInt(base36, 36))
const byte2base2string  = byte => zeropad8(byte.toString(2))
const byte2base8string  = byte => zeropad3(byte.toString(8))
const byte2base32string = byte => zeropad2(byte.toString(32))
const byte2base36string = byte => zeropad2(byte.toString(36))

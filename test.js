const kit = require('./index')
const assert = require('assert')

function testBase64() {
  let rawStr = '你好 kit'
  let base64Str = '5L2g5aW9IGtpdA=='

  assert(base64Str === kit.base64.encode(rawStr), 'base64.encode')
  assert(rawStr === kit.base64.decode(base64Str), 'base64.decode')
}

function testMD5() {
  let rawStr = '你好 kit'
  let digistStr = '80eaa06272dc0a8b27b2045bc5ef14ae'
  assert(digistStr === kit.md5.digest(rawStr), 'md5.digest')
}

testBase64()
testMD5()

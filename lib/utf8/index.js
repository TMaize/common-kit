// js字符串转化为utf8字符串
// 浏览器可以直接使用 unescape(encodeURIComponent(str))
function utf16to8(string) {
  string = string.replace(/\x0d\x0a/g, '\x0a')
  var output = ''
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n)
    if (c < 128) {
      output += String.fromCharCode(c)
    } else if (c > 127 && c < 2048) {
      output += String.fromCharCode((c >> 6) | 192)
      output += String.fromCharCode((c & 63) | 128)
    } else {
      output += String.fromCharCode((c >> 12) | 224)
      output += String.fromCharCode(((c >> 6) & 63) | 128)
      output += String.fromCharCode((c & 63) | 128)
    }
  }
  return output
}

// utf8字符串转化为js字符串
function utf8to16(str) {
  let out, i, len, c
  let char2, char3
  out = ''
  len = str.length
  i = 0
  while (i < len) {
    c = str.charCodeAt(i++)
    switch (c >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        // 0xxxxxxx
        out += str.charAt(i - 1)
        break
      case 12:
      case 13:
        // 110x xxxx  10xx xxxx
        char2 = str.charCodeAt(i++)
        out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f))
        break
      case 14:
        // 1110 xxxx 10xx xxxx 10xx xxxx
        char2 = str.charCodeAt(i++)
        char3 = str.charCodeAt(i++)
        out += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0))
        break
    }
  }
  return out
}

module.exports = {
  utf16to8: utf16to8,
  utf8to16: utf8to16
}

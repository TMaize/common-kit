# common-kit

JavaScript 常用工具方法集合

[![NPM Description](https://nodei.co/npm/common-kit.png?downloads=true&stars=true)](https://npmjs.org/package/common-kit)

## 安装

浏览器

[https://unpkg.com/browse/common-kit/dist/kit.min.js](https://unpkg.com/browse/common-kit/dist/kit.min.js)

Nodejs

```sh
npm i common-kit -S

# import kit from 'common-kit/index'
# import base64 from 'common-kit/lib/base64/index'
```

## 方法

支持中文，和后端结果一致

```js
kit.base64.encode('你好 kit')
kit.base64.decode('5L2g5aW9IGtpdA==')
kit.md5.digist('你好 kit)
```

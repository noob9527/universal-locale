# universal locale
> get locale(language tag) from browser or system(nodejs)

[![Build Status](https://travis-ci.org/noob9527/universal-locale.svg?branch=master)](https://travis-ci.org/noob9527/universal-locale)
[![Coverage Status](https://coveralls.io/repos/github/noob9527/universal-locale/badge.svg?branch=master)](https://coveralls.io/github/noob9527/universal-locale?branch=master)

### installation
via npm
```
npm install universal-locale --save
```
via yarn
```
yarn add universal-locale
```
### getting started
```javascript
import getLocale from 'universal-locale';

console.log(getLocale()); // output language tag e.g. 'en-US'
```
### reference
- [Locale](https://en.wikipedia.org/wiki/Locale_(computer_software))
- [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag)

### license
MIT

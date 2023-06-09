'use strict'

import KTUtil from './util'
// DOCS: https://javascript.info/cookie

// Component Definition
const KTCookie = (function () {
  return {
    // returns the cookie with the given name,
    // or undefined if not found
    getCookie (name) {
      const matches = document.cookie.match(
        new RegExp(
          '(?:^|; )' +
            name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
            '=([^;]*)'
        )
      )
      return matches ? decodeURIComponent(matches[1]) : undefined
    },
    // Please note that a cookie value is encoded,
    // so getCookie uses a built-in decodeURIComponent function to decode it.
    setCookie (name, value, options) {
      if (!options) {
        options = {}
      }

      options = Object.assign({}, { path: '/' }, options)

      if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString()
      }

      let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value)

      for (const optionKey in options) {
        if (!options.hasOwnProperty(optionKey)) {
          continue
        }
        updatedCookie += '; ' + optionKey
        const optionValue = options[optionKey]
        if (optionValue !== true) {
          updatedCookie += '=' + optionValue
        }
      }

      document.cookie = updatedCookie
    },
    // To delete a cookie, we can call it with a negative expiration date:
    deleteCookie (name) {
      setCookie(name, '', {
        'max-age': -1,
      })
    },
  }
})()

// webpack support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = KTCookie
}

export default KTCookie

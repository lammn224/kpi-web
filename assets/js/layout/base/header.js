'use strict'

import KTUtil from "~/assets/js/components/util";

const KTLayoutHeader = (function () {
  // Private properties
  let _element
  let _elementForMobile
  let _object

  // Private functions

  // Get height
  const _getHeight = function () {
    let height = 0

    if (_element) {
      height = KTUtil.actualHeight(_element) + 1
    }

    return height
  }

  // Get height
  const _getHeightForMobile = function () {
    let height

    height = KTUtil.actualHeight(_elementForMobile)

    return height
  }

  // Public methods
  return {
    init (id, idForMobile) {
      _element = KTUtil.getById(id)
      _elementForMobile = KTUtil.getById(idForMobile)

      if (!_element) {
      }
    },

    isFixed () {
      return KTUtil.hasClass(KTUtil.getBody(), 'header-fixed')
    },

    isFixedForMobile () {
      return KTUtil.hasClass(KTUtil.getBody(), 'header-mobile-fixed')
    },

    getElement () {
      return _element
    },

    getElementForMobile () {
      return _elementForMobile
    },

    getHeader () {
      return _object
    },

    getHeight () {
      return _getHeight()
    },

    getHeightForMobile () {
      return _getHeightForMobile()
    },
  }
})()

export default KTLayoutHeader

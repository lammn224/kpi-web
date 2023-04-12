'use strict'

import KTUtil from "~/assets/js/components/util";

const KTLayoutSubheader = (function () {
  // Private properties
  let _element

  // Private functions
  const _getHeight = function () {
    let height = 0

    if (_element) {
      height = KTUtil.actualHeight(_element)
    }

    return height
  }

  // Public methods
  return {
    init (id) {
      _element = KTUtil.getById(id)

      if (!_element) {
      }
    },

    isFixed () {
      return KTUtil.hasClass(KTUtil.getBody(), 'subheader-fixed')
    },

    getElement () {
      return _element
    },

    getHeight () {
      return _getHeight()
    },
  }
})()

export default KTLayoutSubheader

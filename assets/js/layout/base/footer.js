'use strict'

const KTLayoutFooter = (function () {
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
    },

    getHeight () {
      return _getHeight()
    },

    getElement () {
      return _element
    },
  }
})()

export default KTLayoutFooter

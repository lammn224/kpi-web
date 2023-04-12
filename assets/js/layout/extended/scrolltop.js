'use strict'

import KTScrolltop from "~/assets/js/components/scrolltop";
import KTUtil from "~/assets/js/components/util";

const KTLayoutScrolltop = (function () {
  // Private properties
  let _element
  let _object

  // Private functions
  const _init = function () {
    _object = new KTScrolltop(_element, {
      offset: 300,
      speed: 600,
    })
  }

  // Public methods
  return {
    init (id) {
      _element = KTUtil.getById(id)

      if (!_element) {
        return
      }

      // Initialize
      _init()
    },

    getElement () {
      return _element
    },
  }
})()

export default KTLayoutScrolltop

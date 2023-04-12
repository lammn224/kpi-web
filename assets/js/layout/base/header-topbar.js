'use strict'

import KTToggle from "~/assets/js/components/toggle";
import KTUtil from "~/assets/js/components/util";

const KTLayoutHeaderTopbar = (function () {
  // Private properties
  let _toggleElement
  let _toggleObject

  // Private functions
  const _init = function () {
    _toggleObject = new KTToggle(_toggleElement, KTUtil.getBody(), {
      targetState: 'topbar-mobile-on',
      toggleState: 'active',
    })
  }

  // Public methods
  return {
    init (id) {
      _toggleElement = KTUtil.getById(id)

      if (!_toggleElement) {
        return
      }

      // Initialize
      _init()
    },

    getToggleElement () {
      return _toggleElement
    },
  }
})()

export default KTLayoutHeaderTopbar

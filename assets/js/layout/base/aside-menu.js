'use strict'

import KTMenu from "~/assets/js/components/menu";
import KTLayoutAside from "~/assets/js/layout/base/aside";
import KTUtil from "~/assets/js/components/util";

const KTLayoutAsideMenu = (function () {
  // Private properties
  let _element
  let _menuObject

  // Initialize
  const _init = function () {
    _menuObject = new KTMenu(_element, {
      // Submenu setup
      submenu: {
        desktop: 'accordion',
        tablet: 'accordion', // menu set to accordion in tablet mode
        mobile: 'accordion', // menu set to accordion in mobile mode
      },

      // Accordion setup
      accordion: {
        expandAll: false, // allow having multiple expanded accordions in the menu
      },
    })

    // Close aside offcanvas panel before page reload On tablet and mobile
    _menuObject.on('linkClick', function (menu) {
      KTLayoutAside.getOffcanvas().hide() // Hide offcanvas after general link click
    })
  }

  // Public methods
  return {
    init (id) {
      _element = KTUtil.getById(id)

      if (!_element) {
        return
      }

      // Initialize menu
      _init()
    },

    getElement () {
      return _element
    },

    getMenu () {
      return _menuObject
    },

    pauseDropdownHover (time) {
      if (_menuObject) {
        _menuObject.pauseDropdownHover(time)
      }
    },

    closeMobileOffcanvas () {
      if (_menuObject && KTUtil.isMobileDevice()) {
        _menuObject.hide()
      }
    },
  }
})()

export default KTLayoutAsideMenu

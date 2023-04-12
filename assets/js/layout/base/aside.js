'use strict'

import KTUtil from "~/assets/js/components/util";
import KTOffcanvas from "~/assets/js/components/offcanvas";

const KTLayoutAside = (function () {
  // Private properties
  let _body
  let _element
  let _asideMenuWrapperElement
  let _offcanvasObject

  // Private functions
  // Initialize
  const _init = function () {
    const offcanvasClass = KTUtil.hasClass(_element, 'aside-offcanvas-default')
      ? 'aside-offcanvas-default'
      : 'aside'

    // Initialize mobile aside offcanvas
    _offcanvasObject = new KTOffcanvas(_element, {
      baseClass: offcanvasClass,
      overlay: true,
      closeBy: 'kt_aside_close_btn',
      toggleBy: [
        'kt_aside_desktop_toggle',
        'kt_aside_tablet_and_mobile_toggle',
      ],
    })
  }

  const _initScroll = function () {
    KTUtil.scrollInit(_asideMenuWrapperElement, {
      disableForMobile: true,
      resetHeightOnDestroy: true,
      handleWindowResize: true,
      height () {
        let height = parseInt(KTUtil.getViewPort().height)

        height =
          height -
          (parseInt(KTUtil.css(_asideMenuWrapperElement, 'marginBottom')) +
            parseInt(KTUtil.css(_asideMenuWrapperElement, 'marginTop')))

        return height
      },
    })
  }

  // Public methods
  return {
    init (id) {
      _element = KTUtil.getById(id)
      _asideMenuWrapperElement = KTUtil.getById('kt_aside_menu_wrapper')
      _body = KTUtil.getBody()

      if (!_element) {
        return
      }

      // Initialize
      _init()
      _initScroll()
    },

    getElement () {
      return _element
    },

    getOffcanvas () {
      return _offcanvasObject
    },
  }
})()

export default KTLayoutAside

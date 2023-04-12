import objectPath from 'object-path'
import {
  ADD_BODY_CLASSNAME,
  REMOVE_BODY_CLASSNAME,
  ADD_CLASSNAME,
} from '~/store/htmlclass.module'

export default class HtmlClass {
  constructor(store) {
    this.store = store
  }

  config = null

  init(config) {
    if (typeof config !== 'undefined') {
      this.config = config
    }

    // init base layout
    this.initLayout()

    // init header and subheader menu
    this.initHeader()
    this.initSubheader()

    // init aside and aside menu
    this.initAside()

    // init footer
    this.initFooter()
  }

  /**
   * Init Layout
   */
  initLayout() {
    if (objectPath.has(this.config, 'self.body.class')) {
      const _selfBodyClass = objectPath
        .get(this.config, 'self.body.class')
        .toString()
      if (_selfBodyClass) {
        const bodyClasses = _selfBodyClass.split(' ')
        bodyClasses.forEach((cssClass) => {
          this.store.dispatch(
            `htmlclass.module/${ADD_BODY_CLASSNAME}`,
            cssClass
          )
        })
      }
    }

    const bgImage = objectPath.get(this.config, 'self.body.background-image')
    if (typeof bgImage !== 'undefined') {
      document.body.style.backgroundImage = `url(${bgImage})`
    }

    // Offcanvas directions
    this.store.dispatch(
      `htmlclass.module/${ADD_BODY_CLASSNAME}`,
      'quick-panel-right'
    )
    this.store.dispatch(
      `htmlclass.module/${ADD_BODY_CLASSNAME}`,
      'demo-panel-right'
    )
    this.store.dispatch(
      `htmlclass.module/${ADD_BODY_CLASSNAME}`,
      'offcanvas-right'
    )

    // Properly close mobile header menu
    this.store.dispatch(
      `htmlclass.module/${REMOVE_BODY_CLASSNAME}`,
      'header-menu-wrapper-on'
    )
  }

  /**
   * Init Header
   */
  initHeader() {
    // Fixed header
    if (objectPath.get(this.config, 'header.self.fixed.desktop')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'header-fixed'
      )
      this.store.dispatch(`htmlclass.module/${ADD_CLASSNAME}`, {
        position: 'header',
        className: 'header-fixed',
      })
    } else {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'header-static'
      )
    }

    if (objectPath.get(this.config, 'header.self.fixed.mobile')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'header-mobile-fixed'
      )
      this.store.dispatch(`htmlclass.module/${ADD_CLASSNAME}`, {
        position: 'header_mobile',
        className: 'header-mobile-fixed',
      })
    }

    if (objectPath.get(this.config, 'header.menu.self.display')) {
      this.store.dispatch(`htmlclass.module/${ADD_CLASSNAME}`, {
        position: 'header_menu',
        className: `header-menu-layout-${objectPath.get(
          this.config,
          'header.menu.self.layout'
        )}`,
      })

      // Menu
      if (objectPath.get(this.config, 'header.menu.self.root-arrow')) {
        this.store.dispatch(`htmlclass.module/${ADD_CLASSNAME}`, {
          position: 'header_menu',
          className: 'header-menu-root-arrow',
        })
      }
    }
  }

  /**
   * Init Subheader
   */
  initSubheader() {
    // Fixed content head
    if (
      objectPath.get(this.config, 'subheader.fixed') &&
      objectPath.get(this.config, 'header.self.fixed.desktop')
    ) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'subheader-fixed'
      )
    }

    if (objectPath.get(this.config, 'subheader.display')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'subheader-enabled'
      )
    }

    if (objectPath.has(this.config, 'subheader.style')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        `subheader-${objectPath.get(this.config, 'subheader.style')}`
      )
    }
  }

  /**
   * Init Aside
   */
  initAside() {
    // Reset aside class in body
    this.store.dispatch(
      `htmlclass.module/${REMOVE_BODY_CLASSNAME}`,
      'aside-enabled'
    )
    this.store.dispatch(
      `htmlclass.module/${REMOVE_BODY_CLASSNAME}`,
      'aside-fixed'
    )
    this.store.dispatch(
      `htmlclass.module/${REMOVE_BODY_CLASSNAME}`,
      'aside-static'
    )
    this.store.dispatch(
      `htmlclass.module/${REMOVE_BODY_CLASSNAME}`,
      'aside-minimize'
    )

    if (objectPath.get(this.config, 'aside.self.display') !== true) {
      return
    }

    // Add aside class enabled in body
    this.store.dispatch(
      `htmlclass.module/${ADD_BODY_CLASSNAME}`,
      'aside-enabled'
    )

    // Fixed Aside
    if (objectPath.get(this.config, 'aside.self.fixed')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'aside-fixed'
      )
      this.store.dispatch(`htmlclass.module/${ADD_CLASSNAME}`, {
        position: 'aside',
        className: 'aside-fixed',
      })
    } else {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'aside-static'
      )
    }

    // Default fixed
    if (objectPath.get(this.config, 'aside.self.minimize.default')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'aside-minimize'
      )
    }

    // Dropdown Submenu
    if (objectPath.get(this.config, 'aside.menu.dropdown')) {
      this.store.dispatch(`htmlclass.module/${ADD_CLASSNAME}`, {
        position: 'aside_menu',
        className: 'aside-menu-dropdown',
      })
    }
  }

  /**
   * Init Footer
   */
  initFooter() {
    // Fixed header
    if (objectPath.get(this.config, 'footer.fixed')) {
      this.store.dispatch(
        `htmlclass.module/${ADD_BODY_CLASSNAME}`,
        'footer-fixed'
      )
    }
  }
}

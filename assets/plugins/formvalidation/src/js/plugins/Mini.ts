/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import classSet from '../utils/classSet'
import Framework, { FrameworkOptions } from './Framework'
import { IconPlacedEvent } from './Icon'

// Support mini.css framework (https://minicss.org)
export default class Mini extends Framework {
  constructor(opts?: FrameworkOptions) {
    super(
      Object.assign(
        {},
        {
          formClass: 'fv-plugins-mini',
          messageClass: 'fv-help-block',
          rowInvalidClass: 'fv-invalid-row',
          rowPattern: /^(.*)col-(sm|md|lg|xl)(-offset)*-[0-9]+(.*)$/,
          rowSelector: '.row',
          rowValidClass: 'fv-valid-row',
        },
        opts
      )
    )
  }

  protected onIconPlaced(e: IconPlacedEvent): void {
    const type = e.element.getAttribute('type')
    const parent = e.element.parentElement
    if ('checkbox' === type || 'radio' === type) {
      // Place it after the container of checkbox/radio
      parent.parentElement.insertBefore(e.iconElement, parent.nextSibling)

      classSet(e.iconElement, {
        'fv-plugins-icon-check': true,
      })
    }
  }
}

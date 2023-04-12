import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from 'vee-validate'
import vi from 'vee-validate/dist/locale/vi.json'
import {
  required,
  email,
  max,
  min,
  confirmed,
  numeric,
  regex,
  ext,
} from 'vee-validate/dist/rules'

localize('vi', vi)

extend('required', required)
extend('email', email)
extend('max', max)
extend('min', min)
extend('confirmed', confirmed)
extend('numeric', numeric)
extend('regex', regex)
extend('ext', ext)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

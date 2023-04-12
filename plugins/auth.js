import axios from 'axios'
// import { defineAbility } from '@casl/ability'

export default function ({ $auth }, inject) {
  axios.interceptors.request.use((request) => {
    const token = $auth.strategy.token.get()
    if (token) {
      request.headers.common.Authorization = `${token}`
    }

    return request
  })

  inject('can', (checkRole) => {
    // const ability = defineAbility((can, cannot) => {
    //   $auth.user.role.permissions.forEach((p) => {
    //     can(p.action, p.object)
    //   })
    // })

    if (!checkRole) {
      return true
    }

    return checkRole.includes($auth.user.role)
  })
}

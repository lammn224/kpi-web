<template>
  <div>Hallo</div>
</template>

<script>
import { ADMIN } from '~/constants/role.constant'

export default {
  name: 'IndexPage',
  data() {
    return {}
  },

  head() {
    return {
      title: 'Home',
    }
  },
  methods: {
    ADMIN() {
      return ADMIN
    },
  },
}
</script>

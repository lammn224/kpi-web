<template>
  <!-- begin:: Aside -->
  <div id="kt_brand" ref="kt_brand" class="brand flex-column-auto">
    <div class="brand-logo">
      <router-link to="/">
        <img :src="siteLogo()" alt="Logo" />
      </router-link>
    </div>
    <div v-if="allowMinimize" class="brand-tools">
      <button
        id="kt_aside_toggle"
        ref="kt_aside_toggle"
        class="brand-toggle btn btn-sm px-0"
      >
        <span class="svg-icon svg-icon svg-icon-xl">
          <inline-svg
            class="svg-icon"
            src="assets/media/svg/icons/Navigation/Angle-double-left.svg"
          />
        </span>
      </button>
    </div>
  </div>
  <!-- end:: Aside -->
</template>

<script>
import { mapGetters } from 'vuex'
import objectPath from 'object-path'

export default {
  name: 'KTBrand',
  mounted() {},
  methods: {
    siteLogo() {
      const menuAsideLeftSkin = this.layoutConfig('brand.self.theme')
      // set brand logo
      const logoObject = this.layoutConfig('self.logo')

      let logo
      if (typeof logoObject === 'string') {
        logo = logoObject
      }
      if (typeof logoObject === 'object') {
        logo = objectPath.get(logoObject, menuAsideLeftSkin + '')
      }
      if (typeof logo === 'undefined') {
        const logos = this.layoutConfig('self.logo')
        logo = logos[Object.keys(logos)[0]]
      }
      return process.env.BASE_URL + logo
    },
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      layoutConfig: 'config.module/layoutConfig',
    }),

    allowMinimize() {
      return !!this.layoutConfig('aside.self.minimize.toggle')
    },
  },
}
</script>

<style lang="scss" scoped>
.aside-toggle {
  outline: none;
}
</style>

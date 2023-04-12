<template>
  <ul class="menu-nav">
    <component
      :is="menu.subMenus ? 'LeftParentMenu' : 'LeftSingleMenu'"
      v-for="(menu, index) in menuToDisplay"
      :key="index"
      :menu="menu"
    />
  </ul>
</template>

<script>
import menus from '~/config/menu.config'

export default {
  name: 'LeftMenu',
  computed: {
    menuToDisplay() {
      return this.getDisplayMenus(menus)
    },
  },
  methods: {
    getDisplayMenus(menus) {
      return menus.filter((item) => {
        if (item.subMenus) {
          item.subMenus = this.getDisplayMenus(item.subMenus)
          return item.subMenus.length > 0
        } else {
          // return this.$can(item.role)
          return item
        }
      })
    },
  },
}
</script>

<template>
  <li
    aria-haspopup="true"
    data-menu-toggle="hover"
    class="menu-item menu-item-submenu"
    :class="{ 'menu-item-open': isActive }"
  >
    <a href="#" class="menu-link menu-toggle">
      <i class="menu-icon" :class="[menu.icon]"></i>
      <span class="menu-text">{{ menu.title }}</span>
      <i class="menu-arrow"></i>
    </a>
    <div class="menu-submenu">
      <span class="menu-arrow"></span>
      <ul class="menu-subnav">
        <left-child-menu
          v-for="(subMenu, index) in menu.subMenus"
          :key="index"
          :menu="subMenu"
        />
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: 'LeftParentMenu',
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      let flag = false
      this.menu.subMenus.forEach((subItem) => {
        if (subItem.route === this.$nuxt.$route.path) {
          flag = true
        }
      })
      return flag
    },
  },
}
</script>

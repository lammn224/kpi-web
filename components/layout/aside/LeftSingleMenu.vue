<template>
  <router-link
    v-slot="{ href, navigate, isActive, isExactActive }"
    :to="menu.route"
    custom
  >
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item"
      :class="[
        isActive && 'menu-item-active',
        isExactActive && 'menu-item-active',
      ]"
    >
      <a :href="href" class="menu-link" @click="navigate">
        <i class="menu-icon" :class="[menu.icon]"></i>
        <span class="menu-text">{{ menu.title }}</span>
      </a>
    </li>
  </router-link>
</template>

<script>
export default {
  name: 'LeftSingleMenu',
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
}
</script>

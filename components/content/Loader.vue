<template>
  <!-- begin::Page loader -->
  <div class="page-loader page-loader-logo">
    <img alt="Logo" :src="logo" width="100" />
    <div class="spinner" :class="spinnerClass || 'spinner-primary'"></div>
  </div>
  <!-- end::Page Loader -->
</template>

<script>
export default {
  name: 'ContentLoader',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    logo: String,
    // eslint-disable-next-line vue/require-default-prop
    spinnerClass: String,
  },
}
</script>

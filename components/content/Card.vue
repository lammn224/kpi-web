<template>
  <div class="card card-custom gutter-b" :class="classes">
    <div v-if="hasTitleSlot || title" class="card-header" :class="headClass">
      <div class="card-title">
        <slot v-if="hasTitleSlot" name="title"></slot>
        <h3 v-if="!hasTitleSlot" class="card-label">
          {{ title }}
        </h3>
      </div>
      <div class="card-toolbar">
        <slot name="toolbar"></slot>
      </div>
    </div>
    <div
      class="card-body"
      :class="{
        bodyClass,
        'body-fit': bodyFit,
        'body-fluid': bodyFluid,
      }"
    >
      <slot name="body"></slot>
    </div>
    <div v-if="hasFootSlot" class="card-footer">
      <slot name="foot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KTCard',
  components: {},
  props: {
    /**
     * String title
     */
    title: {
      type: String,
      default: '',
    },
    /**
     * Set card head size. Eg. md, lg, sm, etc.
     */
    headSize: {
      type: String,
      default: 'sm',
    },
    /**
     * Set card to fluid
     */
    fluidHeight: Boolean,
    /**
     * Set card to fluid in half
     */
    fluidHalfHeight: Boolean,
    /**
     * Set overlay head
     */
    headOverlay: Boolean,
    /**
     * Set extra class for main card
     */
    cardClass: {
      type: String,
      default: '',
    },
    /**
     * Set extra class for card head
     */
    headClass: {
      type: String,
      default: '',
    },
    /**
     * Set extra class for card body
     */
    bodyClass: {
      type: String,
      default: '',
    },
    /**
     * Set card body to fit
     */
    bodyFit: Boolean,
    /**
     * Set card body to fluid
     */
    bodyFluid: Boolean,
    /**
     * Code examples
     */
    example: Boolean,
  },
  computed: {
    classes() {
      const cls = {
        'example example-compact': this.example,
        'height-fluid': this.fluidHeight,
        'height-fluid-half': this.fluidHalfHeight,
        'head-overlay': this.headOverlay,
      }

      cls[this.headSizeClass] = this.headSizeClass

      // append extra classes
      if (this.cardClass) {
        cls[this.cardClass] = true
      }

      return cls
    },
    hasTitleSlot() {
      return !!this.$slots.title
    },
    hasFootSlot() {
      return !!this.$slots.foot
    },
    headSizeClass() {
      if (this.headSize) {
        return `head-${this.headSize}`
      }
      return false
    },
  },
  methods: {},
}
</script>

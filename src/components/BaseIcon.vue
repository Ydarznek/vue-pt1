<template>
  <div>
    <div
      class="icon-wrapper"
      v-html="svg"
    />
    <slot />
  </div>
</template>

<script>
import feather from 'feather-icons'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  },
  computed: {
    svg () {
      return feather.icons[this.name].toSvg({
        class: 'icon',
        width: this.width,
        height: this.height
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, .4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  margin-right: 6px;

  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
</style>

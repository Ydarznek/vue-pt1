<template>
  <div>
    <button
      class="button"
      :class="buttonClass"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style scoped>
.button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  padding: 0 40px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  background: transparent;
  border: none;
  border-radius: 6px;
  transition: all .2s linear;
}
.button:hover {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19);
          transform: scale(1.02);

  -webkit-transform: scale(1.02);
}
.button:active {
  box-shadow: none;
          transform: scale(1);

  -webkit-transform: scale(1);
}
.button:focus {
  outline: 0;
}
.button.-fill-gradient {
  color: #fff;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
.button:disabled {
  background: #eee;
  box-shadow: none;
          transform: scale(1);

  -webkit-transform: scale(1);
}
.button + .button {
  margin-left: 1em;
}
.button.-fill-gray {
  color: #fff;
  background: rgba(0, 0, 0, .5);
}
.button.-size-small {
  height: 32px;
}
.button.-icon-right {
  padding: 0 20px;
  text-align: left;
}
.button.-icon-right > .icon {
  margin-left: 10px;
}
.button.-icon-left {
  padding: 0 20px;
  text-align: right;
}
.button.-icon-left > .icon {
  margin-right: 10px;
}
.button.-icon-center {
  padding: 0 20px;
}
</style>

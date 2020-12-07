export const formFieldMixin = {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    value: { type: [String, Number], required: false, default: '' }

  },

  methods: {
    updateValue (event) {
      this.$emit('input', event.target.value)
    }
  }
}

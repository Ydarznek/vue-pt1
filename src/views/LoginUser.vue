<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="login">
      <BaseInput
        v-model="email"
        label="Email"
        name="email"
        value
        class="field"
        :class="{ error: $v.email.$error }"
        @blur="$v.email.$touch()"
      />

      <template v-if="$v.email.$error">
        <p
          v-if="!$v.email.required"
          class="errorMessage"
        >
          Email is required.
        </p>
        <p
          v-if="!$v.email.email"
          class="errorMessage"
        >
          Invalid email
        </p>
      </template>

      <BaseInput
        v-model="password"
        label="Password"
        type="password"
        name="password"
        value
        class="field"
        :class="{ error: $v.password.$error }"
        @blur="$v.password.$touch()"
      />

      <template v-if="$v.password.$error">
        <p
          v-if="!$v.password.required"
          class="errorMessage"
        >
          Password is required.
        </p>
        <p
          v-if="!$v.password.minLength"
          class="errorMessage"
        >
          Min length is {{ length }}
        </p>
      </template>

      <BaseButton
        type="submit"
        button-class="-fill-gradient"
        :disabled="$v.$anyError"
      >
        Login
      </BaseButton>
      <p
        v-if="$v.$anyError"
        class="errorMessage"
      >
        Please fill out the required field(s).
      </p>
      <p
        v-if="error"
        class="errorMessage"
      >
        {{ error }}
      </p>

      <p class="text">
        Don't have an account? <router-link :to="{name: 'register'}">
          Register
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

const length = 4

export default {
  length,
  data () {
    this.length = length
    return {
      name: '',
      email: '',
      password: '',
      error: null
    }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(length) }
  },
  methods: {
    login () {
      this.$v.$touch()
      this.$store
        .dispatch('user/login', {
          email: this.email,
          password: this.password
        })
        .then(() => { this.$router.push({ name: 'list' }) })
        .catch(err => {
          this.error = err.response.data
        })
    }
  }

}
</script>

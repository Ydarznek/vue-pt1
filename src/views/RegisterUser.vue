<template>
  <div class="register">
    <h1>Registration</h1>

    <form @submit.prevent="register">
      <BaseInput
        v-model="name"
        label="Name"
        type="text"
        name="name"
        value
        class="field"
        :class="{ error: $v.name.$error }"
        @blur="$v.name.$touch()"
      />

      <template v-if="$v.name.$error">
        <p
          v-if="!$v.name.required"
          class="errorMessage"
        >
          Name is required.
        </p>
        <p
          v-if="!$v.name.minLength"
          class="errorMessage"
        >
          Min length is {{ length }}
        </p>
      </template>

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
        Register
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
        Already have an account? <router-link :to="{name: 'login'}">
          Login
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
    name: { required, minLength: minLength(length) },
    email: { required, email },
    password: { required, minLength: minLength(length) }
  },
  methods: {
    register () {
      this.$v.$touch()
      this.$store.dispatch('user/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(() => {
        this.$router.push({ name: 'list' })
      }).catch(err => {
        this.error = err.response.data
      })
    }
  }
}
</script>

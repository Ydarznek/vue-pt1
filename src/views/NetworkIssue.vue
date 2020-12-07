<template>
  <div>
    <h1>Uh-Oh!</h1>
    <p>
      Looks like you're experiencing some network issue, please click the back button and try again.
    </p>
    <router-link :to="{name: 'list'}">
      Or go back to the home page
    </router-link>
  </div>
</template>

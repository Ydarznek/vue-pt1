<template>
  <div class="nav">
    <router-link
      to="/"
      class="brand"
    >
      Events
    </router-link>
    <nav>
      <router-link :to="{name: 'list'}">
        List
      </router-link> |
      <router-link :to="{name: 'create'}">
        Create
      </router-link>
    </nav>
  </div>
</template>

 <style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  color: #39b982;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  font-weight: 700;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, .5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>

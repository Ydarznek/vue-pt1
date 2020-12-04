<template>
  <router-link
    class="event-link"
    :to="{name: 'event-show', params: {id: event.id}}"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">
        {{ event.title }}
      </h4>
      <BaseIcon name="users">
        {{ event.attendees ? event.attendees.length : 0 }} attendees
      </BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    event: {
      type: [Object],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all .2s linear;
  cursor: pointer;
}
.event-card:hover {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, .2), 0 1px 15px 0 rgba(0, 0, 0, .19);
  transform: scale(1.01);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  font-weight: 100;
  text-decoration: none;
}
</style>

<template>
  <div>
    <h1>Event List for {{ user.user.name }}</h1>
    <EventCard
      v-for="event in event.events"
      :key="event.id"
      :event="event"
    />
    <template v-if="page !== 1">
      <router-link
        :to="{name: 'list', query: {page: page - 1}}"
        rel="prev"
      >
        Prev
      </router-link>
    </template>
    <template v-if="hasNextPage">
      <router-link
        :to="{name: 'list', query: {page: page + 1}}"
        rel="next"
      >
        Next
      </router-link>
    </template>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  data: function () {
    return { pageSize: 3 }
  },
  computed: {
    page () {
      return parseInt(this.$route.query.page) || 1
    },

    hasNextPage () {
      return this.event.eventsTotal > this.page * this.pageSize
    },

    ...mapState(['event', 'user'])
  },
  created () {
    this.$store.dispatch('event/fetchEvents', {
      perPage: this.pageSize,
      page: this.page
    })
  }
}

</script>

<style lang="scss">

</style>

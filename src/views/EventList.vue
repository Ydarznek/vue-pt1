<template>
  <div>
    <h1>Event List</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  components: { EventCard },
  data () {
    return {
      events: []
    }
  },
  created () {
    EventService.getEvents()
      .then((r) => {
        this.events = r.data.events
      })
      .catch(error => console.log('There was an error: ' + error.response))
  }
}

</script>

<style lang="scss">

</style>

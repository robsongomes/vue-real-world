<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventCard from '@/views/EventCard'
import EventService from '@/services/EventService'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventService.getEvents()
      .then(res => {
        this.events = res.data
      })
      .catch(error => {
        console.log('There was an error:', error)
      })
  }
}
</script>

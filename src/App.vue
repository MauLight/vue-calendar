<template>
  <div id="app" class="bg-[#6e6e6e] flex-col">
    <div id="calendar-week" class="container flex flex-col justify-center items-center h-screen">
      <CalendarWeek />
      <CalendarEntry />
    </div>
    <div id="calendar-entry">

    </div>
  </div>
</template>

<script>
import CalendarEntry from './components/CalendarEntry.vue';
import CalendarWeek from './components/CalendarWeek.vue';

export default {
  name: 'App',
  components: { CalendarWeek, CalendarEntry }
}
</script>
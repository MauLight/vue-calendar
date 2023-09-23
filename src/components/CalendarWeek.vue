<template>
    <div id="calendar-week" class="container mb-[50px]">
        <div class="p-0 flex justify-center gap-x-[1px]">
            <CalendarDay v-for="day in sharedState.data" :key="day.id" :day="day" />
        </div>
    </div>
</template>

<script>

import { store } from '../store'
import CalendarDay from './CalendarDay.vue'

export default {
    name: 'CalendarWeek',
    data() {
        return {
            sharedState: store.state
        }
    },
    components: {
        CalendarDay
    }
}

</script>
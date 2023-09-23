<template>
    <div
        class="bg-[#4a4a4a] text-[#fff] border-l-[#8f8f8f] border-b-[#8f8f8f] text-[12px] cursor-pointer hover:bg-[#2c2c2c] transition-color duration-300 w-[180px]" @click="setActiveDay(day.id)">
        <div class="text-center bg-[#333333] text-[#fff] p-[10px] uppercase tracking-[1px] text-[12px] font-semibold">{{
            day.abbvTitle }}</div>
        <div class="p-[10px] [&>*:last-child]:border-r-[#8f8f8f]">
            <div class="">{{ day.id }}</div>
            <CalendarEvent v-for="(e, i) in day.events" :key="i" :event="e" :day="day" />
        </div>
    </div>
</template>


<script>
import { store } from '../store';
import CalendarEvent from './CalendarEvent.vue'

export default {
    name: 'CalendarDay',
    props: ['day'],
    components: {
        CalendarEvent
    },
    methods: {
        setActiveDay(dayId) {
            store.setActiveDay(dayId)
        }
    }
}

</script>
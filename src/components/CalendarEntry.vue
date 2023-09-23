<template>
    <div id="calendar-entry" class="px-10 py-7 rounded-[15px] bg-white">
        <div class="flex flex-col gap-y-2 justify-center items-center">
            <input type="text" placeholder="New Event" class="border-0 border-b-2 h-8 px-2" />
            <p class="text-[#42b883]">Day of event: <span class="font-bold">{{ titleOfActiveDay }}</span></p>
            <a class="py-2 px-4 border border-[#42b883] mt-2 text-center w-1/2 hover:bg-[#42b883] transition-color duration-200 text-[#42b883] hover:text-[white]">Submit</a>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'CalendarEntry',
    computed: {
        titleOfActiveDay() {
            return store.getActiveDay().fullTitle
        }
    }
}

</script>
<template>
    <div id="calendar-entry" class="px-10 py-7 rounded-[15px] bg-white">
        <div class="flex flex-col gap-y-2 justify-center items-center">
            <p class="text-[#dc2626] text-[13px]" v-if="error">Please type your reminder before submission.</p>
            <input type="text" placeholder="New Event" class="border-0 border-b-2 h-8 px-2" v-model="inputEntry" required />
            <p class="text-[#42b883]">Day of event: <span class="font-bold">{{ titleOfActiveDay }}</span></p>
            <a
                @click="SubmitEvent(inputEntry)"
                class="py-2 px-4 border border-[#42b883] mt-2 text-center w-1/2 hover:bg-[#42b883] transition-color duration-200 text-[#42b883] hover:text-[white]">Submit</a>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'CalendarEntry',
    data() {
        return {
            inputEntry: "",
            error: false
        }
    },
    methods: {
        SubmitEvent(input) {
            if(this.error === true) this.error = false
            if(input === '') return this.error = true

            store.submitEvent(input),
            this.inputEntry = ''
        }
    },
    computed: {
        titleOfActiveDay() {
            return store.getActiveDay().fullTitle
        }
    }
}

</script>
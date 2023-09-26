<template>
    <div class="my-[6px] d-block text-[#4c4c4c] p-[5px]" :style="getEventBackgroundColor">
        <div class="flex flex-col justify-center items-center" v-if="!event.edit">
            <span class="d-block">{{ event.details }}</span>
            <div class="text-center flex gap-x-2">
                <i class="fa fa-pencil-square edit-icon" @click="editEvent(event.details, day.id)"></i>
                <i class="fa fa-trash-o delete-icon"></i>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center" v-else>
            <input class="px-2" type="text" :placeholder="event.details" v-model="newEventDetails" />
            <div class="text-center flex gap-x-2">
                <i class="fa fa-check" @click="updateEvent(day.id, event.details, newEventDetails)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store'

export default {
    name: 'CalendarEvent',
    props: ['event', 'day'],
    data() {
        return {
            newEventDetails: ''
        }
    },
    computed: {
        getEventBackgroundColor() {
            const colors = ['#FF9999', '#85D6FF', '#99FF99']
            let randomColor = colors[Math.floor(Math.random() * colors.length)]
            return `background-color: ${randomColor}`
        }
    },
    methods: {
        editEvent(details, id) {
            store.editEvent(details, id)
        },
        updateEvent(id, oldDetails, newDetails) {
            if(newDetails === '') newDetails = oldDetails
            store.updateEvent(id, oldDetails, newDetails)
            this.newEventDetails = ''
        }
    }
}

</script>
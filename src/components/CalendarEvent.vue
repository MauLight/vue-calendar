<template>
    <div class="my-[6px] d-block text-[#4c4c4c] p-[5px]" :style="getEventBackgroundColor">
        <div class="flex flex-col justify-center items-center">
            <span class="d-block">{{ event.details }}</span>
            <div class="text-center flex gap-x-2">
                <i class="fa fa-pencil-square edit-icon"></i>
                <i class="fa fa-trash-o delete-icon"></i>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CalendarEvent',
    props: ['event', 'day'],
    computed: {
        getEventBackgroundColor() {
            const colors = ['#FF9999', '#85D6FF', '#99FF99']
            let randomColor = colors[Math.floor(Math.random() * colors.length)]
            return `background-color: ${randomColor}`
        }
    }
}

</script>
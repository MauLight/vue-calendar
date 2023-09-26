import { reactive } from 'vue'
import { seedData } from './seed.js'

export const store = {
    state: {
        data: reactive(seedData)
    },
    getActiveDay() {
        return this.state.data.find(day => day.active)
    },
    setActiveDay(dayId) {
        this.state.data.map(dayObj => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
        })
    },
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay()
        activeDay.events.push({details: eventDetails, edit: false})
    },
    getEvent(dayId, eventDetails) {
        const dayObj = this.state.data.find(day => day.id === dayId)
        return dayObj.events.find(event => event.details === eventDetails)
    },
    editEvent(eventDetails, dayId) {
        this.resetEditOfAllElements()
        const eventObj = this.getEvent(dayId, eventDetails)
        eventObj.edit = true
    },
    resetEditOfAllElements() {
        this.state.data.map(dayObj => {
            dayObj.events.map(event => event.edit = false)
        })
    },
    updateEvent(id, oldDetails, newDetails) {
        const eventObj = this.getEvent(id, oldDetails)
        eventObj.details = newDetails
        eventObj.edit = false
    }
}

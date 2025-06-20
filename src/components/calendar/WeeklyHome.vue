<template>
    <div class="calendar-wrapper">
        <v-calendar
            view="weekly"
            :rows="1"
            v-model="date"
            :attributes="attributes"
        >
            <template #day-content="{ day }">
                <div
                    class="custom-day-content"
                    :class="{ 'is-selected': isSelected(day.date) }"
                >
                    <div class="text-xl font-semibold">{{ day.day }}</div>
                    <span class="day-label">{{
                        getWeekdayName(day.weekday)
                    }}</span>
                    <div class="meal-icons">
                        <span>🍽️</span>
                        <span>🍎</span>
                        <span>🍲</span>
                    </div>
                </div>
            </template>
        </v-calendar>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    const date = ref(null)

    const selectedDate = ref(new Date())

    const isSelected = (date) =>
        date.toDateString() === selectedDate.value.toDateString()

    const getWeekdayName = (weekday) => {
        const names = [
            'sunday',
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
        ]
        return names[weekday - 1]
    }

    const attributes = ref([])
</script>

<style>
    .vc-container {
        max-width: 100%;
        border: none !important;
        color: var(--color-text) !important;
    }

    .vc-header,
    .vc-weekdays {
        display: none !important; /* Esconde o cabeçalho do calendário */
    }

    .vc-weeks {
        overflow: auto;
    }

    .custom-day-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
</style>

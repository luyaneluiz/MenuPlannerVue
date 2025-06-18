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
                    <span class="day-number">{{ day.day }}</span>
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

    const isSelected = (date) => date.toDateString() === selectedDate.value.toDateString()

    const getWeekdayName = (weekday) => {
        const names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
        return names[weekday - 1]
    }

    const attributes = ref([])
</script>

<style scoped>
    .calendar-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .week-container {
        display: flex;
        justify-content: center;
        gap: 16px; /* Espaçamento entre os dias */
        margin-bottom: 24px;
    }

    .day-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-radius: 50%; /* Faz o fundo ficar redondo */
        width: 70px;
        height: 70px;
        justify-content: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    /* Estilo para o dia selecionado */
    .day-item.selected {
        background-color: #e8f5e9; /* Um verde claro, similar ao da imagem */
        color: #333;
    }

    .day-number {
        font-size: 1.5rem; /* 24px */
        font-weight: 500;
    }

    .day-label {
        font-size: 0.875rem; /* 14px */
        color: #666;
        margin-bottom: 4px;
    }

    .day-item.selected .day-label {
        color: #333;
    }

    .meal-icons {
        display: flex;
        gap: 4px;
        font-size: 0.75rem; /* 12px */
        filter: grayscale(80%);
        opacity: 0.7;
    }

    .day-item.selected .meal-icons {
        filter: grayscale(0%);
        opacity: 1;
    }

    .edit-button {
        background-color: #f7b781; /* Laranja similar ao da imagem */
        color: white;
        border: none;
        border-radius: 9999px; /* Totalmente arredondado */
        padding: 12px 60px;
        font-size: 1rem; /* 16px */
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .edit-button:hover {
        background-color: #f5a66a;
    }
</style>

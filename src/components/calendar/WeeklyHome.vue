<template>
    <div class="calendar-wrapper">
        <v-calendar
            ref="calendar"
            :rows="1"
            v-model="selectedDate"
            style="display: none"
            is-dark="system"
            v-slot="{ pages }"
        >
            <div class="week-container" v-if="pages.length > 0">
                <div
                    v-for="day in getFiveDays(pages[0].days)"
                    :key="day.id"
                    class="day-item"
                    :class="{ selected: isSelected(day.date) }"
                    @click="selectDay(day.date)"
                >
                    <span class="day-number">{{ day.day }}</span>
                    <span class="day-label">{{
                        day.weekdayLabel.toLowerCase()
                    }}</span>
                    <div class="meal-icons">
                        <span>🍽️</span>
                        <span>🍎</span>
                        <span>🍲</span>
                    </div>
                </div>
            </div>
        </v-calendar>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue'

    // 'ref' para o v-calendar para podermos chamar métodos nele se precisarmos
    const calendar = ref(null)

    // Armazena a data que está atualmente selecionada
    const selectedDate = ref(new Date())

    // Função para verificar se o dia do loop é o dia selecionado
    const isSelected = (date) => {
        return date.toDateString() === selectedDate.value.toDateString()
    }

    // Função para atualizar a data selecionada ao clicar
    const selectDay = (date) => {
        selectedDate.value = date
    }

    // Função para pegar apenas 5 dias da semana, como no seu exemplo
    const getFiveDays = (days) => {
        // O v-calendar por padrão gera 7 dias. Aqui pegamos os 5 primeiros.
        return days.slice(0, 5)
    }
</script>

<style scoped>
    .calendar-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family:
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 20px;
        max-width: 100%;
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

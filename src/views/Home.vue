<script>
    import WeeklyPlanner from '../components/cards/WeeklyPlanner.vue'
    import Statistics from '../components/cards/Statistics.vue'

    export default {
        name: 'Home',
        components: {
            Statistics,
            WeeklyPlanner,
        },
    }
</script>

<template>
    <div class="flex flex-col gap-5 px-5 py-3.5">
        <WeeklyPlanner />
        <Statistics />
    </div>
</template>

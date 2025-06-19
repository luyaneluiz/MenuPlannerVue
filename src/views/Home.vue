<script>
    import WeeklyPlanner from '../components/cards/WeeklyPlanner.vue'
    import Statistics from '../components/cards/Statistics.vue'
    import Recommendations from '../components/cards/Recommendations.vue'

    export default {
        name: 'Home',
        components: {
            Statistics,
            WeeklyPlanner,
            Recommendations,
        },
    }
</script>

<template>
    <div class="flex flex-col gap-5 px-5 py-3.5">
        <WeeklyPlanner />
        <Statistics />
        <Recommendations />
    </div>
</template>

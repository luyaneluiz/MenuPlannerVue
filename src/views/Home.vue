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
    <div class="flex flex-col gap-5">
        <h1 class="font-bold">Hello, Maria!</h1>

        <div class="flex flex-col md:flex-row gap-6">
            <WeeklyPlanner />

            <div class="flex flex-col gap-6 w-full overflow-hidden">
                <div class="grid md:grid-cols-2 gap-6">
                    <Statistics />
                    <Statistics />
                </div>

                <Recommendations />
            </div>
        </div>

    </div>
</template>

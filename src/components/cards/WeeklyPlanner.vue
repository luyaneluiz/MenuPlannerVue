<script>
    import { Icon } from '@iconify/vue'
    import WeeklyHome from '../calendar/WeeklyHome.vue'

    export default {
        name: 'WeeklyPlanner',
        components: {
            Icon,
            WeeklyHome,
        },
    }
</script>

<template>
    <section class="card">
        <h1>Your weekly meal planner</h1>

        <WeeklyHome />

        <button>Edit</button>
    </section>
</template>

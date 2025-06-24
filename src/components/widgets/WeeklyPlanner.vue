<script>
    import { Icon } from '@iconify/vue'
    import WeeklyHome from '../calendar/WeeklyHome.vue'
    import WidgetCard from '../common/WidgetCard.vue'

    export default {
        name: 'WeeklyPlanner',
        components: {
            Icon,
            WeeklyHome,
            WidgetCard,
        },
    }
</script>

<template>
    <WidgetCard title="Your weekly meal planner">
        <WeeklyHome />

        <button class="md:hidden">Edit</button>
    </WidgetCard>
</template>

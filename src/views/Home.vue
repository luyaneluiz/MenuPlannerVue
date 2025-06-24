<script>
    import WeeklyPlanner from '../components/cards/WeeklyPlanner.vue'
    import Statistics from '../components/cards/Statistics.vue'
    import Recommendations from '../components/cards/Recommendations.vue'
    import WidgetCard from '../components/common/WidgetCard.vue'
    import { Icon } from '@iconify/vue'

    export default {
        name: 'Home',
        components: {
            Statistics,
            WeeklyPlanner,
            Recommendations,
            Icon,
            WidgetCard,
        },
    }
</script>

<template>
    <div class="flex flex-col gap-5">
        <h1 class="font-bold">Hello, Maria!</h1>

        <div class="flex flex-col gap-6 md:flex-row">
            <WeeklyPlanner />

            <div class="flex w-full flex-col gap-6 overflow-hidden">
                <div class="grid gap-6 md:grid-cols-2">
                    <Statistics />

                    <WidgetCard title="Your grocery list">
                        <template #headerAction>
                            <Icon icon="codicon:share" width="16" />
                        </template>
                    </WidgetCard>
                </div>

                <Recommendations />
            </div>
        </div>
    </div>
</template>

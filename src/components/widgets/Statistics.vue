<script>
    import { Icon } from '@iconify/vue'
    import WidgetCard from '../common/WidgetCard.vue'

    export default {
        name: 'Statistics',
        components: {
            Icon,
            WidgetCard,
        },
    }
</script>

<template>
    <WidgetCard title="Your statistics">
        <div class="flex justify-around">
            <div class="flex flex-col items-center gap-1">
                <div class="icon-background">
                    <Icon icon="icon-park-outline:fire" width="18" />
                </div>
                <span>Calories</span>
                <h3>42</h3>
            </div>

            <div class="flex flex-col items-center gap-1">
                <div class="icon-background">
                    <Icon icon="icon-park-outline:fire" width="18" />
                </div>
                <span>Carbs</span>
                <h3>128</h3>
            </div>

            <div class="flex flex-col items-center gap-1">
                <div class="icon-background">
                    <Icon icon="icon-park-outline:fire" width="18" />
                </div>
                <span>Fat</span>
                <h3>7</h3>
            </div>

            <div class="flex flex-col items-center gap-1">
                <div class="icon-background">
                    <Icon icon="icon-park-outline:fire" width="18" />
                </div>
                <span>Protein</span>
                <h3>7</h3>
            </div>
        </div>
    </WidgetCard>
</template>

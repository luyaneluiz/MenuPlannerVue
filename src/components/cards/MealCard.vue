<script lang="ts">
    import { Icon } from '@iconify/vue'

    export default {
        name: 'MealCard',
        components: { Icon },
        props: {
            meal: {
                title: {
                    type: String,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                time: {
                    type: String,
                    required: true,
                },
                calories: {
                    type: Number,
                    required: true,
                },
            },
        },
    }
</script>

<template>
    <div class="flex w-full items-center gap-3 p-1.5">
        <img
            :src="meal.image"
            alt="Recipe image"
            class="h-16 w-20 rounded-md object-cover"
        />

        <div class="flex w-full flex-col items-start justify-center gap-2">
            <p class="line-clamp-2 font-semibold text-ellipsis">
                {{ meal.title }}
            </p>

            <div class="flex items-center gap-1">
                <span>{{ meal.time }}</span>
                <div class="bg-text h-0.5 w-0.5 rounded-full"></div>
                <span>{{ meal.calories }} kcal</span>
            </div>
        </div>

        <a
            class="flex h-8 items-center justify-center rounded-full px-2.5 py-1 text-base"
        >
            <Icon icon="qlementine-icons:menu-dots-16" width="16" />
        </a>
    </div>
</template>

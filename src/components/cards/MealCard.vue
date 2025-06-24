<script lang="ts">
    import { Icon } from '@iconify/vue'

    export default {
        name: 'MealCard',
        components: { Icon },
        props: {
            image: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            tag: {
                type: String,
                default: 'recipe',
            },
            time: {
                type: String,
                default: '30 mins',
            },
            calories: {
                type: Number,
                default: 0,
            },
        },
    }
</script>

<template>
    <div class="flex w-full items-center gap-3 p-1.5">
        <img
            :src="image"
            alt="Recipe image"
            class="h-16 w-20 rounded-md object-cover"
        />

        <div class="flex w-full flex-col items-start justify-center gap-2">
            <p class="line-clamp-2 font-semibold text-ellipsis">
                {{ title }}
            </p>

            <div class="flex items-center gap-1">
                <span>{{ time }}</span>
                <div class="bg-text h-0.5 w-0.5 rounded-full"></div>
                <span>{{ calories }} kcal</span>
            </div>
        </div>

        <a
            class="flex h-8 items-center justify-center rounded-full px-2.5 py-1 text-base"
        >
            <Icon icon="qlementine-icons:menu-dots-16" width="16" />
        </a>
    </div>
</template>

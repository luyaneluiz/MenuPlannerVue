<script lang="ts">
    import { Icon } from '@iconify/vue'

    export default {
        name: 'RecipeCardList',
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
            class="h-20 w-20 rounded-md object-cover"
        />

        <div class="flex w-full flex-col items-start justify-center gap-2">
            <p class="line-clamp-2 font-semibold text-ellipsis">
                {{ title }}
            </p>

            <span class="bg-primary-hover rounded-2xl px-2 py-0.5">{{
                tag
            }}</span>

            <div class="flex items-center gap-1">
                <span>{{ time }}</span>
                <div class="bg-text h-0.5 w-0.5 rounded-full"></div>
                <span>{{ calories }} kcal</span>
            </div>
        </div>

        <button
            class="flex h-8 items-center justify-center rounded-full px-2.5 py-1 text-base"
        >
            <Icon icon="lucide:plus" width="16" />
            Add
        </button>
    </div>
</template>

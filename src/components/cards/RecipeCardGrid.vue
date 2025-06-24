<script lang="ts">
    import { Icon } from '@iconify/vue'

    export default {
        name: 'RecipeCardGrid',
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
    <div class="flex w-40 flex-col gap-2 p-1.5">
        <img
            :src="image"
            alt="Recipe image"
            class="h-32 w-full overflow-hidden rounded-md object-cover"
        />

        <div class="flex h-8 w-full items-center">
            <p class="line-clamp-2 font-semibold text-ellipsis">{{ title }}</p>
        </div>

        <div class="flex items-center justify-between text-xs text-gray-500">
            <div class="flex flex-col items-start justify-center gap-2">
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
                class="flex h-8 w-8 items-center justify-center rounded-full p-0"
            >
                <Icon icon="lucide:plus" width="16" />
            </button>
        </div>
    </div>
</template>

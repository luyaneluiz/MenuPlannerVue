<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            default: '',
        },
    })
</script>

<template>
    <section class="flex w-full flex-col gap-4 rounded-sm bg-white p-3.5">
        <header v-if="title" class="flex items-center justify-between">
            <h1>{{ title }}</h1>

            <slot v-if="$slots.headerAction" name="headerAction" />
        </header>

        <slot />
    </section>
</template>

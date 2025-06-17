<script lang="ts">
    import { Icon } from '@iconify/vue'

    export default {
        name: 'NavigationButton',
        components: { Icon },
        props: {
            icon: { type: String, required: true },
            label: { type: String, required: true },
            redirectTo: { type: String, required: true },
        },
    }
</script>

<template>
    <router-link
        class="text-text-light router-link-active:text-secondary flex w-[70px] flex-col items-center bg-transparent"
        :to="redirectTo"
    >
        <Icon :icon="icon" width="24" />
        <span class="text-sm">{{ label }}</span>
    </router-link>
</template>

<script lang="ts">
    import { Icon } from '@iconify/vue'

    export default {
        name: 'Header',
        components: { Icon },
    }
</script>

<template>
    <header
        class="flex h-14 w-full flex-shrink-0 items-center justify-between px-5 py-2.5"
    >
        <img
            src="/logo.png"
            alt="Logo image"
            height="40"
            width="40"
        />

        <Icon icon="mdi:bell-outline" width="24" class="text-text-light" />
    </header>
</template>

<script lang="ts">
    import NavigationButton from './NavigationButton.vue'

    export default {
        name: 'NavigationBar',
        components: {
            NavigationButton,
        },
    }
</script>

<template>
    <footer
        class="flex h-[70px] w-full flex-shrink-0 items-center justify-between rounded-t-4xl bg-white px-10 py-2.5 shadow-md"
    >
        <NavigationButton icon="bx:home" label="Home" redirectTo="/" />
        <NavigationButton
            icon="bx:food-menu"
            label="Recipes"
            redirectTo="/recipes"
        />
        <NavigationButton
            icon="bx:calendar"
            label="Planner"
            redirectTo="/planner"
        />
        <NavigationButton
            icon="bx:basket"
            label="Grocery list"
            redirectTo="/grocery-list"
        />
    </footer>
</template>

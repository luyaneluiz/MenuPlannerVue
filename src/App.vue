<script setup lang="ts">
    import Header from './components/layout/Header.vue'
    import NavigationBar from './components/layout/NavigationBar.vue'
</script>

<template>
    <div class="bg-background text-text-light flex min-h-screen flex-col">
        <Header />

        <main class="min-h-full w-full flex-grow md:px-16 px-5 py-3.5 md:py-8">
            <router-view />
        </main>

        <NavigationBar />
    </div>
</template>

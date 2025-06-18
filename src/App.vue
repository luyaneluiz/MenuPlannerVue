<script setup lang="ts">
    import Header from './components/Layout/Header.vue'
    import NavigationBar from './components/Layout/NavigationBar.vue'
</script>

<template>
    <div class="bg-background text-text-light flex min-h-screen flex-col">
        <Header />

        <main class="min-h-full w-full max-w-4xl flex-grow">
            <router-view />
        </main>

        <NavigationBar />
    </div>
</template>

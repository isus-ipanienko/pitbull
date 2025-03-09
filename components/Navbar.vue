<script setup>
const searchQuery = ref('')
</script>

<template>
<nav class="navbar is-white">
    <div class="container is-flex is-align-items-center is-justify-content-space-between">
        <div class="navbar-logo">
            <span>LOGO</span>
        </div>

        <div class="navbar-center is-flex has-text-weight-bold">
            <NuxtLink to="/" class="navbar-item">SALE UP TO -60%!</NuxtLink>
            <NuxtLink to="/about" class="navbar-item">NOWOŚCI</NuxtLink>
            <a class="navbar-item">MĘSKIE</a>
            <a class="navbar-item">DAMSKIE</a>
            <a class="navbar-item">DZIECIĘCE</a>
            <a class="navbar-item">AKCESORIA</a>
            <a class="navbar-item">PROMOCJE</a>
        </div>

        <div class="navbar-search">
            <input v-model="searchQuery" type="text" placeholder="Szukaj" class="input">
            <button class="search-button">
                <i class="fas fa-search"/>
            </button>
        </div>
    </div>
</nav>
</template>

<style scoped>
</style>

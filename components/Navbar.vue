<script setup>

const searchQuery = ref('');
const showLogo = ref(false);

const toggleLogo = () => {
  showLogo.value = !showLogo.value;
};

</script>

<template>
<nav class="navbar is-white">
    <div class="container is-flex is-align-items-center is-justify-content-space-between">
        <div class="navbar-logo" v-if="showLogo">
            <span>LOGO</span>
        </div>

        <div class="navbar-center is-flex has-text-weight-bold">
            <NuxtLink to="/" class="navbar-item">SALE UP TO -60%!</NuxtLink>
            <NuxtLink to="/about" class="navbar-item">NOWOŚCI</NuxtLink>
            <NuxtLink to="/" class="navbar-item">MĘSKIE</NuxtLink>
            <NuxtLink to="/" class="navbar-item">DAMSKIE</NuxtLink>
            <NuxtLink to="/" class="navbar-item">DZIECIĘCE</NuxtLink>
            <NuxtLink to="/" class="navbar-item">AKCESORIA</NuxtLink>
            <NuxtLink to="/" class="navbar-item">PROMOCJE</NuxtLink>
        </div>

        <div class="navbar-search">
            <input v-model="searchQuery" type="text" placeholder="Szukaj" class="input">
            <button class="search-button" @click="toggleLogo">
                <img src="/assets/svg/search.svg" alt="Search button"/>
            </button>
        </div>
    </div>
</nav>
</template>

<style scoped>

.navbar-search {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px;

    img {
        color: black
    }
}

.search-input {
    border: none;
    outline: none;
    padding: 5px;
}

.search-button {
    all: unset;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
}

.search-button i {
    font-size: 16px;
    color: #333;
}

</style>

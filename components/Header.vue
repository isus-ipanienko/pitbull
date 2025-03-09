<script setup>
const cartItems = ref(1)
const wishlistItems = ref(10)
</script>

<template>
<nav class="navbar is-black">
    <div class="container is-flex is-align-items-center is-justify-content-space-between">
        <div class="navbar-left is-flex is-align-items-center">
            <a class="navbar-item">
                <span>Nasze salony</span>
            </a>
        </div>

        <div class="navbar-center has-text-white has-text-weight-bold">
            KOLEKCJA WIOSNA/LATO 2025! <br> Pokaż produkty!
        </div>

        <div class="navbar-right is-flex is-align-items-center">
            <a class="navbar-item">
                <span>Moje konto</span>
            </a>
            <a class="navbar-item">
                <span>Lista życzeń <span class="wishlist-count">{{wishlistItems}}</span></span>
            </a>
            <a class="navbar-item cart-button has-text-white cart-button">
                <img src="/assets/svg/shopping-cart.svg">
                <span>Koszyk ({{cartItems}})</span>
            </a>
        </div>
    </div>
</nav>
</template>

<style scoped>
.navbar {
    padding: 0.5rem 1rem;
}

.navbar-left, .navbar-right {
    gap: 1rem;
}

.navbar-item {
    color: white;
}

.cart-button {
  background-color: #47b750;
  padding: 10px 15px;
  font-weight: bold;
}
</style>

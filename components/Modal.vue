<script setup>
const currentModal = ref(true)
const emit = defineEmits('toggle-modal')


</script>
<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p>My Modal</p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="emit('toggle-modal')"></button>
    </div>
</template>
<style scoped>
    .modal-content {
        padding: 20px;
        background-color:white;
    }
</style>

<script setup>

const props = defineProps({
    stateModal: {
        type: Boolean,
        default: false,
    }
});

const currentModal = ref(props.stateModal);

const closeModal = () => {
    currentModal.value = false;
};

</script>

<template>
    <div class="modal" :class="{ 'is-active': currentModal }">
        <div class="modal-background"></div>
        <div class="box">
            <h1 class="title"> modal </h1>
            <button class="button is-success" @click="closeModal"> X </button>
        </div>
    </div>
</template>

<style scoped>
</style>


<script setup>

const stateModal = ref(true);

const startModal = () => {
    stateModal.value = true;
};

const stopModal = () => {
    stateModal.value = false;
};

</script>

<template>
  <Header @toggle-modal="startModal" />
  <Navbar />
  <Modal v-if="stateModal" @toggle-modal="stopModal"/>
  <NuxtPage />
  <Footer />
</template>

<script setup>

const stateModal = ref(false);

const openModal = () => {
    stateModal.value = true;
};

</script>

<template>
  <Modal :stateModal="stateModal"/>
  <Header @toggle-modal="openModal" />
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<script setup>
import NavTabs from '@/components/NavTabs.vue';
import UserForm from '@/components/UserForm.vue';


</script>

<template>
  <main class="main">
    <div class="container">
      <section class="main__head">
        <nav-tabs />
      </section>
      <section class="main__body">
        <div class="form-container">
          <h2>Добавить пользователя</h2>
          <user-form />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
}

h2 {
  text-align: center;
}
</style>

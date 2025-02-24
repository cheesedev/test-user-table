<script setup>
import { useUsersStore } from "@/stores/users";
import { computed, ref } from "vue";
import FormInput from '@/components/FormInput.vue';

const userStore = useUsersStore();

const formData = ref({
  name: '',
  email: '',
  date: '',
  phone: '',
});

const formValidity = ref({
  name: false,
  email: false,
  date: false,
  phone: false,
});

const isFormValid = computed(() => {
  return Object.values(formValidity.value).every((valid) => valid);
});

const submitForm = (e) => {
  e.preventDefault();

  if (isFormValid.value) {
    userStore.addUser({
      name: formData.value.name,
      email: formData.value.email,
      phone: formData.value.phone,
      date: formData.value.date,
    });

    e.target.reset();

    alert('Пользователь успешно добавлен');
  } else {
    alert('Проверьте правильность заполнения полей');
  }
};
</script>
<template>
<form class="user-form" @submit="submitForm">
  <form-input
      v-model="formData.name"
      label="ФИО"
      type="text"
      required
      @validation="formValidity.name = $event"
  />

  <form-input
      v-model="formData.date"
      label="Дата рождения"
      type="date"
      required
      @validation="formValidity.date = $event"
  />

  <form-input
      v-model="formData.phone"
      label="Номер телефона"
      type="tel"
      required
      @validation="formValidity.phone = $event"
  />

  <form-input
      v-model="formData.email"
      label="Электронная почта"
      type="email"
      required
      @validation="formValidity.email = $event"
  />

  <button class="btn" :disabled="!isFormValid" type="submit">
    Отправить
  </button>
</form>
</template>
<style lang="scss">
@import "@/assets/style/button.scss";

.user-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

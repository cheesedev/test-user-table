<script setup>
import { useUsersStore } from '@/stores/users.js';
import NavTabs from '@/components/NavTabs.vue';

const userStore = useUsersStore();
const { users } = userStore;

</script>

<template>
  <main class="users">
    <div class="container">
      <section class="users__head">
        <nav-tabs />
      </section>
      <section class="users__body">
        <table>
          <thead>
          <tr>
            <th>ФИО</th>
            <th>Дата рождения</th>
            <th>Номер телефона</th>
            <th>Электронная почта</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.date }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.email }}</td>
          </tr>
          </tbody>
        </table>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.users {

  &__body {
    overflow-y: scroll;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
  }

  table th, table td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
  }

  table th {
    padding: 5px;
    background-color: #f4f4f4;
  }
}
</style>

import { defineStore } from 'pinia';

export const useUsersStore = defineStore('formStore', {
    state: () => ({
        users: [],
    }),
    actions: {
        addUser(user) {
            this.users.push(user);
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'usersData',
                storage: localStorage,
            },
        ],
    },
});

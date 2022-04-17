import { defineStore } from 'pinia'
import { UsersI } from './../interfaces/users.interfaces';

interface State {
  name: string;
  lastName: string;
  email: string;
  password: string;
  users: UsersI[];
  isLoading: boolean;
}

export const useStore = defineStore(
  'users',
  {
    state: () => {
      return {
        name: '',
        lastName: '',
        email: '',
        password: '',
        users: [],
        isLoading: false,
      }
    },

    actions: {
      setEmail(state: State, email: string) {
        state.email = email
      },
      setPassword(state: State, password: string) {
        state.password = password
      },
      setUsers(state: State, users: UsersI[]) {
        state.users = users
      },
      async addUsers(state: State, users: UsersI[]) {
        state.users = users
      },
      async useDelete(users: UsersI[]) {
        try {
          if (this.users) this.users.filter(i => i !== users);
        } catch (err) {
          console.error(err)
        }
      },
      useEditUsers(users: UsersI[]) {
      }
    }
  })
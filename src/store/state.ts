import { defineStore } from 'pinia'

interface State {
  name: string;
  lastName: string;
  email: string;
  password: string;
  user: string;
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
        user: '',
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
      async userLogin(state: State,) {

      }
    }
  })
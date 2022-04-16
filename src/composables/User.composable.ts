import { onMounted, ref } from "vue"
import { UsersI } from "../interfaces/users.interfaces"
import axios from "axios"

export const getDataUsers = () => {
  const users = ref<UsersI[]>()
  onMounted(async () => {
    const { data } = await axios.get<UsersI[]>('https://jsonplaceholder.typicode.com/users')
    users.value = data
  })
  return {
    users
  }
}
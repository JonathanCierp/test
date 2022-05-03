import axios from 'axios'
import useCookie from '@/composables/useCookie'

export default () => {
  const cookies = useCookie()

  const axiosInstance = () => {
    return axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    })
  }

  const axiosAuthInstance = () => {
    return axios.create({
      headers: {
        Authorization: 'Bearer ' + cookies.get('token'),
      },
      baseURL: import.meta.env.VITE_API_URL,
    })
  }

  return {
    axiosInstance,
    axiosAuthInstance,
  }
}

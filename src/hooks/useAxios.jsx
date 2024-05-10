import axios from "axios"

const axiosBase = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  })

function useAxios() {
  return axiosBase
}

export default useAxios
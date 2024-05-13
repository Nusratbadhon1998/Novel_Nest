import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
import { useEffect } from 'react'
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
})

const useAxiosSecure = () => {
  //  const { logOut } = useAuth();
    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         return res;
    //     }, error => {
    //         console.log('error tracked in the interceptor', error.response)
    //         if (error.response.status === 401 || error.response.status === 403) {
    //             console.log('logout the user')
    //                 .then(() => { 
    //                     navigate('/login')
    //                 })
    //                 .catch(error => console.log(error))
    //         }
    //     })
    // }, [])

    return axiosSecure;
}

export default useAxiosSecure
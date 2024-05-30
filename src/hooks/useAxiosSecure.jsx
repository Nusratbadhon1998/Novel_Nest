import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const  logOut  = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        console.log('error tracked in the interceptor', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              console.log("loh")
            })
            .catch((error) => console.log(error));
        }
        return Promise.reject(error);
      }
    );
  }, [logOut]); // Add logOut and navigate to dependency array

  return axiosSecure;
};

export default useAxiosSecure;

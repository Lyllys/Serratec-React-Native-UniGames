import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://192.168.0.104:8080/'
})

api.interceptors.request.use(
    (config) => {
        const token = AsyncStorage.getItem('token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },

    (error) => {
        return Promise.reject(error)
    }
)

export default api;
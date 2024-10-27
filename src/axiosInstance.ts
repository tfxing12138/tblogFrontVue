// src/axiosInstance.ts
import axios from 'axios';

const API_BASE_URL = 'http://106.52.4.171:10010'; // 你可以从环境变量中获取这个值

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // 这里可以添加其他配置，例如超时、请求拦截器等
});

// 你可以根据需要添加请求拦截器和响应拦截器
axiosInstance.interceptors.request.use(config => {
    // 在请求发送之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    // 对响应数据做些什么
    return response;
}, error => {
    // 对响应错误做些什么
    return Promise.reject(error);
});

export default axiosInstance;

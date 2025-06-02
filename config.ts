import axios from "axios";

export const TASK_API_URL = 'https://dummyjson.com/c/26e4-a659-4318-9ada';

export const TaskApi = axios.create({
    baseURL: TASK_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})
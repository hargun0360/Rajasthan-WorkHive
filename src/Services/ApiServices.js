import axios from 'axios';
import { LOGIN_URL, NEAR_BY_STORE } from './ApiUrls';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI5MTE4ODgyNTE3Iiwic3ViIjoiVXNlciIsImV4cCI6MTY3OTYwMTQ3N30.fipVJRuBudDA4m8ukz2vMFc4mhelnqwK7tkHhO-nEA4";

export const getNearbyStore = (obj) => {
     return axios.post(NEAR_BY_STORE , obj , {
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + token
        }
    })
}
export const Loginapi = (obj) => {
     return axios.post(LOGIN_URL , obj , {
        headers: {
            "Content-Type": "application/json",
        }
    })
}
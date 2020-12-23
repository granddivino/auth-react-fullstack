import axios from 'axios'
import authHeader from '../utilities/authHeader.utilities'

const API_URL = 'http://localhost:8080/api/test/'


/*
Methods	| Urls | Actions
-------- | ------- | --------
POST |	/api/auth/signup |	signup new account
POST |	/api/auth/signin |	login an account
GET	 |   /api/test/all	 |	retrieve public content
GET	 |  /api/test/user	 |	access User's content
GET	 | /api/test/admin	 |	access Admin's content
*/


// Retreive public content
export const getPublicContent= () => {
    return axios.get(API_URL + 'all')
}

// Access user's content
export const getUserBoard = () => {
    return axios.get(API_URL + 'user', {header: authHeader()})
}

// Access admin's content

export const getAdminBoard = () => {
    return axios.get(API_URL + 'admin', {header: authHeader()})
}


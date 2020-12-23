import { getItem } from './localStorage.utilities'

export default function authHeader() {
    // Grabbing the user from the local storage
    const user = getItem('user')
    // Check if user and if user has accessToken
    if(user && user.accessToken) {
        return { 'x-access-token': user.accessToken}
    } else {
        return {}
    }
}
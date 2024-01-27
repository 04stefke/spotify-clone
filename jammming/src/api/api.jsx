
const client_id = 'ad706be7f85f476786a6e38b81389999'
const redirect_uri = 'http://localhost:5173/'
const auth_endpoint = 'https://accounts.spotify.com/authorize'
const response_type = 'token'


export const spotify = {
    getAccessToken(){
        const dispatch = useDispatch()
        const accessUrl = `${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`
        window.location = accessUrl
        let token = window.localStorage.getItem('token')
        const hash = window.location.hash
        if(!token && hash){
            token = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1]
            window.localStorage.setItem('token', token)
        }
    }
}


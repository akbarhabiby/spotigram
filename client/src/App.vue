<template>
    <div>
        <LoginPage
            v-if="render == 'login-page'"
            @login="login"
        ></LoginPage>
        <HomePage
            v-else-if="render == 'home-page'"
            :tracks="tracks"
        ></HomePage>
    </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

export default {
    name: 'App',
    data() {
        return {
            render: 'login-page',
            user: {
                email: '',
                tracks: []
            }
        }
    },
    components: {
        LoginPage,
        HomePage
    },
    methods: {
        login() {
            let page = window.open('https://accounts.spotify.com/authorize?client_id=71a718752e5645808f8dc3a5b51352b7&response_type=code&redirect_uri=http://localhost:1234/callback.html&scope=user-top-read user-read-private')
            let check = setInterval( _ => {
                if(page.closed) {
                    clearInterval(check)
                    console.log('Login Page Closed');
                }
            }, 1000)
        }
    }
}
</script>
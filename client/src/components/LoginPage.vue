<template>
    <div>
        <button @click.prevent="login">Login</button>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    methods: {
        login() {
            this.$emit('login')
        }
    }
}
</script>
<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="item active" href="/">
            Image Storage
        </router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal static">
                <router-link to="/" class="item">Galleries</router-link>
                <router-link to="/upload" class="item">Upload</router-link>
                <a class="item" @click="logout">Logout</a>
            </div>
            <a v-else href="#" class="ui item" @click="login">
                Login
            </a>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex' //automatically connects actions in modules

    export default {
        name: 'AppHeader',
        computed: mapGetters(['isLoggedIn']), //With this method I can't create custom computed functions
        methods: {
            ...mapActions(['login', 'logout']) //Login action from modules, this method is used when I want to add in other methods
        }
    }
</script>

<style scoped>
    .horizontal {
        display: flex;
        flex-direction: row;
    }
</style>
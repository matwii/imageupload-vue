<template>
    <div class="ui secondary pointing menu">
        <a class="item active" href="/">
            Image Storage
        </a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="item">Galleries</a>
                <a class="item">Upload</a>
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
<template>
    <div>
        Please wait...
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'AuthHandler',
        methods: mapActions(['finalizeLogin']),
        created() { //what happens before mounted
            this.finalizeLogin(window.location.hash); //Data after # in the url
        }
    }
</script>
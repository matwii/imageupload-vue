<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
            <img v-for="image in allImages" :src="image.link" :key="image.id"/>
        </div>
        <h2 v-else>Log in to get started</h2>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ImageList',
        computed: mapGetters(['allImages', 'isLoggedIn']), //We use computed property to read information into our component
        methods: mapActions(['fetchImages']),
        //Calls methods right before component is about to be rendered.
        created() {
            this.isLoggedIn ? this.fetchImages() : null;
        }
    }
</script>

<style scoped>
    .image-container {
        column-count: 3;
        column-gap: 0;
    }

    img {
        max-width: 100%;
        height: 40vh;
        padding: 5px;
    }
</style>
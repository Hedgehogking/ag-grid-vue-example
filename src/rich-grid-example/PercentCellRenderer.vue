<template>
    <Progress :percent="percent" />
</template>

<script>
    import Vue from "vue";

    export default Vue.extend({
        data() {
            return {
                percent: 0,
            }
        },
        methods: {},
        mounted() {
            this.percent = this.params.data.proficiency;
        },
    })

</script>

<style scoped>
</style>

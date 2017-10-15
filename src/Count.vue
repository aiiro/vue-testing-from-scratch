<template>
    <div>
        <h1>Count</h1>
        <div>
            <p v-text="current"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'count',

    props: {
        start: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            current: this.start,
        }
    }
}
</script>
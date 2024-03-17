<template>
    <div class="year">
        <h2>Year {{ year }}</h2>
        <div class="terms">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['year']
}
</script>

<style scoped>
.year {
    border: 1px solid #ccc;
    border-radius: 7px;
    padding: 20px 10px;
}

h2 {
    margin: 0;
    padding: 0;
}

.terms {
    display: flex;
    flex-direction: row;
    gap: 16px;
    margin: 16px 8px;
}
</style>

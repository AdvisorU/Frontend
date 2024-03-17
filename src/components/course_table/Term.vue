<template>
    <div class="term">
        <h3>{{ termName }}</h3>
        <div class="courses">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['termName']
}
</script>

<style scoped>
.term {
    border: 1px solid #007bff;
    border-radius: 7px;
    padding: 17px 12px 15px 12px;
    background-color: #d8e8ff;
}

h3 {
    margin: 0;
    padding: 0;
}

.courses {
    display: flex;
    flex-direction: column;
    margin-top: 12px;
    gap: 8px;
}
</style>

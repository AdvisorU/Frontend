<template>
    <div class="course">
        <p class="course-code">{{ `${course.major} ${course.number || ""}` }}</p>
        <p class="course-name">{{ course?.name }}</p>
    </div>
</template>

<script>
export default {
    props: ['course']
}
</script>

<style scoped>
.course {
    width: 210px;
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 7px;
    background: white;
}

p {
    margin: 0;
    padding: 0;
}

.course-code {
    color: #007bff;
    font-weight: bold;
}

.course-name {
    color: #333;
    font-size: 0.85rem;
}
</style>

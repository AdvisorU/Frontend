<template>
    <div class="course-table">
        <Year v-for="year in plan" :key="year.year" :year="year.name">
            <Term v-for="term in year.terms" :key="term.name" :termName="term.type">
                <Course v-for="course in term.items" :key="course.id" :course="course.data" />
            </Term>
        </Year>
    </div>
</template>

<script>
import Year from '@/components/course_table/Year.vue';
import Term from '@/components/course_table/Term.vue';
import Course from '@/components/course_table/Course.vue';

export default {
    name: 'CourseTable',
    components: {
        Year,
        Term,
        Course,
    },
    props: ['plan'],
    mounted() {
        console.log(this.plan)
    }
};
</script>

<style scoped>
.course-table {
    width: 100%;
    padding: 16px;
    overflow: auto;
}

.course-table>* {
    margin-bottom: 16px;
}
</style>

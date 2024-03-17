<template>
    <div class="course-table">
        <Year year="2021">
            <Term termName="Fall">
                <Course courseCode="COMP 1001" courseName="Introduction to Computing I" />
                <Course courseCode="COMP 1002" courseName="Introduction to Computing II" />
                <Course courseCode="COMP 1003" courseName="Introduction to Computing III" />
            </Term>
            <Term termName="Winter">
                <Course courseCode="COMP 2001" courseName="Data Structures and Algorithms" />
                <Course courseCode="COMP 2002" courseName="Software Engineering" />
                <Course courseCode="COMP 2003" courseName="Database Systems" />
            </Term>
        </Year>
        <Year year="2022">
            <Term termName="Fall">
                <Course courseCode="COMP 3001" courseName="Operating Systems" />
                <Course courseCode="COMP 3002" courseName="Computer Networks" />
                <Course courseCode="COMP 3003" courseName="Web Development" />
            </Term>
            <Term termName="Winter">
                <Course courseCode="COMP 4001" courseName="Artificial Intelligence" />
                <Course courseCode="COMP 4002" courseName="Machine Learning" />
                <Course courseCode="COMP 4003" courseName="Computer Vision" />
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
};
</script>

<style scoped>
.course-table {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    overflow: auto;
}
</style>

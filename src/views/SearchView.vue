<template>
    <main>
        <a-input-search v-model:value="search" placeholder="Search Classes" @search="onSearch" />
        <a-list size="large" :data-source="data" class="list-container">
            <template #renderItem="{ item }">
                <a-list-item v-html="item"></a-list-item>
            </template>
        </a-list>
    </main>
</template>

<script>
import { Api } from "@/api/api";

export default {
    name: 'SearchView',
    data() {
        return {
            data: [
            ],
            search: '',
        };
    },
    mounted() {
        Api.course.list("", "", 0, 10).then(res => {
            res.data.forEach(course => {
                this.data.push(`${course.major.short_name}${course.number} ${course.name} <br/> credit_hours: ${course.credit_hours} <br/> prerequisites: ${course.prerequisites} <br/> corequisites: ${course.corequisites}`);
            });
        });
    },
    methods: {
        onSearch() {
            console.log('onSearch:', this.search);
            Api.course.list("", this.search, 0, 10).then(res => {
                this.data = [];
                res.data.forEach(course => {
                    this.data.push(`${course.major.short_name}${course.number} ${course.name} <br/> credit_hours: ${course.credit_hours} <br/> prerequisites: ${course.prerequisites} <br/> corequisites: ${course.corequisites}`);
                });
            });
        },
    },
    watch: {
        search: {
            handler() {
                this.onSearch();
            },
            immediate: true,
        },
    },
};
</script>

<style scoped>
main {
    flex: auto;
    display: flex;
    align-items: center;
}

.ant-input-search {
    width: 100%;
    margin-bottom: 16px;
}

.list-container {
    width: 100%;
    overflow-y: auto;
}

.ant-list-item {
    padding: 12px 24px;
    border-bottom: 1px solid #898282;
}
</style>

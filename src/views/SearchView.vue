<template>
    <main>
        <a-input-search v-model:value="search" placeholder="Search Classes" @search="onSearch" />
        <a-list size="large" :data-source="data" class="list-container">
            <template #renderItem="{ item }">
                <a-list-item v-html="item"></a-list-item>
            </template>
        </a-list>
        <div v-if="loading_search_list" class="loading">
            <a-spin tip="Loading..." />
        </div>
    </main>
</template>

<script>
import { Api } from "@/api/api";

export default {
    name: 'SearchView',
    data() {
        return {
            data: [],
            search: '',
            loading_search_list: true,
        };
    },
    mounted() {
        Api.course.list("", "", 0, 100).then(res => {
            this.loading_search_list = false
            if (res.code == 0) {
                res.data.forEach(course => {
                    this.data.push(`${course.major.short_name}${course.number} ${course.name} <br/> credit_hours: ${course.credit_hours} <br/> prerequisites: ${course.prerequisites} <br/> corequisites: ${course.corequisites}`)
                })
            }
        })
    },
    methods: {
        onSearch() {
            console.log('onSearch:', this.search)
            this.loading_search_list = true
            Api.course.list("", this.search, 0, 100).then(res => {
                this.loading_search_list = false
                if (res.code == 0) {
                    this.data = []
                    res.data.forEach(course => {
                        this.data.push(`${course.major.short_name}${course.number} ${course.name} <br/> credit_hours: ${course.credit_hours} <br/> prerequisites: ${course.prerequisites} <br/> corequisites: ${course.corequisites}`)
                    })
                }
            })
        },
    },
}
</script>

<style scoped>
main {
    position: relative;
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

.loading {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.5);
}
</style>

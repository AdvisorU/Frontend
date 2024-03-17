<template>
	<main>
		<header>
			<div class="logo">AdvisorU</div>
			<div class="user-info">
				<div v-if="userProfile?.profile">
					<a-avatar :size="32">
						<template #icon>
							<img src="//files-bb1.binrz.com/default_avatar.png" />
						</template>
					</a-avatar>
					<span>{{ userProfile?.profile?.nickname }}</span>
				</div>
				<div v-else>
					<a-skeleton-avatar :active="true" :size="32" />
					<a-skeleton-button :active="true" />
				</div>
			</div>
		</header>
		<div class="content">
			<div class="tabs">
				<div class="switcher">
					<a :class="{ active: $route.path === '/' }" @click="$router.replace('/')">Chat</a>
					<a :class="{ active: $route.path === '/search' }" @click="$router.replace('/search')">Search</a>
				</div>
				<router-view />
			</div>
			<CourseTable class="course-table" />
		</div>
	</main>
</template>

<script>
import { useUserProfile } from "@/stores/user_profile"
import CourseTable from '@/components/course_table/CourseTable.vue'

export default {
	name: 'HomeView',
	components: {
		CourseTable,
	},
	data() {
		return {
			userProfile: useUserProfile(),
		};
	},
	mounted() {
		this.userProfile.fetchAndSetUserProfile()
	},
};
</script>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	overflow: hidden;
}

header {
	flex: 0;
	min-height: 32px;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	padding: 12px 24px 12px 48px;
	box-shadow: 0px 4px 7px lightgrey;
	z-index: 100;
}

header>.logo {
	font-size: 24px;
	font-weight: 600;
}

header>.user-info>div>*:not(:last-child) {
	margin-right: 8px;
}

.content {
	flex: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow: hidden;
}

.content>.tabs {
	width: 40%;
	display: flex;
	flex-direction: column;
	background: #f0f0f0;
}

.content>.tabs>.switcher {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.content>.tabs>.switcher a {
	flex: 1;
	text-align: center;
	padding: 10px;
	font-size: 16px;
	color: grey;
	text-decoration: none;
	border-bottom: 2px solid transparent;
	cursor: pointer;
	transition: all 0.1s ease-in-out;
}

.content>.tabs>.switcher a:hover {
	color: #0073ff;
	background: lightgray;
}

.content>.tabs>.switcher a.active {
	color: #0073ff;
	border-bottom: 2px solid #0073ff;
}
</style>

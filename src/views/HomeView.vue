<template>
	<main>
		<header>
			<div class="logo">LOGO</div>
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
					<!-- 页面切换不要存进历史 -->
					<a :class="{ active: $route.path === '/' }" @click="$router.replace('/')">Search</a>
					<a :class="{ active: $route.path === '/chat' }" @click="$router.replace('/chat')">Chat</a>
				</div>
				<router-view />
			</div>
			<div class="course-table">
				<h1>CourseTable</h1>
			</div>
		</div>
	</main>
</template>

<script>
import { useUserProfile } from "@/stores/user_profile";

export default {
	name: 'HomeView',
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

header>.user-info>div>*:not(:last-child) {
	margin-right: 8px;
}

.content {
	flex: auto;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
}

.content>.tabs {
	width: 40%;
	height: 100%;
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
}

.content>.tabs>.switcher a.active {
  color: #0073ff;
  border-bottom: 2px solid #0073ff;
}

.content>.course-table {
	flex: auto;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

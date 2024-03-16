<template>
	<main>
		<header>
			<div class="logo">LOGO</div>
			<div class="user-info">
				<a-avatar :size="32">
					<template #icon>
						<img src="//files-bb1.binrz.com/default_avatar.png" />
					</template>
				</a-avatar>
				<span>{{ userProfile?.profile?.nickname }}</span>
			</div>
		</header>
		<router-view />
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
}

header {
	width: 100%;
	height: 32px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px 12px 48px;
	box-shadow: 0px 4px 7px lightgrey;
}

header > .user-info > *:not(:last-child) {
	margin-right: 8px;
}
</style>

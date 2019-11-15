<template>
	<div>
		<span v-for="(value, index) in links" v-bind:key="value">
			<a v-bind:href="value['href']">
				<i v-bind:class="value['icon']"></i>
			</a>
			<span v-if="index != links.length - 1">|</span>
		</span>
	</div>
</template>

<script>
export default {
	name: 'LinkIcons',
	data () {
		return {
			links: [
				{"href": "https://wiki.hackerspaces.org/Jerimum_HackerSpace", "icon": "fab fa-wikipedia-w"},
				{"href": "https://t.me/JerimumHS", "icon": "fab fa-telegram-plane"},
				{"href": "https://twitter.com/JerimumHS", "icon": "fab fa-twitter"},
				{"href": "https://www.facebook.com/JerimumHS/", "icon": "fab fa-facebook-f"},
				{"href": "https://groups.google.com/forum/#!forum/hackerspace-natal", "icon": "fab fa-google"}
			]
		}
	}
}
</script>

<style scoped>
div {
	font-size: 22px;
}
a {
	margin-left: 10px;
	margin-right: 10px;
}
</style>
<template>
	<div>
		<span v-for="(value, key, index) in locales" v-bind:key="key">
			<span v-if="index == 0">|</span>
			<a href="#" v-on:click="changeLocale(key)">{{value}}</a>
			<span>|</span>
		</span>
	</div>
</template>

<script>
export default {
	name: 'LocaleChanger',
	data () {
		const locales = {}
		const LanguageObjects = require.context('../../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
		LanguageObjects.keys().forEach(key => {
			const matched = key.match(/([A-Za-z0-9-_]+)\./i)
			if (matched && matched.length > 1) {
				const locale = matched[1]
				locales[locale] = LanguageObjects(key).languageName
			}
		})
		return {locales: locales}
	},
	methods: {
		changeLocale: function(locale) {
			this.$i18n.locale = locale
			localStorage.setItem('locale', locale)
		}
	}
}
</script>

<style scoped>
div {
	margin-top: 20px;
	line-height: 10px;
}
a {
	font-size: 15px;
	margin-left: 10px;
	margin-right: 10px;
}
</style>
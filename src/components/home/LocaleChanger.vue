<template>
	<div>
		<a v-for="(value, key, index) in locales" 
		v-bind:key="key" v-on:click="changeLocale(key)" href="#">
			{{value}}<span v-if="index != Object.keys(locales).length - 1"> |</span>
		</a>
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
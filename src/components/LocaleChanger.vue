<template>
	<div>
		<a v-for="obj in locales" v-bind:key="obj['locale']" v-on:click="changeLocale(obj['locale'])" href="#">
			{{obj['languageName']}} |
		</a>
    
		<!-- <select v-model="$i18n.locale">
			<option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
		</select> -->
	</div>
</template>

<script>
export default {
	name: 'LocaleChanger',
	data () {
		const locales = []
		const LanguageObjects = require.context('../locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
		LanguageObjects.keys().forEach(key => {
			const matched = key.match(/([A-Za-z0-9-_]+)\./i)
			if (matched && matched.length > 1) {
				const locale = matched[1]
				locales.push({
					"locale": locale,
					"languageName": LanguageObjects(key).languageName
				})
			}
		})
		return {locales: locales}
	},
	methods: {
		changeLocale: function(locale) {
			this.$root.$i18n.locale = locale
		}
	}
}
</script>
<template>
	<div class="home col-md-6 offset-md-3">
		<GlitchLogo />
		<GlitchText />
		<Paragraphs />
		<LinkIcons />
		<LocaleChanger />
	</div>
</template>

<script>
import GlitchLogo from './GlitchLogo'
import GlitchText from './GlitchText'
import Paragraphs from './Paragraphs'
import LinkIcons from './LinkIcons'
import LocaleChanger from './LocaleChanger'

export default {
  name: 'Home',
  components: {
    GlitchLogo,
	GlitchText,
	Paragraphs,
	LinkIcons,
	LocaleChanger
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

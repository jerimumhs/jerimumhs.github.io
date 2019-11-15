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
import GlitchLogo from './home/GlitchLogo'
import GlitchText from './home/GlitchText'
import Paragraphs from './home/Paragraphs'
import LinkIcons from './home/LinkIcons'
import LocaleChanger from './home/LocaleChanger'

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

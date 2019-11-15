<template>
    <div>
        <p>{{ $t('paragraphOne') }}</p>
        <p>{{ $t('paragraphTwo') }}</p>
        <p>{{ $t('paragraphThree') }}</p>
    </div>
</template>

<script>
export default {
	name: 'Paragraphs'
}
</script>

<style scoped>
div {
	margin: 20px auto;
}
</style>
<template>
	<div class="globe">
		<div class="globe__center-backward"></div>
		<div class="globe__track">
			<div class="globe__moving"></div>
		</div>
		<div class="globe__center-forward"></div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.globe {
		position: relative;

		&__center-backward {
			position: relative;
			width: 0.6em;
			height: 0.3em;
			margin: 0.1em 0.1em 0 0.1em;
			border-radius: 50% 50% 0 0/100% 100% 0 0;
			background: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
			z-index: 2;
		}

		&__center-forward {
			position: relative;
			width: 0.6em;
			height: 0.3em;
			margin: 0 0.1em 0.1em 0.1em;
			border-radius: 0 0 50% 50%/0 0 100% 100%;
			background: linear-gradient(45deg, #fdfcfb 0%, #e2d1c3 100%);
			z-index: 0;
		}

		&__track {
			position: absolute;
			top: 0;
			left: 0;
			width: 0.8em;
			height: 0.8em;
			border-radius: 50%;
			border: 0.1em solid #f6d365;
			transform: scale(1.5, 0.7) rotateX(60deg) rotateY(-30deg);
			z-index: 1;
		}

		&__moving {
			position: absolute;
			left: 50%;
			top: 0;
			width: 0.3em;
			height: 0.1em;
			border-radius: 50%;
			background: #fbc2eb;
			animation: spin 2s infinite;
			transform-origin: 0 0.3em;
		}

		@keyframes spin {
			to {
				transform: rotate(1turn);
			}
		}
	}
</style>

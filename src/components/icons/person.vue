<template>
	<div class="person">
		<div class="person__head"></div>
		<div class="person__body"></div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style lang="scss">
	.person {
		&__head {
			width: 0.5em;
			margin: auto auto;
			padding: 0.25em;
			border-radius: 50%;
			background: white;
			// animation: head-enter 1.5s 1s;
		}
		&__body {
			width: 1em;
			height: 0;
			padding-bottom: 0.5em;
			background: white;
			border-radius: 50% 50% 0 0/100% 100% 0 0;
			// animation: body-enter 1.5s 1s;
		}
	}

	@keyframes head-enter {
		from {
			transform: translateX(-200px);
		}
		75%, 95% {
			transform: translateX(5px);
		}
		85%, to {
			transform: translateX(0);
		}
	}

	@keyframes body-enter {
		from {
			transform: translateX(-190px);
		}
		90% {
			transform: translateX(0);
		}
	}
</style>

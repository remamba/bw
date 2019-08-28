<template>
	<div id="app" class="above-the-fold-container">
		<div class="section">
			<icon-person style="font-size: 15px;" />
			我的活动
		</div>
		<div class="section">
			<keygen/>
			发起聚会
		</div>
		<div class="section">
			<icon-globe style="font-size: 40px;"/>
			聚会圈子
		</div>
	</div>
</template>
<script>
	import iconPerson from '@components/icons/person'
	import iconGlobe from '@components/icons/globe'

	export default {
		data() {
			return {
			}
		},
		created() {

		},
		methods: {
			_select() {

			},
		},
		components: {
			iconPerson,
			iconGlobe,
		},
	}
</script>

<style lang="scss">
	.above-the-fold-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
		align-items: center;

		.section {
			height: 31%;
			width: 96%;
			border-radius: 10px;
			color: white;
			font-size: 1.2rem;
			animation: showSection 1.5s;
			transform-origin: top left;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.section:nth-child(1) {
			background: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);
		}

		.section:nth-child(2) {
			background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
		}

		.section:nth-child(3) {
			background: linear-gradient(-45deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
		}


		@keyframes showSection {
			from {
				transform: rotate(-45deg) scale(0);
			}
			50% {
				transform: rotate(3deg) scale(1);
			}
			60% {
				transform: rotate(0);
			}
			70% {
				transform: rotate(2deg);
			}
			80% {
				transform: rotate(0);
			}
			90%{
				transform: rotate(1deg);
			}
			to {
				transform: rotate(0) scale(1);
			}
		}
	}
</style>

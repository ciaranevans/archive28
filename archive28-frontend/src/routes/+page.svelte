<script>
	import { imperialCalendar } from '$lib/imperialCalendar.js';
	let imperialDate = imperialCalendar();
	console.log(imperialDate);
</script>

<div>
	<h1 class="header">Archivum28</h1>
	<h1 class="header header-smaller">Coming soon.</h1>
</div>

<style>
	div {
		margin: 0;
		display:grid;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	.header {
		text-align: center;
		font-family: CasablancaAntique, monospace;
		width: 100%;
		font-size: 20vw;
	}
	.header-smaller {
		font-size: 3vw;
	}
</style>

<script>
	import '../styles/fonts.css';
</script>

<title>Archivum28</title>
<body>
	<header class="header">
		<div class="header-left">
			<h1>Archivum28</h1>
		</div>
		<div class="header-right">
			<button on:click={() => alert("Woops! Not yet!")}>Login</button>
		</div>
	</header>
	<div class="main"><slot /></div>
</body>

<style>
	body,
	button {
		font-family: CasablancaAntique, monospace;
	}
	body {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		margin: 0;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30px;
		margin: 10px 10px 10px 10px;
    }
	.header-left h1 {
        padding-top: 10px;
		margin: 0;
	}
	.header-right button {
		font-size: 30px;
		cursor: pointer;
		background-color: white;
		border: none;
	}
	.main {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
    /* :global(*) {
        outline: auto;
    } */
</style>

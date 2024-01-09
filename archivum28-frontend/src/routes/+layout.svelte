<script>
	import '../styles/fonts.css';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { json } from '@sveltejs/kit';
</script>

<title>Archivum28</title>
<body>
	<header class="header">
		<div class="header-title">
			<h1>Archivum28</h1>
		</div>
		<div class="header-left">
			<h1>Historia</h1>
		</div>
		<div class="header-left">
			<h1>Eventus</h1>
		</div>
		<div class="header-right">
			{#if $page.data.session}
				<button on:click={() => signOut()} class="button">Logout</button>
			{:else}
				<button on:click={() => signIn('github')}>Login</button>
			{/if}
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
		margin: 10px 10px 10px 10px;
	}
	.header-left,
	.header-title {
		font-size: 30px;
		/* padding-left: 20px; */
		margin-top: -30px;
	}
	.header-right {
		margin-top: -40px; /* Adjust this value to fine-tune the vertical alignment */
	}
	.header-right button {
		font-size: 30px;
		cursor: pointer;
		background-color: white;
		border: none;
		/* padding-top: */
	}
	.main {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (max-width: 800px) {
		.header {
			flex-direction: column; /* Stack items in a column on small screens */
		}
		.header-left {
			margin-top: -60px;
		}
		.header-right button {
			margin-top: 10px;
		}

		.header-right button {
			display: block; /* Display the button on small screens */
		}
	}
	/* :global(*) {
        outline: auto;
    } */
</style>

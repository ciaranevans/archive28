<script>
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


 <!-- <script>
	import { signIn, signOut } from "@auth/sveltekit/client"
	import { page } from "$app/stores"
	console.log($page.data.session)
  </script>
  
  <h1>SvelteKit Auth Example</h1>
  <p>
	{#if $page.data.session}
	  {#if $page.data.session.user?.image}
		<span
		  style="background-image: url('{$page.data.session.user.image}')"
		  class="avatar"
		/>
	  {/if}
	  <span class="signedInText">
		<small>Signed in as</small><br />
		<strong>{$page.data.session.user?.name ?? "User"}</strong>
		<img src={$page.data.session.user?.image} alt="blah">
	  </span>
	  <button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
	  <span class="notSignedInText">You are not signed in</span>
	  <button on:click={() => signIn("github")}>Sign In with GitHub</button>
	{/if}
  </p> -->

<script context="module">
	export const prerender = true;
</script>

<script>
	import Typewriter from 'svelte-typewriter';
	import Keys from '../lib/keyboard/index.svelte';	
</script>

<svelte:head>
	<title>MasKeyCustoms | Home</title>
</svelte:head>

<div class="content">
	<section>
		<!-- <h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
			
		</div>

		to your new<br />SvelteKit app
	</h1> -->
		<div>
			<Keys />
		</div>
		<Typewriter interval={100}>
			<h2>CUSTOMISED PREMIUM MECHANICAL KEYBOARDS</h2>
		</Typewriter>
<br />
		<!-- <Counter /> -->
	</section>
	<div class="content-text">
		<p>Stop punishing your fingers and give yourself an incredible typing experience.</p>
		<p>
			Maskey Custom keyboards are limited-edition, premium mechanical keyboards.
			<br /><br />Each keyboard is unique, with aesthetic design, typing sound, and high-quality
			accessories.
		</p>
	</div>
	<br />
	<br />
	<img src="demo_keyboard.jpg" alt="Get this now" />
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
	/* 
	h1 {
		width: 100%;
	} */

	h2 {
		font-weight: 500;
		color: var(--secondary-color);
		font-family: var(--font-mono);
		letter-spacing: 0.25rem;
		text-align: center;
	}

	/* .welcome {
		text-align: center;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
	.content img {
		width: 540px;
		margin: auto;
		display: block;
		height: auto;
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
	.content-text {
		width: 540px;
		margin: auto;
	}

	@media (max-width: 700px) {
				.content-text {
		width: 80%;
		margin: auto;
	}
	.content img {
		width: 95%;
	}
	}
</style>

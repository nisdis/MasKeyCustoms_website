<script context="module">
	  import Typewriter from "svelte-typewriter";
	import Keys from '../lib/keyboard/index.svelte';
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
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

		<!-- <Counter /> -->
	</section>
	<p>
		Stop punishing your fingers and give yourself an incredible typing experience.
	</p>
		<p> Maskey Custom
		keyboards are limited-edition, premium mechanical keyboards. 
	<br />Each keyboard is unique, with
		aesthetic design, typing sound, and high-quality accessories.
	</p>
	<img src="demo_keyboard.jpg" alt="Get this now" style="width: 100%;" />

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

	h2
 {
	font-weight: 500;
	color: var(--secondary-color);
	font-family: var(--font-mono);
	letter-spacing: 0.25rem;

}

	.welcome {
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
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
	/* .key {
		position: relative;
		top: 0;
		left: 0;
		width: 50px;
		height: 50px;
		border-radius: 16px;
		border: 0px;
		font-size: 20px;
		font-weight: bold;
		color: gray;
		background: conic-gradient(
				white 0%,
				white 5%,
				silver 16%,
				white 23%,
				white 24%,
				silver 28%,
				gray 34%,
				#666 50%,
				gray 65%,
				white 75%
			)
			transparent;
	}
	.key:before {
		content: attr(data-before);
		position: relative;
		display: block;
		top: 2px;
		left: 5px;
		width: 40px;
		height: 40px;
		border-radius: 16px;
		box-sizing: border-box;
		padding: 8px;
		font-size: 15px;
		font-family: Arial;
		font-weight: normal;
		box-shadow: inset 0 0 13px #fff, 0 0 13px #fff, rgb(224, 224, 224) 0px 0px 43px inset;
		background: linear-gradient(
				180deg,
				rgb(255, 255, 255) 16%,
				rgb(206, 206, 206) 92%,
				transparent 95%,
				rgb(206, 206, 206) 99%,
				rgb(206, 206, 206) 102%,
				rgb(206, 206, 206) 106%,
				rgb(206, 206, 206) 110%,
				rgb(206, 206, 206) 113%
			),
			linear-gradient(
					24.75deg,
					rgb(255, 255, 255) 33%,
					rgb(206, 206, 206) 37%,
					transparent 41%,
					rgb(206, 206, 206) 44%,
					rgb(206, 206, 206) 48%,
					rgb(206, 206, 206) 51%,
					rgb(206, 206, 206) 55%,
					rgb(206, 206, 206) 59%
				)
				transparent;
	} */
</style>

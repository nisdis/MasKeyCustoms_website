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
	<section class="top">
		<div class="inset-image">
			<div>
				<h1>Mas Key Cutoms</h1>

				<Typewriter interval={100}>

					<h2>CUSTOMISED PREMIUM MECHANICAL KEYBOARDS</h2>
				</Typewriter>
			</div>
			
			<div></div>
			<div></div>
			<div></div>
		</div>

		<div />

		<br />
		<!-- <Counter /> -->
	</section>
	<div class="content-text" />
	<br />
</div>

<section class="content-text">
	<h1>Why Mechanical Keyboards?</h1>
	<div>
		<Keys />
	</div>
	<p>Stop punishing your fingers and give yourself an incredible typing experience.</p>
	<em>p.s.  try and click those keys above</em>
</section>
<section class="content-text">
	<h1>What do we do?</h1>
	<p>Maskey Custom keyboards are limited-edition, premium mechanical keyboards.</p>
	<br />
	<img src="demo_keyboard.jpg" alt="Get this now" />

	<p>Each keyboard is unique, with aesthetic design, typing sound, and high-quality accessories.</p>
</section>
<section class="content-text">
	<h1>How do I get one?</h1>
	<p>
		Select from a premium range of keyboard and have a look at our <a href="/showcase">showcase</a>
	</p>
	<img src="https://miro.medium.com/max/1400/0*d6cJCcA9MonvAScY" alt="Get this now" />
	<br /><br />
</section>

<style>
	section.top {
		/* margin-top: 10vh ; */
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		flex: 1;
	}

	section.top h1 {
		color: var(--primary-color);
		/* width: 100%; */
	}

	.top h2 {
		font-weight: 500;
		max-width: 20rem;
		color: var(--pure-white);
		font-family: var(--font-mono);
		letter-spacing: 0.20rem;
		text-align: center;
		margin: 0 auto 0 auto;

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
	.inset-image {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-content: space-evenly;

		margin: 0 auto;
		width: 100%;
		height: 100vh;
		/* left: -50vw; */
		background: url('https://images.unsplash.com/photo-1610777319132-e369f7c703cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80')
			center center no-repeat;
		background-size: cover;
		/* box-shadow: inset 0px 0px 5px 10px rgba(130,130,130,0.5); */
	}
	img {
		width: 540px;
		max-width: 100%;
		margin: auto;
		display: block;
		height: auto;
	}
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: 0 auto 0 auto;
		line-height: 1;
	}
	.content-text {
		width: 540px;
		margin: auto;
	}

	@media (max-width: 800px) {
		.content-text {
			width: 90%;
			margin: auto;
		}
		.content img {
			width: 95%;
		}
		.inset-image {
			position: unset;
			width: 100%;
			height: 90vh;
			background-size: cover;
			box-shadow: inset 0px 0px 20px 3px rgba(130, 0, 0, 0.5);
		}
	}
</style>

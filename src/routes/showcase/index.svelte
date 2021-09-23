<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>
<script>
	const kbds = [
		{ title: '', image: 'kbd1.jpeg', text: '', color: 'darkpurple' },
		{ title: '', image: 'kbd2.jpeg', text: '', color: 'blue' },
		{ title: '', image: 'kbd3.jpeg', text: '', color: 'coral' },
		{ title: '', image: 'kbd5.jpeg', text: '', color: 'red' },
		{ title: '', image: 'kbd6.jpeg', text: '', color: 'mustard' }
	];
</script>

<svelte:head>
	<title>Customs</title>
</svelte:head>

<div class="wrapper x mandatory-scroll-snapping" dir="ltr">
	{#each kbds as { title, image, text, color }, i}
		<div class="child {color}">
			<div class="title">{title}</div>
			<img src="kbd/{image}" alt={image} />
			<p class="text">
				{text}
			</p>
			{#if !i}<h2>swipe &#8594;</h2>
			{/if}
		</div>
	{/each}
</div>

<style>
	*::after,
	*::before,
	* {
		box-sizing: border-box;
	}
	.wrapper {
		display: flex;
		/* overflow: auto; */
		/* outline: 1px dashed lightgray; */
		flex: none;
		/* max-width: var(--column-width); */
		margin: 0 auto;
		line-height: 1;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.wrapper.x {
		width: 100%;
		height: calc(100vh);
		flex-flow: row nowrap;
	}

	.x.mandatory-scroll-snapping {
		scroll-snap-type: x mandatory;
	}

	.wrapper > div {
		scroll-snap-align: center;
		flex: none;
	}

	.x.wrapper > div {
		width: 100%;
		height: calc(100vh);
	}

	.container {
		display: flex;
		/* flex-direction: row;
		flex-flow: row wrap; */
	}


	.child {
		scroll-snap-align: center;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		/* font-size: 36px; */
		color: white;
	}

	.child img {
		width: 100%;
		max-width: 720px;
	}
	.child h2 {
		color: white;
	}
	.child .title {
		font-size: 3rem;
		margin: 30px 0 10px;
		padding: 10px;
	}
	.child .text {
		font-size: 1rem;
		font-weight: 200;
		padding: 10px;
		color: white;
	}

	.child.teal {
		background: teal;
	}
	.child.black {
		background: black;
	}
	.child.coral {
		background: coral;
	}
	.child.purple {
		background: blueviolet;
	}
	.child.darkpurple {
		background: darkmagenta;
	}

	.child.blue {
		background: darkslateblue;
	}
	.child.red {
		background: indianred;
	}
	.child.mustard {
		background: darkorange;
	}

	@media (max-width: 700px) {
		.child .title {
			font-size: 2rem;
			margin-bottom: 5px;
		}
		.child .text {
			font-size: 0.9rem;
		}
	}
</style>

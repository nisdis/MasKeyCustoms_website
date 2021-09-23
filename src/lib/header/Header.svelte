<script>
	import { onMount } from 'svelte';

	import { fade, fly } from 'svelte/transition';
	let visible = false;
	import { page } from '$app/stores';
	let height = 16;
	let extNavwidth = 330;
	const showHideMenu = (e) => {
		e.preventDefault();
		visible = !visible;
		if (visible) {
			height = 100;
		} else {
			height = 16;
		}
	};
	const hideMenu = () => {
		visible = false;

		height = 0;
	};

	onMount(() => {
		let box = document.getElementById('helloMe');
		extNavwidth = 64 + box.clientWidth;
		// window.onresize = sizeTheKeyboard;

		// audio = new Audio('Mechanical-Keyboard-single-button-presses-4-www.FesliyanStudios.com.mp3');
	});
</script>

<header>
	<div class="ext-nav" style="height: {height}px;">
		{#if visible}
			<ul in:fly={{ y: -20, duration: 1000 }} out:fly={{ y: -50, duration: 500 }}>
				<li on:click={hideMenu} class:active={$page.path === '/'}>
					<a sveltekit:prefetch href="/"> MasKeyCustoms</a>
				</li>
				<li on:click={hideMenu} class:active={$page.path === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
				<li on:click={hideMenu} class:active={$page.path === '/todos'}>
					<a sveltekit:prefetch href="/todos">Todos</a>
				</li>
			</ul>
		{/if}
	</div>
	<div class="primary">
		<!-- <div class="corner">
			
		</div> -->
		<nav>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>

			<ul id="helloMe">
				<!-- <li on:click={showHideMenu}><a sveltekit:prefetch href="/">#</a></li> -->
				<li on:click={hideMenu} class:active={$page.path === '/'}>
					<a sveltekit:prefetch href="/"> MasKeyCustoms </a>
				</li>
				<li on:click={hideMenu} class:active={$page.path === '/customs'}>
					<a sveltekit:prefetch href="/showcase">Showcase </a>
				</li>
				<!-- <li class:active={$page.path === '/todos'}>
					<a sveltekit:prefetch href="/todos">Todos</a>
				</li> -->
			</ul>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</nav>
		<!-- <div class="corner">
		</div> -->
	</div>
</header>

<style>
	*::after,
	*::before,
	* {
		box-sizing: border-box;
	}
	header {
		position: fixed;
		display: flex;
		flex-direction: column;
		width: calc(100%);
		z-index: 100;
		box-sizing: border-box;
		left: 0px;
		top: 0px;

		margin: 0 auto 0 auto;
		/* justify-content: space-between; */
	}
	/*
	.corner {
		width: 3em;
		height: 3em;
	}

	 .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	.ext-nav ul {
		padding: 0;
		margin: 10px 0 0 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		/* justify-content: space-between; */
	}
	.ext-nav {
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		/* width: 330px; */
		width: calc(100%);
		background: var(--tertiary-color);
		height: 16px;
		transition: height 0.8s;
		color: var(--heading-color);
		box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.4);
		top: 0px;
		z-index: 0;
	}

	.ext-nav a {
		color: var(--heading-color);
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		z-index: 10;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
		margin-right: -1px;
		z-index: 10;
	}

	path {
		fill: var(--tertiary-color);
		/* box-shadow: 0 4px 3px -3px rgba(0, 0, 0, 0.7); */
	}

	.primary ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--tertiary-color);
		background-size: contain;
		box-shadow: 0 4px 2px -3px rgba(0, 0, 0, 0.2), 0 4px 2px -3px rgba(0, 0, 0, 0.2);
	}
	.primary li {
		position: relative;
		height: 100%;
	}

	.primary .active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		/* text-transform: uppercase; */
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	@media (max-width: 700px) {
		.ext-nav {
			/* position: relative;

			left: 4px; */
			z-index: 0;
		}
	}
</style>

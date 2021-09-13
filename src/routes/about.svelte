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

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<!-- A MECHANICAL KEYBOARD IS COMPRISED OF 5 MAJOR COMPONENTS:
1. THE CASE 2. PROGRAMMABLE PCB 3. MOUNTING PLATE 4. KEYSWITCH 5. KEY CAP
1. Customisable case: Give your
mechanical keyboard a
personalised look and feel 2. Programmable PCB: Dictate
the functions your keyboard performs based on your usage and preferences 3. Mounting plate: Choose from
a range of typing sounds to be produced while you work 4. Keyswitch: Customise how the
keyboard feels when you type -
linear, tactile, or clicky 5. Key cap: Show off your
personal style and colour choices! -->

	<h1>What is a mechanical keyboard?</h1>

	<h4>A mechanical keyboard is comprised of 5 major components:</h4>
	<ol>
		<li>The case</li>
		<li>Programmable pcb</li>
		<li>Mounting plate</li>
		<li>Keyswitch</li>
		<li>Key cap</li>
	</ol>

	<img src="keyboard_1.jpg" alt="Welcome" />

	<p>
		1. Customisable case: Give your
mechanical keyboard a
personalised look and feel
	</p>
	<p>
		2. Programmable PCB: Dictate
the functions your keyboard performs based on your usage and preferences
	</p>
	<p>
		3. Mounting plate: Choose from
a range of typing sounds to be produced while you work
	</p>
	<p>
		4. Keyswitch: Customise how the
keyboard feels when you type -
linear, tactile, or clicky
	</p>
	<p>
		5. Key cap: Show off your
personal style and colour choices! 
	</p>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		line-height: 1;
	}
	img{
		width: 100%;
	}
</style>

<script>
	import { onMount } from 'svelte';

	import './keymason/style.css';
	export let keyboardSize = 'small';

	let textToCap = 'MAS KEY CUSTOMS';
	let allWords = textToCap.split(' ');
	let keySize = 0.55;
	let audio;
	let symbolPosition = ' top left ';
	let symbolSize = 'small';
	let deviceWidth;

	const handleClick = () => {
		if (audio) audio.play();
	};

	const sizeTheKeyboard = () => {
		let box = document.querySelector('div');
		deviceWidth = box.clientWidth;
		if (keyboardSize === 'big' || deviceWidth > 700) {
			symbolSize = 'large';
			keySize = 1;
		} else {
			symbolSize = 'small';
			keySize = 0.55;
		}
	};
	onMount(() => {
		sizeTheKeyboard();
		window.onresize = sizeTheKeyboard;

		audio = new Audio('Mechanical-Keyboard-single-button-presses-4-www.FesliyanStudios.com.mp3');
	});
</script>

<div id="keyboard" class="selectable">
	{#each allWords as word, j}
		<k-row>
			{#if j === 0}
				{#each [1, 3, 4] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class={`${symbolPosition} ${symbolSize}`} />
					</k-cap>
				{/each}
			{/if}
			{#if j === 1}
				{#each [1, 3, 4] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class={`${symbolPosition} ${symbolSize}`} />
					</k-cap>
				{/each}
			{/if}
			{#if j === 2}
				<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
					<k-legend class={`${symbolPosition} ${symbolSize}`} />
				</k-cap>
			{/if}
			{#each [...word] as letter, i}
				<k-cap
					on:mousedown={handleClick}
					class={i === 0 ? 'geek' : 'geek'}
					style={`--w:${keySize};--h:${keySize}`}
				>
					<k-legend class={`${symbolPosition} ${symbolSize}`}>{letter}</k-legend>
				</k-cap>
			{/each}
			{#if j === 0}
				{#each [0, 1, 2] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class={`${symbolPosition} ${symbolSize}`} />
					</k-cap>
				{/each}
			{/if}
			{#if j === 1}
				{#each [1, 2, 3] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class={`${symbolPosition} ${symbolSize}`} />
					</k-cap>
				{/each}
			{/if}
			{#if j === 2}
				{#each [3] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class={`${symbolPosition} ${symbolSize}`} />
					</k-cap>
				{/each}
			{/if}
		</k-row>
	{/each}
</div>

<style>
	#keyboard {
		padding: 0;
		background: none;
	}
	k-row > k-cap {
		margin-bottom: 0;
	}
	.selectable :not(k-cap) > k-cap:hover {
		cursor: pointer;
		--outline: 2px solid var(--secondary-color);
		--lightest: var(--lighter) !important;
	}
	k-legend {
		padding: 0;
	}
</style>

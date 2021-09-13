<script>
import { onMount } from 'svelte';

import './keymason/style.css';
	let textToCap = 'MAS KEY CUSTOMS';
	let allWords = textToCap.split(' ');
	let cats = [...'MAS KEY CUSTOMS'];
	let keySize = 0.55;
	let audio;
	
	onMount(() => {
		
		 audio = new Audio('Mechanical-Keyboard-single-button-presses-4-www.FesliyanStudios.com.mp3');



});	
function handleClick() {
	
	if(audio)
	audio.play();
}	
</script>

<div id="keyboard" class="selectable">
	{#each allWords as word, j}
		<k-row>
            {#if j === 0}
				{#each [ 3, 4] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class="top left small" />
					</k-cap>
				{/each}
			{/if}
			{#if j === 1}
            {#each [3, 4] as letter, i}
            <k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
                <k-legend class="top left small" />
            </k-cap>
        {/each}
			{/if}
			{#if j === 2}
				<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
					<k-legend class="top left small" />
				</k-cap>
				<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
					<k-legend class="top left small" />
				</k-cap>
			{/if}
			{#each [...word] as letter, i}
				<k-cap on:mousedown={handleClick}  class={i === 0 ? 'dolch' : 'geek'} style={`--w:${keySize};--h:${keySize}`}>
					<k-legend class="top left small">{letter}</k-legend>
				</k-cap>
			{/each}
			{#if j === 0}
				{#each [0, 1, 2, 3] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class="top left small" />
					</k-cap>
				{/each}
			{/if}
			{#if j === 1}
				{#each [1, 2, 3, 4] as letter, i}
					<k-cap class={'geek'} style={`--w:${keySize};--h:${keySize}`}>
						<k-legend class="top left small" />
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

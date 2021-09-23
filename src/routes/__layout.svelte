<script>
	import Header from '$lib/header/Header.svelte';
	import { svg_element } from 'svelte/internal';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>
		<a target="_blank" href="mailto:maskeycus@gmail.com"
			><img src="email.svg" alt="Email" />
		</a>&nbsp;&nbsp;
		<a target="_blank" href="https://www.instagram.com/maskey_customs/">
			<img src="instagram.svg" alt="Instagram" /></a
		>
	</p>
</footer>

<style>
	*::after, *::before, * {
	box-sizing:border-box;
}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		/* height: 120%; */
		/* overflow-x: scroll; */
		/* max-width: 1024px; */
		margin: 0px auto 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 40px;
		/* background: linear-gradient( */
			/* 180deg, */
			/* rgba(236, 247, 145, 0.5) 0.45%, */ /* #446a87 35.35% */ /* #446a87 35.35% */
				/* #6E3A07 0.35%,rgba(236, 247, 145, 0.7) 0.45%,
			/* #446a87 35.35%,  var(--tertiary-color)15.35% /* var(--text-color) 55.35% */
		/* ); */
		background-color: var(--tertiary-color);
	}

	footer a {
		font-family: var(--font-mono);
		font-weight: 100;
		color: var(--text-color);
	}

	footer p {
		font-weight: 100;
		color: antiquewhite;
	}

	footer img {
		/* vertical-align:text-top; */
		width: 2rem;
	}

	@media (max-width: 480px) {
		footer {
			padding: 10px 0px 0 0;
			background: var(--tertiary-color) 5.35%;
			/* background: linear-gradient( */
				/* 180deg, */
				/* rgba(236, 247, 145, 0.5) 0.45%, */ /* #446a87 35.35% */ /* #446a87 35.35% */
					/* #6E3A07 0.35%,  rgba(236, 247, 145, 0.7) 0.45%,
				/* #446a87 35.35%,  var(--tertiary-color) 5.35% /* var(--text-color) 55.35% */
			/* ); */
		}
		footer img {
			/* vertical-align:text-top; */
			width: 1rem;
		}
	}
</style>

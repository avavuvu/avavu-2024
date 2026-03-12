<script lang="ts">
    import type { ModalOptions } from "./games/crossword/types";



	export let modalOptions: ModalOptions = {showModal: false}

	let dialog: HTMLDialogElement

	$: {
		if (dialog && modalOptions.showModal) dialog.showModal();
	}

	const close = () => {
		dialog.close()
		modalOptions.showModal  = false
		if(modalOptions.callback) {modalOptions.callback()}
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (modalOptions.showModal = false)}
	on:click|self={() => dialog.close()}
>
	
	<button class="close-button" on:click={close}>&#10006;</button>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="dialog-contents" on:click|stopPropagation>
		<div>
			<slot name="header" />
			<hr />
			<slot />
			<hr />
			<!-- svelte-ignore a11y-autofocus -->
			<button class="confirm-button" autofocus on:click={close}>
				<slot name="button-text"/>
			</button>
		</div>
	</div>
</dialog>

<style>
	.dialog-contents {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	dialog {
		min-width: 50%;
		min-height: 50%;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		border-radius: 20px;
  		box-shadow: 0 0 #0000, 0 0 #0000, 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.17s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.98);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.confirm-button {
		background-color: blue;
		color: white;
		
		width: 100%;
		height: 3rem;
	}

	.close-button {
		margin: .5rem;
		font-family: "PTRootUI", Arial, Helvetica, sans-serif;
		font-size: 2rem;
		background-color: blue;
		color: white;
		width: 1.5rem;
		height: 1.5rem;
		font-size: 1rem;
		border-radius: 20px;
	}

	button {
		display: block;
		all: unset;
		cursor: pointer;
		text-align: center;
	}
</style>

<script lang="ts">
    import type { Snippet } from "svelte";

    let { 
			showModal = $bindable(false), 
			children, 
			confirmText = "Okay",
		 	onclick 
		} :	{ 
			showModal: boolean,
			children: Snippet,
			confirmText?: string
			onclick?: Function
    } = $props()

    let dialog: HTMLDialogElement

    $effect(() => {
        if(!dialog) { return }

        if(showModal) {
            dialog.showModal()
        }else {
			dialog.close()
		}

    })
	

</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<dialog
    bind:this={dialog}
    onclick={() => {
		dialog.close()
	}}
	onclose={() => (showModal = false)}
    >

    {@render children()}

	<div class="button-container">
		<!-- svelte-ignore a11y_autofocus -->
		<button autofocus onclick={() => {
			dialog.close()

			if(onclick) {
				onclick()
			}}}>
			{confirmText}

		</button>
	</div>

</dialog>

<style>
	.button-container {
		margin-top: 2rem;
		justify-content: center;
		display: flex;
		align-items: center;
	}

	button {
		width: 10rem;
		height: 4rem;
		color: white;
		background-color: blue;
		border: none;
		font-size: large;
		border-radius: .3rem;
	}

	button:hover {
		background-color: rgb(8, 8, 187);
	}

	dialog {
		width: min(80%, 65ch);
		border-radius: 0.2em;
		bottom: 10%;
		border: none;
		padding: 0;
		padding: 1em;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
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
	button {
		display: block;
	}
</style>
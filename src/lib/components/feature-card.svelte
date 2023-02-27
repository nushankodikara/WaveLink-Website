<script>
	export let src = '';
	export let alt = '';
	export let title = '';
	export let description = '';
</script>

<div class="p-4 w-full md:w-1/3 flex flex-col items-center text-center md:text-left md:items-start">
	<lord-icon
		{src}
		trigger="loop"
		state="loop"
		colors="primary:#121331,secondary:#0ea5e9"
		class="s-y_bCXRrkrYfP w-24 h-24"
	/>
	<h2 class="text-2xl">{title}</h2>
	<p class="font-light ">{description}</p>
</div>

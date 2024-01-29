<script>
	import '../app.scss';
	import '../app.postcss';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<meta name="title" content="Wave-Link | The Key To A Universe Of Possibilities" />
	<meta
		name="description"
		content="With Wavelink, you can easily make international payments, receive funds, manage digital operations, and access capital, opening up a world of possibilities."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://wavelinkpay.com/" />
	<meta property="og:title" content="Wave-Link | The Key To A Universe Of Possibilities" />
	<meta
		property="og:description"
		content="With Wavelink, you can easily make international payments, receive funds, manage digital operations, and access capital, opening up a world of possibilities."
	/>
	<meta property="og:image" content="/metaImage.png" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://wavelinkpay.com/" />
	<meta property="twitter:title" content="Wave-Link | The Key To A Universe Of Possibilities" />
	<meta
		property="twitter:description"
		content="With Wavelink, you can easily make international payments, receive funds, manage digital operations, and access capital, opening up a world of possibilities."
	/>
	<meta property="twitter:image" content="/metaImage.png" />
</svelte:head>

<nav
	class="flex flex-col md:flex-row md:justify-around items-center py-4 fixed w-full bg-white z-50 gap-2"
>
	<div>
		<a id="icon" href="/" class="flex flex-row gap-4"
			><img src="/images/icononly_transparent_nobuffer.png" style="height: 50px;" alt="" />
			<div>
				<h2 class="text-3xl font-medium text-sky-500">WAVE-LINK</h2>
				<small class="text-xs">Global Payment Processing</small>
			</div></a
		>
	</div>
	<a href="/register" class="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg"
		>Create an Account</a
	>
</nav>

<slot />

<footer class="flex flex-row w-full gap-4 justify-center py-12 bg-white">
	<p class=" font-light">
		&#xa9; 2024 Wavelink. All rights reserved. <span class="text-gray-400"
			>Powered by Euro Exim Bank Ltd</span
		>
	</p>
	<div class="flex flex-row gap-4">
		<a href="https://www.facebook.com/wavelinkpay">
			<i class="fab fa-facebook-f hover:text-sky-600" />
		</a>
		<a href="https://www.linkedin.com/company/wave-eeb/">
			<i class="fab fa-linkedin-in hover:text-sky-600" />
		</a>
	</div>
</footer>

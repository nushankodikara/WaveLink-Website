<script>
	// @ts-ignore
	import FeatureCard from '$lib/components/feature-card.svelte';
</script>

<div class="flex flex-col items-center gap-32 p-4 pt-48">
	<!-- Hero -->
	<div class="w-full h-full flex flex-col-reverse md:flex-row justify-end p-4">
		<div
			class="flex flex-col w-full md:w-1/2 md:max-w-md gap-16 p-8 md:p-0 text-center md:text-left items-center md:items-start"
		>
			<h2 class="text-2xl sm:text-3xl md:text-4xl font-bold">
				The Key To A Universe Of Possibilities
			</h2>
			<p class="md:text-justify">
				Your Wavelink account is the key that opens a world of possibilities. Wavelink connects your
				business to the world, whether it’s making international payments, receiving funds, managing
				your digital business, or accessing capital.
			</p>
			<a
				href="/register"
				class="py-2 px-4 rounded-lg bg-sky-500 hover:bg-sky-400 text-white w-full md:w-1/2 text-center"
				>Join us Today</a
			>
		</div>
		<div class="w-full md:w-1/2 items-center flex flex-col justify-center">
			<img class="md:w-1/2" src="/images/hero-image.jpg" alt="" />
		</div>
	</div>

	<!-- Features -->
	<div class="flex flex-col md:flex-row flex-wrap max-w-4xl">
		<FeatureCard
			src="https://cdn.lordicon.com/qhviklyi.json"
			title="Much Affordable"
			description="Avoid high currency exchange conversion rates with Wavelink. No exchange fee during processing"
		/>
		<FeatureCard
			src="https://cdn.lordicon.com/vaeagfzc.json"
			title="No Currency Fee"
			description="Receive money from all over the world without currency fees"
		/>
		<FeatureCard
			src="https://cdn.lordicon.com/itmmouju.json"
			title="Versatile"
			description="Pay your suppliers from any currency"
		/>
		<FeatureCard
			src="https://cdn.lordicon.com/cjieiyzp.json"
			title="Local Support"
			description="Transfer your money to your local bank accounts"
		/>
		<FeatureCard
			src="https://cdn.lordicon.com/yeallgsa.json"
			title="No hidden fees"
			description="You will not receive any hidden fee by using any of our services"
		/>
	</div>

	<!-- Big Card -->
	<div
		style="background-image: url('/images/pattern 1.jpg'); background-position:center; background-size:cover"
		class="flex flex-col md:flex-row text-center md:text-left items-center justify-center px-8 py-16 gap-16 max-w-6xl rounded-lg shadow hover:shadow-lg"
	>
		<img
			src="/gif/exchange.gif"
			class="w-64"
			style="mix-blend-mode: darken; filter:hue-rotate(30deg);"
			alt=""
		/>
		<div class="w-full md:w-1/2 flex flex-col gap-4">
			<h2 class="text-3xl md:text-5xl font-bold">Avoid Extra Fees for Currency Exchange</h2>
			<p>
				Avoid high currency exchange conversion rates with Wavelink. No exchange fee during
				processing
			</p>
		</div>
	</div>

	<!-- Easy to use -->
	<div class="flex flex-col md:flex-row p-4 max-w-4xl gap-8 text-center md:text-left">
		<div class=" flex flex-col gap-8">
			<h2 class="text-4xl font-bold">Easy functionality</h2>
			<p>
				Create an account from us or use your own bank account Run your business in any part of the
				world in few simple clicks Operate easily for any industry
			</p>
			<h2 class="text-4xl font-bold">Security</h2>
			<p>
				At our online payment platform, security is our top priority. We use state-of-the-art
				encryption technology to protect your personal and financial information, and we comply with
				all industry standards for online security. You can feel confident that your information is
				safe with us.
			</p>
		</div>
		<div class="flex flex-col gap-8">
			<h2 class="text-xl font-bold">Step 1 : Creating Account</h2>
			<p>Click on the Create Account button on the top of the page</p>
			<h2 class="text-xl font-bold">Step 2 : Fill the Form</h2>
			<p>Fill up the sign up form using your real details and mobile numbers which are in use</p>
			<a href="/register" class="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg"
				>Create an Account</a
			>
			<h2 class="text-xl font-bold">Step 3 : Approval</h2>
			<p>Wait until we reveiw your request and send the approval to your email inbox</p>
		</div>
	</div>

	<!-- Few Cards -->
	<div class="flex flex-col text-center max-w-4xl gap-8 p-4">
		<h2 class="text-5xl font-bold">Go Global With Wavelink</h2>
		<p>
			A comprehensive platform designed to meet the needs of today's cross-border seller. Pay from
			any of the world's, into leading marketplaces, pay your suppliers and manage multiple stores
			from a single location. Access working capital to reinvest in your business and withdraw
			earnings in your home currency at low interest rates.
		</p>
		<div class="flex flex-col md:flex-row gap-4">
			<div
				class="text-left w-full md:w-1/2 flex flex-col md:flex-row gap-4 px-8 py-4 bg-white shadow-md hover:shadow-lg items-center rounded-lg"
			>
				<img
					class="w-32 h-32"
					src="/gif/credit-card.gif"
					alt=""
					style="mix-blend-mode: darken; filter:hue-rotate(30deg);"
				/>
				<div class="flex flex-col gap-4">
					<h2 class="text-2xl font-bold">Debit Cards & Credit Cards</h2>
					<p>Make a payment anywhere in the world with any Visa and Mastercard.</p>
				</div>
			</div>
			<div
				class="text-left w-full md:w-1/2 flex flex-col md:flex-row gap-4 p-8 bg-white shadow-md hover:shadow-lg items-center rounded-lg"
			>
				<img
					class="w-32 h-32"
					src="/gif/money-bag.gif"
					alt=""
					style="mix-blend-mode: darken; filter:hue-rotate(30deg);"
				/>
				<div class="flex flex-col gap-4">
					<h2 class="text-2xl font-bold">Crypto to Fiat</h2>
					<p>
						Convert your digital assets into any currency of your choice to pay your bills,
						shopping, or cashing out from cryptocurrency investments.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Pricing -->
	<div class="flex flex-col items-center text-center gap-6">
		<img
			class="w-48 h-48"
			src="/gif/tag.gif"
			alt=""
			style="mix-blend-mode: darken; filter:hue-rotate(30deg);"
		/>
		<h2 class="text-4xl font-bold">Pricing</h2>
		<div class="gap-2">
			<p>International Rates Will be at <strong>5%</strong></p>
			<p>Domestic Rates Will Start From <strong>2.5%</strong></p>
		</div>
		<a href="/register" class="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg"
			>Create an Account</a
		>
	</div>
</div>

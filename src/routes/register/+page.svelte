<script>
	let card = 0;
	let showall = 0;

	let nextCard = () => {
		card++;
	};

	let prevCard = () => {
		card--;
	};

	let showAll = () => {
		showall = 1;
	};

	let hideAll = () => {
		showall = 0;
	};
</script>

<svelte:head>
	<title>Wave-Link | Register</title>
</svelte:head>

<br /><br /><br />

<form action="https://submit-form.com/gqyflXzr">
	<div class="card {showall == 1 || card == 0 ? '' : 'hide'}">
		<h2>Please Select Your Operating Country</h2>
		<div class="radioButton">
			<input type="radio" name="Country" id="individal" value="US" />
			<div>
				<h2>United States</h2>
				<!-- <h3>For freelanceres, sole traders and unregistered business</h3> -->
			</div>
		</div>
		<div class="radioButton">
			<input type="radio" name="Country" id="business" value="Business" />
			<div>
				<h2>Europe</h2>
				<!-- <h3>Your Business is registered and you have a Business Bank Account</h3> -->
			</div>
		</div>
		<div class="radioButton">
			<input type="radio" name="Country" id="business" value="Business" />
			<div>
				<h2>Africa</h2>
				<!-- <h3>Your Business is registered and you have a Business Bank Account</h3> -->
			</div>
		</div>
		<div class="radioButton">
			<input type="radio" name="Country" id="business" value="Business" />
			<div>
				<h2>India</h2>
				<!-- <h3>Your Business is registered and you have a Business Bank Account</h3> -->
			</div>
		</div>
		{#if showall == 0}
			<div class="buttons">
				<button on:click={prevCard} disabled>Back</button>
				<button on:click={nextCard}>Next</button>
			</div>
		{/if}
	</div>

	<div class="card {showall == 1 || card == 1 ? '' : 'hide'}">
		<h2>How would you like to accept payments with Euro Exim Bank?</h2>
		<div class="radioButton">
			<input type="radio" name="Payment Type" id="individal" value="Individual" />
			<div>
				<h2>As an individal</h2>
				<h3>For freelanceres, sole traders and unregistered business</h3>
			</div>
		</div>
		<div class="radioButton">
			<input type="radio" name="Payment Type" id="business" value="Business" />
			<div>
				<h2>As a registered business, non-profit or NGO</h2>
				<h3>Your Business is registered and you have a Business Bank Account</h3>
			</div>
		</div>
		{#if showall == 0}
			<div class="buttons">
				<button on:click={prevCard}>Back</button>
				<button on:click={nextCard}>Next</button>
			</div>
		{/if}
	</div>

	<div class="card {showall == 1 || card == 2 ? '' : 'hide'}">
		<h2>Personal Information</h2>
		<!-- Fullname and Email -->
		<div class="row">
			<div class="col">
				<label for="fullname">Your Full Name</label>
				<input type="text" name="Full Name" id="fullname" required />
			</div>
			<div class="col">
				<label for="email">Your Email Address</label>
				<input type="email" name="Email" id="email" required />
			</div>
		</div>
		<!-- Country and State -->
		<div class="row">
			<div class="col">
				<label for="country">What country are you from?</label>
				<input type="text" name="Country" id="country" required />
			</div>
			<div class="col">
				<label for="state">What state are you based on?</label>
				<input type="text" name="State" id="state" required />
			</div>
		</div>
		<!-- City and pin/zip code -->
		<div class="row">
			<div class="col">
				<label for="city">What city are you based on?</label>
				<input type="text" name="City" id="city" required />
			</div>
			<div class="col">
				<label for="zipcode">What is your PIN / ZIP code?</label>
				<input type="text" name="ZIP Code" id="zipcode" required />
			</div>
		</div>
		<!-- Contact Number -->
		<div class="row">
			<div class="col">
				<label for="contact">What is your contact number?</label>
				<input type="text" name="Contact Number" id="contact" required />
			</div>
		</div>
		{#if showall == 0}
			<div class="buttons">
				<button on:click={prevCard}>Back</button>
				<button on:click={nextCard}>Next</button>
			</div>
		{/if}
	</div>

	<div class="card {showall == 1 || card == 3 ? '' : 'hide'}">
		<h2>Business Information</h2>
		<!-- Registerd Business Name and Registered Address -->
		<div class="row">
			<div class="col">
				<label for="businessname">Registered business name</label>
				<input type="text" name="Business Name" id="businessname" required />
			</div>
			<div class="col">
				<label for="registeredaddress">Registered address</label>
				<input type="text" name="Registered Address" id="registeredaddress" required />
			</div>
		</div>
		<!-- Business Address and Website URL -->
		<div class="row">
			<div class="col">
				<label for="businessaddress">Business address</label>
				<input type="text" name="Business Address" id="businessaddress" required />
			</div>
			<div class="col">
				<label for="websiteurl">Website URL</label>
				<input type="text" name="Website URL" id="websiteurl" required />
			</div>
		</div>
		{#if showall == 0}
			<div class="buttons">
				<button on:click={prevCard}>Back</button>
				<button on:click={nextCard}>Next</button>
			</div>
		{/if}
	</div>

	<div class="card {showall == 1 || card == 4 ? '' : 'hide'}">
		<h2>Business Information</h2>
		<!-- Business Description in a textarea -->
		<div class="row">
			<div class="col">
				<label for="businessdescription">Business description</label>
				<textarea
					name="Business Description"
					id="businessdescription"
					cols="60"
					rows="5"
					required
				/>
			</div>
		</div>

		<h2>What's Your role at this company?</h2>
		<div class="radioButton">
			<input
				type="radio"
				name="Job Role"
				id="administrator"
				value="Company Administrator / Senior Manager"
			/>
			<div>
				<h2>Company Administrator / Senior Manager</h2>
			</div>
		</div>
		<!-- Employee / Contractor -->
		<div class="radioButton">
			<input type="radio" name="Job Role" id="employee" value="Employee / Contractor" />
			<div>
				<h2>Employee / Contractor</h2>
			</div>
		</div>
		<!-- Director / Owner -->
		<div class="radioButton">
			<input type="radio" name="Job Role" id="director" value="Director / Owner" />
			<div>
				<h2>Director / Owner</h2>
			</div>
		</div>
		<!-- Other -->
		<div class="radioButton">
			<input type="radio" name="Job Role" id="other" value="Other" />
			<div>
				<h2>Other</h2>
			</div>
		</div>
		<div class="buttons">
			{#if showall == 0}
				<button on:click={prevCard}>Back</button>
				<button on:click={showAll}>Next</button>
			{:else}
				<button on:click={hideAll}>Back</button>
				<button type="submit">Submit Application</button>
			{/if}
		</div>
	</div>
</form>

<style lang="scss">
	.hide {
		display: none !important;
	}
	form {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 5em;
		min-width: 400px;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		gap: 5em;

		.card {
			display: flex;
			flex-direction: column;
			gap: 1em;
			color: #343434;

			h2 {
				font-size: 1.5em;
				font-weight: 600;
				margin-bottom: 1em;
			}
			.radioButton {
				display: flex;
				flex-direction: row;
				align-items: center;
				gap: 3em;
				padding: 1em;
				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

				div {
					display: flex;
					flex-direction: column;

					h2 {
						margin: 0;
						font-size: 1.2em;
						font-weight: 600;
					}
					h3 {
						margin: 0.5em 0;
						font-size: 1em;
						font-weight: 400;
					}
				}
			}

			.row {
				display: flex;
				flex-direction: row;
				gap: 1em;

				.col {
					display: flex;
					flex-direction: column;
					gap: 0.5em;

					label {
						font-size: 1em;
						font-weight: 600;
					}
					input {
						padding: 1em;
						border: none;
						border-radius: 5px;
						box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
						min-width: 300px;
					}
					textarea {
						padding: 1em;
						border: none;
						border-radius: 5px;
						box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
						min-width: 600px;
					}
				}
			}

			.buttons {
				display: flex;
				justify-content: space-between;
				padding-top: 1em;

				button {
					padding: 1em 2em;
					border: none;
					border-radius: 5px;
					background-color: #343434;
					color: #fff;
					font-size: 1em;
					font-weight: 600;
					cursor: pointer;
				}

				button[disabled] {
					background-color: #ccc;
					cursor: not-allowed;
				}

				button:hover {
					background-color: $primary-color;
				}

				button[disabled]:hover {
					background-color: #ccc;
					cursor: not-allowed;
				}
			}
		}
	}
</style>

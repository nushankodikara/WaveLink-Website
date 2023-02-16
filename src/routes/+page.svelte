<script>
	let code001 = `const [currentUser] = useCurrentUser()\nconst [project] = useQuery({\n\tproject: { name: 'Build the thing' }\n})\nconst [transact, errors, syncing] = useTransact()\nconst [ids, dbAfter, dbBefore] = transact([{\n\ttodo: {\n\t\ttitle: 'Write more code',\n\t\tassignedTo: currentUser,\n\t\tproject\n\t}\n}])`;
</script>

<div class="page-content">
	<!-- Hero Section -->
	<div class="hero h-full">
		<div class="hero-left">
			<h1 class="hero-title">The Key To A Universe Of Possibilities</h1>
			<p class="hero-subtitle">
				Your Wavelink account is the key that opens a world of possibilities. Wavelink connects your
				business to the world, whether it’s making international payments, receiving funds, managing
				your digital business, or accessing capital.
			</p>
			<div class="input-group">
				<input class="input" type="text" placeholder="Enter your email address" />
				<button class="button">Get Started</button>
			</div>
		</div>
		<div class="hero-right">
			<img src="/images/hero-image.jpg" alt="hero" />
		</div>
	</div>

	<!-- Featured Cards Section -->
	<div class="featured h-full">
		<div class="row">
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/qhviklyi.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<h2 class="card-title">Much Affordable</h2>
				<p class="card-content">
					Avoid high currency exchange conversion rates with Wavelink. No exchange fee during
					processing
				</p>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/vaeagfzc.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<h2 class="card-title">No Currency Fee</h2>
				<p class="card-content">Receive money from all over the world without currency fees</p>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/itmmouju.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<h2 class="card-title">Versatile</h2>
				<p class="card-content">Pay your suppliers from any currency</p>
			</div>
		</div>
		<br />
		<div class="row">
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/cjieiyzp.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<h2 class="card-title">Local Support</h2>
				<p class="card-content">Transfer your money to your local bank accounts</p>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/yeallgsa.json"
					trigger="loop"
					state="loop"
					colors="primary:#32cccd,secondary:#121331"
				/>
				<h2 class="card-title">No hidden fees</h2>
				<p class="card-content">
					You will not receive any hidden fee by using any of our services.
				</p>
			</div>
			<div class="col" />
		</div>
	</div>

	<!-- Code showcase with testamonial description -->
	<!-- <div class="testacode">
		<h2>Built for devs</h2>
		<div class="row">
			<div class="col">
				<div class="testacode-description">
					<div class="testacode-user">
						<img
							src="//images.ctfassets.net/3s1s2vyeq3pi/1FL3JLg3lL8hePgwqyXdEC/7ccb0673606fca14e9e9687937a56e2e/ava_2x.png"
							alt=""
							class="testacode-user-img"
						/>
						<div class="testacode-user-description">
							<div class="testacode-user-position">
								James Tamplin <span class="text-gray">/ Co-founder &amp; CEO</span>
							</div>
							<div class="testacode-user-logo" style="height:35px">
								<img
									src="//images.ctfassets.net/3s1s2vyeq3pi/5fXfljJ6ZG7JR0S8XWigvP/8d4ad1d2745b532f48db51f7acca80d8/firebase_2x.png"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div class="testacode-content">
						<p>
							"Homebase is executing on the vision of data usage, portability, and management we had
							when building Firebase. We never got there. I'm excited!"
						</p>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="code-window">
					<div class="top-bar">
						<div class="function-icons">
							<span /><span /><span />
						</div>
						<div class="tab">
							<p>Todos.jsx</p>
						</div>
					</div>
					<div class="window">
						<code><pre>{code001}</pre></code>
					</div>
				</div>
			</div>
		</div>
	</div> -->

	<!-- Google Reviews Section -->
	<div class="google h-full">
		<h2>Google Reviews</h2>
		<div class="row">
			<div class="col">
				<div>
					<img src="/images/user.png" alt="user" />
					<h3 class="card-title">User Name</h3>
				</div>
				<div class="stars">
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
				</div>
				<p class="card-content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque autem voluptates ducimus
					ipsum! Magni
				</p>
			</div>
			<div class="col">
				<div>
					<img src="/images/user.png" alt="user" />
					<h3 class="card-title">User Name</h3>
				</div>
				<div class="stars">
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
				</div>
				<p class="card-content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque autem voluptates ducimus
					ipsum! Magni
				</p>
			</div>
			<div class="col">
				<div>
					<img src="/images/user.png" alt="user" />
					<h3 class="card-title">User Name</h3>
				</div>
				<div class="stars">
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
				</div>
				<p class="card-content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque autem voluptates ducimus
					ipsum! Magni
				</p>
			</div>
			<div class="col">
				<div>
					<img src="/images/user.png" alt="user" />
					<h3 class="card-title">User Name</h3>
				</div>
				<div class="stars">
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
				</div>
				<p class="card-content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque autem voluptates ducimus
					ipsum! Magni
				</p>
			</div>
			<div class="col">
				<div>
					<img src="/images/user.png" alt="user" />
					<h3 class="card-title">User Name</h3>
				</div>
				<div class="stars">
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
					<img src="/images/star.png" alt="rating" />
				</div>
				<p class="card-content">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque autem voluptates ducimus
					ipsum! Magni
				</p>
			</div>
		</div>
	</div>
	<!-- Cards Section -->
	<!-- <div class="cards h-full">
		<h2>Business Categories</h2>
		<div class="row">
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/hovbgwmd.json"
					trigger="loop"
					state="loop"
					colors="secondary:#32cccd,primary:#121331"
				/>
				<div>
					<h3 class="card-title">Sports</h3>
					<p class="card-content">
						Sports: Offer products and services for sports facilities, equipment, and events.
					</p>
				</div>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/rbwirkky.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<div>
					<h3 class="card-title">Clothing</h3>
					<p class="card-content">Offer wholesale clothing, design, and manufacturing services.</p>
				</div>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/iahpzgqp.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<div>
					<h3 class="card-title">Electronics</h3>
					<p class="card-content">Offer technology solutions and products for businesses.</p>
				</div>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/mhsepwkf.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<div>
					<h3 class="card-title">Toys</h3>
					<p class="card-content">Provide wholesale toy distribution and manufacturing services.</p>
				</div>
			</div>
			<div class="col">
				<lord-icon
					src="https://cdn.lordicon.com/qhgmphtg.json"
					trigger="loop"
					state="loop"
					colors="primary:#121331,secondary:#32cccd"
				/>
				<div>
					<h3 class="card-title">Consumer Goods</h3>
					<p class="card-content">
						Offer wholesale distribution and manufacturing of household items and consumer goods.
					</p>
				</div>
			</div>
		</div>
	</div> -->

	<!-- Intergration Section -->
	<div class="intergration h-full">
		<div class="col" style="display: flex; flex-direction:row-reverse;  ">
			<img src="/gif/exchange.gif" alt="" />
		</div>
		<div class="col">
			<h2>Avoid Extra Fees for Currency Exchange</h2>
			<p>
				<strong> Avoid </strong> high currency exchange conversion rates with Wavelink. No exchange fee
				during processing
			</p>
		</div>
	</div>

	<!-- Easy to use Section -->
	<div class="easytouse h-full">
		<div class="col">
			<div class="card">
				<h2>Easy functionality</h2>
				<p>
					Create an account from us or use your own bank account Run your business in any part of
					the world in few simple clicks Operate easily for any industry
				</p>
				<hr />
				<h2>Security</h2>
				<p>
					At our online payment platform, security is our top priority. We use state-of-the-art
					encryption technology to protect your personal and financial information, and we comply
					with all industry standards for online security. You can feel confident that your
					information is safe with us.
				</p>
			</div>
		</div>
		<div class="col">
			<div class="smallcard">
				<h2>Step 1 : Creating Account</h2>
				<p>Click on the Create Account button on the top of the page</p>
			</div>
			<div class="smallcard">
				<h2>Step 2 : Fill the Form</h2>
				<p>Fill up the sign up form using your real details and mobile numbers which are in use</p>
			</div>
			<div class="smallcard">
				<h2>Step 3 : Approval</h2>
				<p>Wait until we reveiw your request and send the approval to your email inbox</p>
			</div>
		</div>
	</div>

	<!-- Poweredby Section -->
	<div class="poweredby h-full">
		<div class="row">
			<div class="heading">
				<h2>Go Global With Wavelink</h2>
				<p>
					A comprehensive platform designed to meet the needs of today's cross-border seller. Pay
					from any of the world's, into leading marketplaces, pay your suppliers and manage multiple
					stores from a single location. Access working capital to reinvest in your business and
					withdraw earnings in your home currency at low interest rates.
				</p>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="icon">
					<img src="/gif/credit-card.gif" alt="" />
				</div>
				<div class="text">
					<h2>Debit Cards & Credit Cards</h2>
					<p>Make a payment anywhere in the world with any Visa and Mastercard.</p>
				</div>
			</div>
			<div class="col">
				<div class="icon">
					<img src="/gif/money-bag.gif" alt="" />
				</div>
				<div class="text">
					<h2>Crypto to Fiat</h2>
					<p>
						convert your digital assets into any currency of your choice to pay your bills,
						shopping, or cashing out from cryptocurrency investments.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Pricing Section -->
	<div class="pricing h-full">
		<div class="icon">
			<img src="/gif/tag.gif" alt="" />
		</div>
		<h2>Pricing</h2>
		<p>
			International Rates Will be at <strong>5%</strong> <br /> Domestic Rates Will Start From
			<strong>2.5%</strong>
		</p>
		<button>Create an Account</button>
	</div>
</div>

<style lang="scss">
	div.page-content {
		scroll-snap-type: mandatory !important;
		.h-full {
			min-height: 75vh;
			scroll-snap-align: center;
		}
	}
	.hero-black {
		fill: black;
	}

	.about-black-fill {
		fill: #000;
		transition: fill 0.2s ease-out 0s;
	}

	.about-black-stroke,
	.about-white-stroke {
		stroke: #000;
		transition: stroke 0.2s ease-out 0s;
	}

	.about-gray-stroke {
		stroke: #d7e4e3;
		transition: stroke 0.2s ease-out 0s;
	}

	.fill-black {
		fill: #000;
		transition: fill 0.2s ease-out 0s;
	}

	.fill-white {
		fill: #fff;
		transition: fill 0.2s ease-out 0s;
	}

	.stroke-black {
		stroke: #000;
		transition: stroke 0.2s ease-out 0s;
	}

	.hero {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		height: 100vh;
		width: 75vw;
		gap: 2em;

		.hero-left {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;

			.hero-title {
				font-size: 5vw;
				font-weight: 800;
				color: $text-color;
			}

			.hero-subtitle {
				font-size: 1rem;
				font-weight: 400;
				color: $text-color;
			}

			.input-group {
				width: 100%;
				display: flex;
				flex-direction: row;

				.input {
					border-radius: 0.5rem 0 0 0.5rem;
					border: 1px solid $secondary-color;
					border-right: none;
					box-sizing: border-box;
					padding: 0.5rem 1rem;
					font-size: 1rem;
					color: $text-color;
					background-color: white;
					width: 100%;
				}

				.button {
					border-radius: 0 0.5rem 0.5rem 0;
					border: 1px solid $secondary-color;
					border-left: none;
					padding: 0.5rem 1rem;
					font-size: 1rem;
					color: $text-color;
					background-color: $secondary-color;
					width: 100%;
				}

				.button:hover {
					background-color: $tertiary-color;
				}

				.button:active {
					background-color: $tertiary-color;
				}

				.button:focus {
					outline: none;
				}

				.input:focus {
					outline: none;
				}

				.input::placeholder {
					color: $text-gray-color;
				}

				.input:focus::placeholder {
					color: $text-gray-color;
				}
			}
		}

		.hero-right {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;

			img {
				width: 100%;
				height: auto;
			}
		}
	}

	.featured {
		.row {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: space-evenly;
			width: 75vw;
			gap: 1.5em;
			align-items: baseline;

			.col {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 1em;

				lord-icon {
					width: 4rem;
					height: 4rem;
				}
			}
		}
	}

	.testacode {
		width: 75vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1em;

		h2 {
			font-size: 5vw;
			font-weight: 600;
			color: $text-color;
		}
		.row {
			display: flex;
			flex-direction: row;
			gap: 2em;

			.col:nth-child(1) {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 1em;
				width: 37.5vw;

				.testacode-description {
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					align-content: flex-start;
					align-items: flex-start;
					justify-content: flex-start;
					gap: 1em;

					.testacode-user {
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						align-content: center;
						justify-content: flex-start;
						align-items: stretch;

						.testacode-user-img {
							width: 4em;
							height: 4em;
							border-radius: 50%;
							margin-right: 1em;
						}

						.testacode-user-description {
							display: flex;
							flex-direction: column;
							flex-wrap: nowrap;
							align-content: flex-start;
							justify-content: flex-start;
							align-items: flex-start;

							.testacode-user-logo {
								img {
									height: 100%;
								}
							}
						}
					}

					.testacode-content {
						p {
							font-size: 1.2em;
							font-weight: 200;
							color: $text-color;
						}
					}
				}
			}

			.col:nth-child(2) {
				.code-window {
					width: 37.5vw;
					height: 100%;
					border-radius: 0.5rem;
					background-color: white;
					box-shadow: rgb(0 0 0 / 30%) 1px 1px 5px;

					.top-bar {
						display: flex;
						background-color: #f3f3f3;
						flex-wrap: nowrap;
						justify-content: flex-start;
						align-items: center;
						flex-direction: row;
						gap: 2em;
						padding: 0 1em;

						.function-icons {
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							justify-content: flex-start;
							align-items: flex-start;
							gap: 0.5em;

							span:nth-child(1) {
								width: 1em;
								height: 1em;
								border-radius: 50%;
								background-color: #ff5f56;
							}

							span:nth-child(2) {
								width: 1em;
								height: 1em;
								border-radius: 50%;
								background-color: #ffbd2e;
							}

							span:nth-child(3) {
								width: 1em;
								height: 1em;
								border-radius: 50%;
								background-color: #27c93f;
							}
						}

						.tab {
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							justify-content: flex-start;
							align-items: center;
							background-color: white;
							border-radius: 0.5em 0.5em 0 0;
							margin-top: 1em;
							height: 2.5em;
							padding: 0 1.5em;

							p {
								font-size: 14px;
								font-weight: 200;
								color: $text-color;
							}
						}
					}

					.window {
						width: 100%;
						padding: 1em;

						code pre {
							color: $text-color;
							font-family: monospace;
						}
					}
				}
			}
		}
	}

	.google {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		align-items: center;
		justify-content: flex-start;
		width: 75vw;

		h2 {
			font-size: 5vw;
			font-weight: 600;
			color: $text-color;
		}
		.row {
			display: flex;
			flex-direction: row;
			gap: 2em;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: space-around;
			align-items: stretch;
			align-content: flex-start;

			.col {
				flex: 1;
				min-width: 16em;
				background-color: white;
				padding: 2em;
				border-radius: 1em;
				border-color: rgb(255, 255, 255);
				box-shadow: rgb(0 0 0 / 6%) 8px 26px 92px;
				background-color: rgb(255, 255, 255);
				border-radius: 6px;
				transition: box-shadow 0.2s ease-out 0s, background-color 0.2s ease-out 0s;

				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				gap: 1em;

				img {
					width: 100px;
					height: 100px;
				}

				div {
					display: flex;
					flex-direction: row;
					gap: 2em;

					h3 {
						font-size: 1.5em;
						font-weight: 600;
						color: $text-color;
						font-weight: 300;
						text-transform: uppercase;
						// display: none;
					}

					p {
						font-size: 1em;
						font-weight: 200;
						color: $text-color;
					}
				}

				.stars {
					display: flex;
					flex-direction: row;
					justify-content: space-evenly;
					max-width: 100px;
					gap: 0;

					img {
						width: 20px;
						height: 20px;
					}
				}
			}

			.col:hover {
				box-shadow: rgb(0 0 0 / 11%) 8px 26px 92px;
			}
		}
	}

	.cards {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: center;
		align-items: center;
		justify-content: flex-start;
		width: 75vw;

		h2 {
			font-size: 5vw;
			font-weight: 600;
			color: $text-color;
		}
		.row {
			display: flex;
			flex-direction: row;
			gap: 2em;
			flex-wrap: wrap;
			justify-content: space-around;
			align-content: space-around;
			align-items: stretch;
			align-content: flex-start;

			.col {
				flex: 1;
				min-width: 16em;
				background-color: white;
				padding: 2em;
				border-radius: 1em;
				border-color: rgb(255, 255, 255);
				box-shadow: rgb(0 0 0 / 6%) 8px 26px 92px;
				background-color: rgb(255, 255, 255);
				border-radius: 6px;
				transition: box-shadow 0.2s ease-out 0s, background-color 0.2s ease-out 0s;

				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				gap: 1em;

				lord-icon {
					flex: 1;
					width: 150px;
					height: 150px;
				}

				div {
					flex: 4;
					display: flex;
					flex-direction: column;

					h3 {
						font-size: 1.5em;
						font-weight: 600;
						color: $text-color;
						font-weight: 300;
						text-transform: uppercase;
						// display: none;
					}

					p {
						font-size: 1em;
						font-weight: 200;
						color: $text-color;
					}
				}
			}

			.col:hover {
				box-shadow: rgb(0 0 0 / 11%) 8px 26px 92px;
			}
		}
	}

	.intergration {
		background-image: url('/images/pattern 1.jpg');
		background-position: center;
		background-size: cover;

		margin-top: 8em;
		justify-content: space-evenly;
		align-items: center;
		align-content: center;
		max-width: 900px;

		flex: 1;
		min-width: 16em;
		background-color: white;
		padding: 2em;
		border-radius: 1em;
		border-color: rgb(255, 255, 255);
		box-shadow: rgb(0 0 0 / 6%) 8px 26px 92px;
		background-color: rgb(255, 255, 255);
		border-radius: 6px;
		transition: box-shadow 0.2s ease-out 0s, background-color 0.2s ease-out 0s;

		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 1em;

		.col {
			flex: 1;
			width: 80%;
			img {
				width: 20em;
				height: 20em;
				border-radius: 50%;
				filter: brightness(0.977);
			}

			h2 {
				font-size: 3em;
			}
		}
	}

	.intergration:hover {
		box-shadow: rgb(0 0 0 / 11%) 8px 26px 92px;
	}

	.easytouse {
		display: flex;
		flex-direction: row;
		gap: 5em;
		width: 75vw;
		margin-top: 5em;

		.col {
			.card {
				position: sticky;
				top: 140px;
				h2 {
					font-size: 3.5vw;
				}
			}

			.smallcard {
				p {
					color: $text-gray-color;
				}
			}
		}
	}

	.poweredby {
		display: flex;
		flex-direction: column;
		gap: 3em;
		width: 75vw;
		margin-top: 10em;

		.row {
			display: flex;
			flex-direction: row;
			gap: 2em;

			.heading {
				display: flex;
				flex-direction: column;
				text-align: center;
				width: 100%;

				h2 {
					font-size: 3vw;
				}
			}
			.col {
				flex: 1;
				min-width: 16em;
				background-color: white;
				padding: 2em 2em;
				border-radius: 1em;
				border-color: rgb(255, 255, 255);
				box-shadow: rgb(0 0 0 / 6%) 8px 26px 92px;
				background-color: rgb(255, 255, 255);
				border-radius: 6px;
				transition: box-shadow 0.2s ease-out 0s, background-color 0.2s ease-out 0s;

				text-align: start;
				flex: 1;
				display: flex;
				gap: 1em;
				width: 45vw;
				flex-wrap: nowrap;
				align-content: flex-start;
				align-items: flex-start;
				justify-content: flex-start;

				.icon {
					width: 10em;

					img {
						width: 100%;
					}
				}

				.text {
					width: 100%;
				}
			}
		}
	}

	.pricing {
		margin-top: 10em;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;
		align-content: center;
		width: 75vw;

		img {
			width: 10em;
		}

		h2 {
			font-size: 5vw;
			font-weight: 600;
			color: $text-color;
			margin-bottom: 0;
		}

		p {
			font-size: 22px;
			max-width: 500px;
			text-align: center;
		}

		button {
			background-color: $primary-color;
			color: white;
			font-size: calc(16px);
			line-height: 20px;
			padding: 20px 28px;
			font-weight: 700;
			border-radius: 12px;
			letter-spacing: -0.02em;
			border: 0px;
			transition: background-color 0.2s ease-out 0s;
			display: inline-block;
		}

		button:hover {
			background-color: $secondary-color;
		}
	}

	// Media Queries

	@media screen and (max-width: 768px) {
		.hero {
			flex-direction: column-reverse;
			width: 100vw;
			gap: 2em;
			height: auto;
			padding-top: 2em;

			.hero-left,
			.hero-right {
				width: 80%;

				.input-group {
					width: 100%;
					flex-direction: column;
					gap: 1em;

					.input {
						border: 1px solid $secondary-color;
						border-radius: 0.5rem;
						width: 100%;
					}

					.button {
						border: 1px solid $secondary-color;
						border-radius: 0.5rem;
						width: 100%;
					}
				}
			}
		}

		.featured {
			.row {
				flex-direction: column;
				flex-wrap: nowrap;
				align-content: center;
				justify-content: flex-start;
				align-items: stretch;
				margin-top: 4em;
			}
		}

		.testacode {
			.row {
				flex-direction: column;

				.col:nth-child(1) {
					width: 80vw;
				}

				.col:nth-child(2) {
					.code-window {
						width: 80vw;
					}
				}
			}
		}

		.google {
			h2 {
				font-size: 2em;
			}
			.row {
				flex-direction: column;
				align-content: center;
				flex-wrap: wrap;
				align-items: stretch;

				.col {
					text-align: center;
					align-items: center;
					div {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
				}
			}
		}

		.cards {
			.row {
				flex-direction: column;
				align-content: center;
				flex-wrap: wrap;
				align-items: stretch;
			}
		}

		.intergration {
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			align-items: center;
			justify-content: flex-start;

			.col {
				width: 80%;
				flex-direction: column;
				align-items: center;
				img {
					width: 12em;
					height: 12em;
				}
			}
		}

		.easytouse {
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			justify-content: center;
			align-items: center;

			.col {
				.card {
					h2 {
						font-size: 2em;
					}
				}
			}
		}

		.poweredby {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			align-items: center;

			.row {
				flex-direction: column;
				gap: 1em;
				.heading {
					h2 {
						font-size: 2em;
					}
				}
				.col {
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					align-content: center;
					align-items: center;
					justify-content: flex-start;

					width: 75vw;
					text-align: center;

					.icon {
						width: 100px;
						height: 100px;
					}
				}
			}
		}

		.pricing {
			h2 {
				font-size: 2em;
			}
		}
	}
</style>

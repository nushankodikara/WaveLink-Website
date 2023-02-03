<script>
	import '../app.scss';
	import '../app.scss';
	import '../app.scss';
	import '../app.scss';
</script>

<nav>
	<div id="brand">
		<a href="/">homebase</a>
		<div id="links">
			<a href="/">Documentation</a>
			<a href="/about">Blog</a>
		</div>
	</div>
	<div id="cta">
		<a href="#" class="btn">Request early access</a>
	</div>
</nav>

<slot />
<br /><br />
<hr />
<footer>
	<div class="row">
		<div class="col">
			<svg
				viewBox="0 0 181 181"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="sc-1h7lakq-0 cjZJRl"
				><path
					d="M30.5769 61.4618C47.5175 60.6398 61 46.6444 61 29.5C61 13.4838 73.9837 0.500013 90 0.500011L151 0.5C167.016 0.499997 180 13.4837 180 29.5C180 45.5163 167.016 58.5 151 58.5L90 58.5C89.7626 58.5 89.526 58.5149 89.2923 58.5448C72.4486 59.4307 59.0565 73.3416 59.0007 90.3929C59.0005 90.4097 59.0003 90.4266 59.0002 90.4435C59.0001 90.4623 59 90.4812 59 90.5L59.0002 90.5432L59.0006 90.5864C59.0459 107.726 72.5657 121.697 89.5257 122.467C89.6822 122.489 89.8409 122.5 90.0005 122.5C106.017 122.5 119 135.484 119 151.5C119 167.516 106.017 180.5 90.0005 180.5C73.9842 180.5 61.0005 167.516 61.0005 151.5C61.0005 151.478 61.0004 151.456 61.0003 151.434C61.0002 151.417 61 151.4 60.9998 151.383C60.9389 134.375 47.6094 120.494 30.8229 119.551C30.551 119.517 30.2759 119.5 30 119.5C13.9837 119.5 1 106.516 1 90.5C0.999997 74.4838 13.9837 61.5 30 61.5C30.1937 61.5 30.3866 61.4873 30.5769 61.4618Z"
					class="fill-black"
				/><circle cx="29" cy="29.5" r="29" fill="#F5FF80" /><circle
					cx="91"
					cy="90.5"
					r="29"
					fill="#F5FF80"
				/><circle cx="29" cy="151.5" r="29" fill="#D7E4E3" /><circle
					cx="152"
					cy="90.5"
					r="29"
					fill="#D7E4E3"
				/></svg
			>
		</div>
		<div class="col">
			<h4 class="footer-link-title">Resources</h4>
			<div class="footer-links">
				<a href="#" class="footer-link">Homebase React</a>
				<a href="#" class="footer-link">Documentation</a>
				<a href="#" class="footer-link">Support</a>
			</div>
		</div>
		<div class="col">
			<h4 class="footer-link-title">Legal</h4>
			<div class="footer-links">
				<a href="#" class="footer-link">Privacy Policy</a>
				<a href="#" class="footer-link">Terms of Service</a>
			</div>
		</div>
		<div class="col">
			<h4 class="footer-link-title">Company</h4>
			<div class="footer-links">
				<a href="#" class="footer-link">Blog</a>
				<a href="#" class="footer-link">Contact Us</a>
			</div>
		</div>
	</div>
	<div class="row" style="align-items: center;">
		<div class="col">
			<p class="footer-copyright-text">&#xa9; 2020 Homebase.io. All rights reserved.</p>
		</div>
		<div class="col">
			<div class="footer-social-icons">
				<a href="#" class="social-icon">
					<i class="fab fa-facebook-f" />
				</a>
				<a href="#" class="social-icon">
					<i class="fab fa-instagram" />
				</a>
				<a href="#" class="social-icon">
					<i class="fab fa-linkedin-in" />
				</a>
				<a href="#" class="social-icon">
					<i class="fab fa-twitter" />
				</a>
			</div>
		</div>
		<div class="col" />
	</div>
</footer>

<style lang="scss">
	.fill-black {
		fill: black;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 3em 2em 1em 2em;
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: white;

		#brand {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: baseline;
			justify-content: flex-start;
			gap: 2em;

			a {
				font-size: 2.5vw;
				font-weight: 400;
				color: $text-color;
				text-decoration: none;
			}

			#links {
				a {
					font-size: 1em;
					font-weight: 200;
					color: $text-color;
					text-decoration: none;
					margin: 0 1rem;
				}

				a:hover {
					color: $text-gray-color;
				}
			}
		}

		#cta {
			white-space: nowrap;
			a {
				font-size: 1em;
				font-weight: 400;
				color: white;
				text-decoration: none;
				padding: 0.5rem 1rem;
				background-color: $text-color;
				border-radius: 0.5rem;
			}

			a:hover {
				background-color: $text-gray-color;
				color: $text-color;
			}
		}
	}

	footer {
		padding: 2rem 5rem;

		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;

		.row {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			margin-bottom: 2em;

			.col {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				svg {
					width: 60%;
				}

				.footer-link-title {
					font-size: 1.2rem;
					font-weight: 600;
					color: $text-color;
					margin-bottom: 1em;
				}

				.footer-links {
					width: 100%;
					display: flex;
					flex-direction: column;
					justify-content: flex-start;
					align-items: flex-start;
					align-content: flex-start;
					flex-wrap: nowrap;

					.footer-link {
						font-size: 1rem;
						font-weight: 400;
						color: $text-gray-color;
						text-decoration: none;
						margin-bottom: 0.5em;
					}

					.footer-link:hover {
						color: $tertiary-color;
					}
				}

				.footer-copyright-text {
					font-size: 1rem;
					font-weight: 200;
					color: $text-gray-color;
				}

				.footer-social-icons {
					display: flex;
					justify-content: flex-start;
					align-items: center;

					.social-icon {
						font-size: 1.5rem;
						color: $text-color;
						margin-right: 1em;
					}

					.social-icon:hover {
						color: $tertiary-color;
					}
				}
			}
		}
	}

	// Media Queries

	@media (max-width: 768px) {
		footer {
			.row:nth-child(1) {
				flex-direction: column;
				gap: 1em;
				flex-wrap: wrap;
				align-content: flex-start;
				justify-content: flex-start;
				align-items: stretch;
			}

			.row:nth-child(2) {
				flex-direction: column-reverse;
				flex-wrap: nowrap;
				align-content: center;
				justify-content: flex-end;
			}
		}
	}
</style>

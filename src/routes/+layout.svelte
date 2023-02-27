<script>
	import '../app.scss';
	import '../app.scss';
	import '../app.scss';
	import '../app.scss';
</script>

<nav>
	<div id="brand">
		<a id="icon" href="/"
			><img src="/images/icononly_transparent_nobuffer.png" style="height: 50px;" alt="" />
			<div>
				<h2>WAVE-LINK</h2>
				<small>Global Payment Processing</small>
			</div></a
		>
		<div id="links">
			<!-- <a href="#">Documentation</a>
			<a href="#">Blog</a> -->
		</div>
	</div>
	<div id="cta">
		<a href="/register" class="btn">Create an Account</a>
	</div>
</nav>

<slot />
<br /><br />
<hr />
<footer>
	<!-- <div class="row">
		<div class="col">
			<img src="/gif/cheque.gif" alt="" />
		</div>
		<div class="col">
			<h4 class="footer-link-title">Resources</h4>
			<div class="footer-links">
				<a href="#" class="footer-link">About Wavelink</a>
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
	</div> -->
	<div class="row" style="align-items: center;">
		<div class="col">
			<p class="footer-copyright-text">&#xa9; 2023 Wavelink. All rights reserved.</p>
		</div>
		<div class="col">
			<div class="footer-social-icons">
				<a href="https://www.facebook.com/wavelinkpay" class="social-icon">
					<i class="fab fa-facebook-f" />
				</a>
				<a href="https://www.linkedin.com/company/wave-eeb/" class="social-icon">
					<i class="fab fa-linkedin-in" />
				</a>
				<!-- <a href="#" class="social-icon">
					<i class="fab fa-twitter" />
				</a> -->
			</div>
		</div>
		<div class="col" />
	</div>
</footer>

<style lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em 2em;
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: white;

		#brand {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: flex-start;
			gap: 2em;

			a {
				font-size: 2.5vw;
				font-weight: 400;
				color: $text-color;
				text-decoration: none;
			}

			#icon {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-around;
				gap: 0.5em;

				div {
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					align-items: flex-start;
					h2 {
						font-size: 1em;
						margin: 0;
						color: #0175bb;
					}
					small {
						font-size: 0.4em;
					}
				}
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
				background-color: $primary-color;
				border-radius: 0.5rem;
			}

			a:hover {
				background-color: $secondary-color;
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
			gap: 2em;

			.col {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				p {
					white-space: nowrap;
				}

				img {
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
		nav {
			flex-direction: column;
			gap: 1em;

			#brand {
				flex-direction: column;
				gap: 0.5em;
				align-items: center;

				a {
					font-size: 2em;
				}
			}
		}
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

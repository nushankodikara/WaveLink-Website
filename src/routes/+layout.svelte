<script>
	import '../app.scss';
</script>

<nav>
	<div id="nav_logo">
		<a href="/">
			<img src="/logo.png" alt="logo" />
		</a>
	</div>
	<div id="nav_links">
		<ul>
			<li><a class="active" href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</div>
	<div id="nav_cta">
		<a href="/contact">Contact Us</a>
	</div>
</nav>

<slot />

<footer>
	<p>&copy; 2022 - Wave Link</p>
</footer>

<style lang="scss">
	$primary-color: #048abf;
	$secondary-color: #ffffff;
	$tertiary-color: #0d0d0d;
	$active-color: #f2b705;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: $secondary-color;
		// box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

		#nav_logo {
			img {
				width: 100px;
			}
		}

		#nav_links {
			ul {
				display: flex;
				list-style: none;
				margin: 0;
				padding: 0;

				li {
					margin: 0 1rem;

					a {
						text-decoration: none;
						color: #000;
					}

					a:hover {
						color: $primary-color;
					}

					a.active {
						color: $primary-color;
					}
				}
			}
		}

		#nav_cta {
			a {
				padding: 0.5rem 1rem;
				background-color: #000;
				color: #fff;
				text-decoration: none;
				border-radius: 5px;
			}

			a:hover {
				background-color: $primary-color;
			}
		}
	}

	footer {
		padding: 1rem 2rem;
		text-align: center;
	}
</style>

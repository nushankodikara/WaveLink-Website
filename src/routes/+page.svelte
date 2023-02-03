<script>
	let code001 = `const [currentUser] = useCurrentUser()\nconst [project] = useQuery({\n\tproject: { name: 'Build the thing' }\n})\nconst [transact, errors, syncing] = useTransact()\nconst [ids, dbAfter, dbBefore] = transact([{\n\ttodo: {\n\t\ttitle: 'Write more code',\n\t\tassignedTo: currentUser,\n\t\tproject\n\t}\n}])`;
</script>

<div class="page-content">
	<!-- Hero Section -->
	<div class="hero h-full">
		<div class="hero-left">
			<h1 class="hero-title">The platform for local-first software</h1>
			<p class="hero-subtitle">
				Don’t write real-time APIs. Move your database to the browser. Homebase keeps local data in
				sync so you can build fast and collaborative React apps.
			</p>
			<div class="input-group">
				<input class="input" type="text" placeholder="Enter your email address" />
				<button class="button">Get Started</button>
			</div>
		</div>
		<div class="hero-right">
			<svg
				viewBox="0 0 500 500"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="sc-199nhm8-0 fwHbMa"
				><path
					d="M246 314C246 277.549 275.549 248 312 248C312.412 248 312.824 248.004 313.234 248.011C313.489 248.004 313.745 248 314 248C347.137 248 374 221.137 374 188L374 62C374 28.8629 347.137 2 314 2C280.863 2 254 28.8629 254 62V188C254 224.451 224.451 254 188 254C187.657 254 187.315 253.997 186.973 253.992C186.649 253.997 186.324 254 186 254C152.863 254 126 280.863 126 314C126 347.137 152.863 374 186 374C219.127 374 245.983 347.154 246 314.031C246 314.021 246 314.01 246 314Z"
					class="hero-black"
				/><ellipse
					rx="60"
					ry="60"
					transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 312 314)"
					fill="#F5FF80"
				/><circle r="60" transform="matrix(1 0 0 -1 188 188)" class="hero-black" /><circle
					r="60"
					transform="matrix(1 0 0 -1 188 62)"
					fill="#D7E4E3"
				/><rect
					width="248"
					height="120"
					rx="60"
					transform="matrix(1 -5.56363e-08 -5.56363e-08 -1 124 500)"
					fill="#D7E4E3"
				/><ellipse
					rx="59"
					ry="18"
					transform="matrix(1 0 0 -1 61 327)"
					class="stroke-black"
					stroke-width="4"
				/><ellipse
					rx="59"
					ry="18"
					transform="matrix(1 0 0 -1 61 291)"
					class="stroke-black"
					stroke-width="4"
				/><path
					d="M61 273C28.4152 273 2 264.941 2 255C2 245.059 28.4152 237 61 237"
					class="stroke-black"
					stroke-width="4"
				/><ellipse
					rx="59"
					ry="18"
					transform="matrix(1 0 0 -1 61 363)"
					class="stroke-black"
					stroke-width="4"
				/><path
					d="M61 417C28.4152 417 1.99999 408.941 2 399C2 389.059 28.4152 381 61 381"
					class="stroke-black"
					stroke-width="4"
				/><ellipse rx="60" ry="60" transform="matrix(1 0 0 -1 62 188)" fill="#F5FF80" /><path
					d="M3.00001 61C3.00001 28.4152 29.4152 1.99999 62 1.99999C94.5848 1.99999 121 28.4152 121 61C121 93.5848 94.5848 120 62 120"
					stroke="#D7E4E3"
					stroke-width="4"
				/><ellipse
					rx="26"
					ry="26"
					transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 62 61)"
					fill="#D7E4E3"
				/><ellipse cx="439.001" cy="174" rx="59" ry="18" stroke="#D7E4E3" stroke-width="4" /><path
					d="M439.001 156C471.586 156 498.001 147.941 498.001 138C498.001 128.059 471.586 120 439.001 120"
					stroke="#D7E4E3"
					stroke-width="4"
				/><ellipse
					cx="439.001"
					cy="212.5"
					rx="59"
					ry="18.5"
					stroke="#D7E4E3"
					stroke-width="4"
				/><path
					d="M439.001 267C471.586 267 498.001 258.941 498.001 249C498.001 239.059 471.586 231 439.001 231"
					stroke="#D7E4E3"
					stroke-width="4"
				/><path
					d="M380.001 61C380.001 93.5848 406.416 120 439.001 120C471.586 120 498.001 93.5848 498.001 61C498.001 28.4152 471.586 2 439.001 2"
					stroke="#D7E4E3"
					stroke-width="4"
				/><path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M440.943 469.042C439.93 451.728 425.568 438 408 438C391.984 438 379 425.016 379 409C379 392.983 391.984 380 408 380C424.016 380 437 392.984 437 409C437 410.671 437.161 412.359 437.539 413.974C440.347 429.329 453.782 440.971 469.941 441L470 441C486.016 441 499 453.983 499 470C499 486.016 486.016 499 470 499C453.984 499 441 486.016 441 470C441 469.679 440.981 469.359 440.943 469.042Z"
					fill="#F5FF80"
				/><ellipse
					cx="408"
					cy="471"
					rx="29"
					ry="29"
					transform="rotate(-90 408 471)"
					class="hero-black"
				/><circle cx="470" cy="408" r="29" transform="rotate(-90 470 408)" fill="#D7E4E3" /></svg
			>
		</div>
	</div>

	<!-- Featured Cards Section -->
	<div class="featured h-full">
		<div class="row">
			<div class="col">
				<svg
					width="59"
					height="62"
					viewBox="0 0 59 62"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="hze0b3-0 bvxHUP"
					><circle cx="13" cy="31" r="11" fill="#D7E4E3" /><ellipse
						cx="38.2863"
						cy="49.2857"
						rx="12.5714"
						ry="12.5714"
						fill="#D7E4E3"
					/><ellipse cx="42.8574" cy="16.1428" rx="16" ry="16" class="about-black-fill" /><path
						d="M40.3047 9.01892L47.2779 15.9921L40.3047 22.9653"
						stroke="black"
						stroke-width="2"
					/><path
						d="M40.3047 9.01892L47.2779 15.9921L40.3047 22.9653"
						class="about-gray-stroke"
						stroke-width="2"
					/><path
						d="M10.8955 26.39L15.583 31.0775L10.8955 35.7649"
						stroke="black"
						stroke-width="2"
					/><path
						d="M35.1816 43.8187L40.6815 49.3185L35.1816 54.8184"
						stroke="black"
						stroke-width="2"
					/><line x1="40" y1="49" x2="24" y2="49" stroke="black" stroke-width="2" /><line
						x1="46.2861"
						y1="16"
						x2="21.1433"
						y2="16"
						stroke="black"
						stroke-width="2"
					/><line
						x1="46.2861"
						y1="15.9999"
						x2="26.8576"
						y2="15.9999"
						class="about-gray-stroke"
						stroke-width="2"
					/><path d="M14 31L-7.15256e-07 31" stroke="black" stroke-width="2" /></svg
				>
				<h2 class="card-title">Faster than an API</h2>
				<p class="card-content">
					Changes are pushed to clients in real-time. Read and write local data instantly, cache it
					forever.
				</p>
			</div>
			<div class="col">
				<svg
					width="64"
					height="56"
					viewBox="0 0 64 56"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="sc-83p2w9-0 iQzDMv"
					><path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M49.3845 9.16391C57.5275 9.5866 64.0001 16.3231 64.0001 24.5714C64.0001 32.513 57.9999 39.0532 50.2856 39.9059V40H48.5716H32.5715H12H11.4285V39.9866C5.06646 39.6883 0 34.4358 0 28C0 21.3726 5.37258 16 12 16C12.3245 16 12.6459 16.0129 12.9639 16.0381C14.8022 6.89019 22.8822 0 32.5715 0C39.6237 0 45.8234 3.64999 49.3845 9.16391Z"
						fill="#D7E4E3"
					/><circle cx="32" cy="39" r="17" class="about-black-fill" /><path
						d="M31.7393 27L34.8696 30.1304L31.7393 33.2607"
						class="about-gray-stroke"
						stroke-width="2"
					/><path
						d="M33.2197 50.7803L30.3885 47.9491L33.2197 45.1179"
						class="about-gray-stroke"
						stroke-width="2"
					/><path
						d="M36.7368 31.3459C39.2958 32.933 41 35.7675 41 39C41 43.9706 36.9706 48 32 48H31.0526M27.2632 46.6541C24.7042 45.067 23 42.2325 23 39C23 34.0294 27.0294 30 32 30H33.4211"
						class="about-gray-stroke"
						stroke-width="2"
					/></svg
				>
				<h2 class="card-title">Easier than JSON</h2>
				<p class="card-content">
					Develop with a local database that's as capable as cloud DBs. Cut out your API and let
					homebase sync state and help you manage data flows.
				</p>
			</div>
			<div class="col">
				<svg
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="sc-106obd3-0 Sdegt"
					><circle cx="15" cy="49" r="15" class="about-black-fill" /><path
						d="M15 53H24"
						class="about-gray-stroke"
						stroke-width="2"
					/><path d="M8 44L13 48.5L8 53" class="about-gray-stroke" stroke-width="2" /><circle
						cx="49"
						cy="49"
						r="15"
						fill="#D7E4E3"
					/><path d="M49 53H58" stroke="black" stroke-width="2" /><path
						d="M42 44L47 48.5L42 53"
						stroke="black"
						stroke-width="2"
					/><ellipse
						cx="32"
						cy="5.5"
						rx="11"
						ry="3.5"
						class="about-black-stroke"
						stroke-width="2"
					/><ellipse
						cx="32"
						cy="12.5"
						rx="11"
						ry="3.5"
						class="about-black-stroke"
						stroke-width="2"
					/><ellipse
						cx="32"
						cy="19.5"
						rx="11"
						ry="3.5"
						class="about-black-stroke"
						stroke-width="2"
					/><path
						d="M32 30C38.0751 30 43 28.433 43 26.5C43 24.567 38.0751 23 32 23"
						class="about-black-stroke"
						stroke-width="2"
					/><path
						d="M7 28L7 19C7 17.8954 7.89543 17 9 17L14 17"
						class="about-white-stroke"
						stroke-width="2"
					/><path d="M10 26L7 29L4 26" class="about-white-stroke" stroke-width="2" /><path
						d="M12 14L15 17L12 20"
						class="about-white-stroke"
						stroke-width="2"
					/><path
						d="M57 28L57 19C57 17.8954 56.1046 17 55 17L50 17"
						class="about-white-stroke"
						stroke-width="2"
					/><path d="M54 26L57 29L60 26" class="about-white-stroke" stroke-width="2" /><path
						d="M52 14L49 17L52 20"
						class="about-white-stroke"
						stroke-width="2"
					/></svg
				>
				<h2 class="card-title">Collaborative</h2>
				<p class="card-content">
					Our system resolves conflicts automatically so you don't have to worry about realtime
					collaboration or offline support.
				</p>
			</div>
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

	<!-- Cards Section -->
	<div class="cards h-full">
		<h2>Local-first case studies</h2>
		<div class="row">
			<div class="col">
				<img
					src="https://images.ctfassets.net/3s1s2vyeq3pi/2Nn4M9aEbgFsg0BSDEa0zc/8eae56bd8fc32c93a161cf207f9b0ff5/Group.svg"
					alt=""
					class="card-logo"
				/>
				<h3 class="card-title">Card Title</h3>
				<p class="card-content">
					Rewriting the Messenger codebase for a faster, smaller, and simpler messaging app
				</p>
			</div>
			<div class="col">
				<img
					src="https://images.ctfassets.net/3s1s2vyeq3pi/XGHwW7u1U0Phf4Rub60Lq/0c6a0f2432c1e0fc7811c11014ff5aa3/logo.svg"
					alt=""
					class="card-logo"
				/>
				<h3 class="card-title">Card Title</h3>
				<p class="card-content">How Figma’s multiplayer technology works</p>
			</div>
			<div class="col">
				<img
					src="https://images.ctfassets.net/3s1s2vyeq3pi/xcpnrUPLjr7RE7s0ouda4/23b7b0fd73924a2790b7b27552184a1c/logo.svg"
					alt=""
					class="card-logo"
				/>
				<h3 class="card-title">Card Title</h3>
				<p class="card-content">Architecting a web app to “just work” offline</p>
			</div>
		</div>
	</div>

	<!-- Intergration Section -->
	<div class="intergration h-full">
		<div class="col">
			<svg
				viewBox="0 0 332 333"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="fvw567-0 ccyeVX"
				><circle cx="124" cy="209" r="40" transform="rotate(-90 124 209)" fill="#F5FF80" /><circle
					cx="208"
					cy="125"
					r="40"
					transform="rotate(-90 208 125)"
					fill="#F5FF80"
				/><circle
					cx="292"
					cy="209"
					r="40"
					transform="rotate(-90 292 209)"
					class="fill-black"
				/><circle
					cx="292"
					cy="125"
					r="40"
					transform="rotate(-90 292 125)"
					class="fill-black"
				/><circle cx="208" cy="41" r="40" transform="rotate(-90 208 41)" fill="#D7E4E3" /><circle
					cx="208"
					cy="293"
					r="40"
					transform="rotate(-90 208 293)"
					fill="#D7E4E3"
				/><path
					d="M168 209C168 184.699 148.301 165 124 165C101.909 165 84 147.091 84 125L84 40C84 17.9086 101.909 -2.63437e-07 124 0C146.091 2.63437e-07 164 17.9086 164 40V125C164 149.301 183.699 169 208 169C231.57 169 250.812 150.467 251.947 127.178L268.156 110.969C278.632 100.493 295.618 100.493 306.094 110.969C316.57 121.445 316.57 138.43 306.094 148.906L289.953 165.047C266.603 166.116 248 185.385 248 209C248 231.091 230.091 249 208 249C185.909 249 168 231.091 168 209Z"
					class="fill-black"
				/><rect
					x="164"
					y="333"
					width="162"
					height="80"
					rx="40"
					transform="rotate(-180 164 333)"
					fill="#D7E4E3"
				/><line x1="40" y1="30" x2="40" y2="246" class="stroke-black" stroke-width="4" /><path
					d="M40 68C19.0132 68 2 72.9249 2 79C2 85.0751 19.0132 90 40 90"
					class="stroke-black"
					stroke-width="4"
				/><ellipse
					rx="38"
					ry="11"
					transform="matrix(1 0 0 -1 40 101)"
					class="stroke-black"
					stroke-width="4"
				/><ellipse
					rx="38"
					ry="11"
					transform="matrix(1 0 0 -1 40 123)"
					class="stroke-black"
					stroke-width="4"
				/><ellipse
					rx="38"
					ry="11"
					transform="matrix(1 0 0 -1 40 189)"
					class="stroke-black"
					stroke-width="4"
				/><ellipse
					rx="38"
					ry="11"
					transform="matrix(1 0 0 -1 40 211)"
					class="stroke-black"
					stroke-width="4"
				/><path
					d="M40 222C60.9868 222 78 226.925 78 233C78 239.075 60.9868 244 40 244"
					class="stroke-black"
					stroke-width="4"
				/></svg
			>
		</div>
		<div class="col">
			<h2>Intergration</h2>
			<div class="icons cnto9r-3 hZwKmG">
				<div class="cnto9r-4 bDmqej">
					<div class="cnto9r-5 jdziYU">
						<svg
							width="50"
							height="56"
							viewBox="0 0 50 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="sc-1ciwl62-0 GlclU"
							><path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M29.8001 6.41347L41.352 13.0531C41.6855 12.7018 42.0682 12.4003 42.4883 12.158C44.884 10.7869 47.9399 11.6009 49.3315 13.9859C50.7088 16.3709 49.8911 19.4127 47.4952 20.798C47.0782 21.037 46.6289 21.2151 46.161 21.3268V34.6109C46.6238 34.7228 47.0682 34.8997 47.4809 35.1363C49.8911 36.5215 50.7088 39.5635 49.3172 41.9485C47.9399 44.3333 44.8698 45.1474 42.4739 43.7765C42.0097 43.5114 41.5916 43.1735 41.2356 42.7758L29.754 49.3746C29.9221 49.8814 30.0075 50.4118 30.0069 50.9455C30.0069 53.6875 27.769 55.9298 25.0001 55.9298C22.2311 55.9298 19.9932 53.7017 19.9932 50.9455C19.9932 50.4556 20.0639 49.9824 20.1958 49.5354L8.64693 42.8977C8.31707 43.242 7.93973 43.5379 7.52622 43.7765C5.11607 45.1474 2.06021 44.3333 0.682863 41.9485C-0.694285 39.5635 0.123488 36.5215 2.51919 35.1363C2.9319 34.8997 3.37633 34.7227 3.83911 34.6107V21.3268C3.37122 21.2151 2.9219 21.037 2.50493 20.798C0.109035 19.4271 -0.708739 16.3709 0.668605 13.9859C2.04595 11.6009 5.11587 10.7869 7.51177 12.158C7.92956 12.399 8.3104 12.6986 8.64263 13.0474L20.1979 6.40608C20.0617 5.94586 19.9928 5.46851 19.9932 4.98872C19.9932 2.23275 22.2311 0.00463867 25.0001 0.00463867C27.769 0.00463867 30.0069 2.23255 30.0069 4.98872C30.0069 5.48412 29.9346 5.96221 29.8001 6.41347ZM28.5965 8.45921L40.176 15.1144C39.9916 15.756 39.9388 16.428 40.0205 17.0903C40.1023 17.7527 40.317 18.3919 40.652 18.97C41.3569 20.1906 42.5051 20.9998 43.7795 21.3152V34.6158C43.7145 34.6315 43.6499 34.6488 43.5856 34.6671L28.462 8.59239C28.5077 8.54884 28.5526 8.50451 28.5965 8.4594V8.45921ZM21.5413 8.59531L6.41782 34.6696C6.35243 34.6508 6.28666 34.6333 6.22056 34.6171V21.3152C7.49497 20.9998 8.64321 20.1906 9.3481 18.97C9.68372 18.3908 9.89867 17.7502 9.98011 17.0865C10.0616 16.4228 10.0078 15.7496 9.82212 15.107L21.3983 8.45377C21.445 8.50179 21.4926 8.54903 21.5413 8.59511V8.59531ZM26.3991 9.77644L41.519 35.8449C41.1727 36.1739 40.8758 36.5509 40.6376 36.9642C40.3999 37.3751 40.2222 37.8175 40.1098 38.2782H9.89068C9.77812 37.8175 9.6003 37.3751 9.36255 36.9642C9.12349 36.5538 8.82718 36.1791 8.48247 35.8514L23.6053 9.77761C24.0587 9.90756 24.5282 9.97328 25.0001 9.97281C25.4858 9.97281 25.9551 9.90437 26.3991 9.77644ZM28.7028 47.5878L40.2071 40.9758C40.1726 40.8679 40.1418 40.7588 40.1147 40.6488H9.88423C9.86821 40.7135 9.85083 40.7777 9.83228 40.8417L21.3928 47.4861C21.8597 47.0029 22.4199 46.6187 23.0398 46.3567C23.6598 46.0947 24.3266 45.9602 25.0001 45.9615C25.6971 45.9602 26.3867 46.1043 27.0244 46.3844C27.6621 46.6645 28.2338 47.0745 28.7028 47.5878Z"
								class="fill-black"
							/></svg
						>
					</div>
					GraphQL
				</div>
				<div class="cnto9r-4 bDmqej">
					<div class="cnto9r-5 jdziYU">
						<svg
							width="56"
							height="49"
							viewBox="0 0 56 49"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="sc-10rhtde-0 katAwL"
							><path
								d="M45.9146 15.9478C45.3245 15.748 44.7295 15.563 44.1299 15.3929C44.2294 14.9942 44.3213 14.5938 44.4057 14.1918C45.7566 7.72113 44.8733 2.50835 41.8571 0.79238C38.9652 -0.853381 34.2354 0.862587 29.4586 4.9644C28.9879 5.36951 28.5276 5.78629 28.0783 6.21434C27.7774 5.92971 27.4711 5.65061 27.1597 5.37717C22.1535 0.990898 17.1354 -0.857255 14.1223 0.863798C11.2332 2.51416 10.3774 7.41489 11.5936 13.5471C11.7146 14.1544 11.8512 14.7586 12.0033 15.359C11.2933 15.558 10.6075 15.7701 9.95149 15.9957C4.08236 18.0148 0.333984 21.1794 0.333984 24.4618C0.333984 27.8521 4.35763 31.2525 10.4711 33.3142C10.9668 33.4806 11.4667 33.6348 11.9702 33.7766C11.8066 34.4235 11.6614 35.0747 11.5347 35.7296C10.3752 41.7553 11.2808 46.5398 14.1623 48.18C17.1386 49.8735 22.1338 48.1328 26.998 43.9373C27.3825 43.6056 27.7684 43.2539 28.1548 42.8852C28.6415 43.3486 29.1413 43.7985 29.6534 44.2344C34.365 48.235 39.0182 49.8505 41.8973 48.2059C44.8709 46.5074 45.837 41.3675 44.5824 35.1139C44.4867 34.6363 44.375 34.1485 44.2499 33.6517C44.6008 33.5495 44.945 33.444 45.2808 33.334C51.6363 31.2564 55.771 27.8973 55.771 24.4618C55.771 21.1676 51.902 17.9816 45.9146 15.9478Z"
								class="fill-black"
							/><path
								d="M44.5361 31.116C44.2331 31.215 43.922 31.3106 43.605 31.4033C42.9033 29.2117 41.9563 26.881 40.7978 24.4734C41.9035 22.1226 42.8138 19.822 43.4958 17.6444C44.0628 17.8066 44.6134 17.9773 45.1438 18.1576C50.274 19.9 53.4031 22.4766 53.4031 24.4618C53.4031 26.5765 50.0235 29.3218 44.5363 31.116H44.5361ZM42.2593 35.5679C42.814 38.3331 42.8933 40.8332 42.5257 42.7876C42.1955 44.5438 41.5316 45.7145 40.7107 46.1835C38.9636 47.1814 35.2272 45.8842 31.1982 42.463C30.7362 42.0708 30.2708 41.6519 29.8041 41.2089C31.3662 39.523 32.9274 37.563 34.451 35.3865C37.1311 35.1519 39.663 34.7682 41.9592 34.2446C42.0721 34.6949 42.1727 35.1362 42.2593 35.5679ZM19.2337 46.0111C17.5268 46.6059 16.1674 46.6229 15.3457 46.1554C13.5969 45.1604 12.8702 41.3183 13.8616 36.1653C13.9795 35.5564 14.1145 34.9507 14.2665 34.3492C16.5371 34.8447 19.0507 35.2013 21.7372 35.4163C23.2709 37.546 24.8771 39.5036 26.4959 41.2179C26.1519 41.5463 25.7997 41.8662 25.4397 42.1775C23.2888 44.0329 21.1334 45.349 19.234 46.0111H19.2337ZM11.2372 31.1029C8.53399 30.1912 6.3016 29.0064 4.77138 27.7136C3.39647 26.5515 2.70215 25.3979 2.70215 24.4618C2.70215 22.47 5.71179 19.9293 10.7313 18.2024C11.3613 17.9866 11.9976 17.7891 12.6393 17.61C13.3332 19.8365 14.2432 22.1645 15.3413 24.5187C14.2289 26.9079 13.3059 29.2729 12.6057 31.5256C12.1461 31.3958 11.6898 31.2549 11.2372 31.1029ZM13.9178 13.0983C12.8758 7.84414 13.5677 3.8808 15.3089 2.88628C17.1637 1.82687 21.2647 3.33754 25.5871 7.12463C25.8634 7.36672 26.1409 7.6202 26.4189 7.88239C24.8084 9.58891 23.2169 11.5317 21.6965 13.6491C19.0892 13.8875 16.5933 14.2705 14.2988 14.7835C14.1575 14.225 14.0305 13.663 13.9178 13.0981V13.0983ZM37.8308 18.9248C37.2889 18.0011 36.7268 17.089 36.1451 16.1891C37.914 16.4094 39.6086 16.7024 41.1999 17.0609C40.7222 18.5718 40.1268 20.1517 39.4256 21.7714C38.9132 20.8121 38.3815 19.8631 37.8308 18.9248ZM28.0791 9.55236C29.1714 10.72 30.2654 12.0239 31.3415 13.4385C29.1586 13.3367 26.9722 13.3362 24.7893 13.437C25.8663 12.0355 26.9697 10.7335 28.0791 9.55236ZM18.2648 18.9408C17.721 19.8716 17.1993 20.8148 16.7 21.7697C16.0104 20.1556 15.4203 18.5687 14.9385 17.0362C16.5202 16.6869 18.2069 16.4015 19.9643 16.1848C19.3761 17.0902 18.8094 18.0091 18.2648 18.9408ZM20.0149 32.9055C18.1993 32.7056 16.4871 32.4347 14.9058 32.095C15.3953 30.5354 15.9983 28.9144 16.7027 27.2657C17.2041 28.2213 17.7281 29.165 18.2744 30.0963C18.8319 31.0462 19.4122 31.9829 20.0149 32.9055ZM28.1446 39.5363C27.0222 38.3411 25.9027 37.0192 24.8092 35.5974C25.8705 35.6386 26.9527 35.6594 28.0526 35.6594C29.1827 35.6594 30.2997 35.6344 31.3991 35.586C30.3196 37.0337 29.2295 38.3575 28.1446 39.5363ZM39.4481 27.1817C40.1891 28.8483 40.8137 30.4606 41.3098 31.9938C39.7023 32.3557 37.967 32.6472 36.1384 32.8637C36.7244 31.947 37.2918 31.019 37.8404 30.0801C38.398 29.1258 38.9341 28.1595 39.4481 27.1817ZM35.7888 28.9127C34.9491 30.3522 34.0621 31.7643 33.1293 33.1469C31.4845 33.2629 29.7847 33.3227 28.0526 33.3227C26.3276 33.3227 24.6494 33.2697 23.0334 33.1663C22.0764 31.7869 21.1726 30.3723 20.324 28.9255C19.4794 27.4864 18.6904 26.0161 17.9589 24.5179C18.6886 23.0193 19.4751 21.5482 20.3169 20.1079V20.1084C21.1584 18.6678 22.055 17.2592 23.0049 15.8858C24.6536 15.7628 26.344 15.6984 28.0529 15.6984C29.7693 15.6984 31.4619 15.7633 33.1101 15.8873C34.0504 17.2586 34.9413 18.6622 35.7812 20.0956C36.6259 21.5327 37.4229 22.9965 38.1711 24.4848C37.4306 25.9882 36.6361 27.4651 35.7891 28.9127H35.7888ZM40.6744 2.8168C42.5306 3.8733 43.2527 8.13344 42.0863 13.7203C42.0099 14.0842 41.9268 14.4468 41.837 14.8077C39.5372 14.2841 37.0396 13.8943 34.4247 13.6522C32.9014 11.5119 31.3231 9.56567 29.7386 7.88118C30.1538 7.48621 30.5789 7.10148 31.0134 6.72735C35.1063 3.21262 38.9314 1.82493 40.6744 2.8168Z"
								class="fill-white"
							/><path
								d="M28.0529 19.577C30.787 19.577 33.0032 21.7641 33.0032 24.4618C33.0032 27.1597 30.787 29.3468 28.0529 29.3468C25.319 29.3468 23.1025 27.1597 23.1025 24.4618C23.1025 21.7641 25.319 19.577 28.0529 19.577Z"
								class="fill-black"
							/></svg
						>
					</div>
					React
				</div>
				<div class="cnto9r-4 bDmqej">
					<div class="cnto9r-5 jdziYU">
						<svg
							width="46"
							height="52"
							viewBox="0 0 46 52"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="iqjqtc-0 fCOkbt"
							><g clip-path="url(#clip0)"
								><path
									d="M36.5199 41.9499L31.3576 25.927L44.8713 16.0271H28.1668L23.0039 0.00452962L23.0023 0.000181185H39.7093L44.8735 16.0252L44.8738 16.0249L44.8781 16.0225C47.8771 25.3191 44.7883 35.893 36.5199 41.9497V41.9499ZM9.48638 41.9499L9.48224 41.9529L22.9996 51.8556L36.5199 41.9502L23.0039 32.0474L9.48656 41.9499H9.48638ZM1.13194 16.0229C-2.02512 25.8228 1.63955 36.2069 9.48386 41.9519L9.48512 41.9468L14.6484 25.9248L1.13751 16.0267H17.8381L23.0012 0.00434843L23.0023 0H6.29428L1.13176 16.0229H1.13194Z"
									class="fill-black"
								/></g
							><defs
								><clipPath id="clip0"><rect width="46" height="52" fill="white" /></clipPath></defs
							></svg
						>
					</div>
					Auth0
				</div>
				<div class="cnto9r-4 bDmqej">
					<div class="cnto9r-5 jdziYU">
						<svg
							width="64"
							height="26"
							viewBox="0 0 64 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="gp3l6n-0 jhuJXF"
							><path
								d="M4.49775 10.1445C4.49775 9.47077 5.06662 9.21152 6.009 9.21152C7.36 9.21152 9.06663 9.60903 10.4178 10.3174V6.25698C8.94225 5.68684 7.4845 5.46221 6.009 5.46221C2.4 5.46221 0 7.29374 0 10.352C0 15.1206 6.7555 14.3605 6.7555 16.4166C6.7555 17.2113 6.0445 17.4705 5.04887 17.4705C3.57337 17.4705 1.68887 16.883 0.1955 16.0883V20.2004C1.84888 20.8916 3.52 21.1852 5.04887 21.1852C8.74662 21.1852 11.2889 19.4057 11.2889 16.3129C11.2711 11.164 4.49775 12.0797 4.49775 10.1445ZM16.5155 2.00666L12.1777 2.90505L12.16 16.7448C12.16 19.302 14.1334 21.1852 16.7645 21.1852C18.2222 21.1852 19.2889 20.9261 19.8755 20.6151V17.1076C19.3067 17.3323 16.4977 18.127 16.4977 15.5699V9.43615H19.8755V5.75597H16.4977L16.5155 2.00666ZM25.4045 7.03449L25.12 5.75597H21.28V20.8742H25.7245V10.6284C26.7733 9.29802 28.5511 9.5399 29.1022 9.7299V5.75597C28.5334 5.54859 26.4534 5.16846 25.4045 7.03449ZM30.1866 5.75597H34.6489V20.8742H30.1866V5.75597ZM30.1866 4.44282L34.6489 3.50981V0.00238037L30.1866 0.918144V4.4427V4.44282ZM43.9289 5.46221C42.1866 5.46221 41.0666 6.25698 40.4445 6.80998L40.2132 5.73872H36.3022V25.8848L40.7466 24.9691L40.7645 20.0794C41.4045 20.5287 42.3466 21.168 43.9111 21.168C47.0934 21.168 49.9911 18.6799 49.9911 13.2028C49.9734 8.19213 47.04 5.46221 43.9289 5.46221ZM42.8623 17.3668C41.8134 17.3668 41.191 17.004 40.7645 16.5548L40.7466 10.1445C41.2089 9.64353 41.8489 9.29802 42.8623 9.29802C44.48 9.29802 45.6 11.0603 45.6 13.3237C45.6 15.639 44.4977 17.3668 42.8623 17.3668ZM64 13.3756C64 8.95239 61.7955 5.46221 57.5822 5.46221C53.351 5.46221 50.791 8.95251 50.791 13.3411C50.791 18.5417 53.8134 21.168 58.151 21.168C60.2666 21.168 61.8666 20.7014 63.0755 20.0449V16.5893C61.8667 17.1768 60.48 17.5396 58.72 17.5396C56.9955 17.5396 55.4666 16.9521 55.2711 14.9134H63.9645C63.9645 14.6886 64 13.7902 64 13.3756ZM55.2178 11.7342C55.2178 9.78178 56.4445 8.96964 57.5645 8.96964C58.6489 8.96964 59.8045 9.78178 59.8045 11.7342H55.2178Z"
								class="fill-black"
							/></svg
						>
					</div>
					Stripe
				</div>
			</div>
			<p><strong>SQL</strong> and <strong>Spreadsheet</strong></p>
			<p>
				Or build your own. Datahike is open-source and you can join databases locally or in your own
				private cloud.
			</p>
		</div>
	</div>

	<!-- Easy to use Section -->
	<div class="easytouse h-full">
		<div class="col">
			<div class="card">
				<h2>Easy to use</h2>
				<p>
					Your DB is like Git now. Share it directly with the client. Replicate, fork, and join data
					from multiple Homebase databases. This is possible because of the automatic conflict
					resolution and built-in versioning of data. As a side effect of this data portability, you
					can eliminate many APIs and ETLs.
				</p>
				<p>
					Attribute-level authorization simplified. Publishing of public APIs, end-to-end
					encryption, easy GDPR. It all comes by default when using Homebase + Datahike.
				</p>
			</div>
		</div>
		<div class="col">
			<div class="smallcard">
				<h2>Create a DB Right in React</h2>
				<p>
					Skip API development and start building with React and Homebase. It all starts in your
					browser. Setup is a few lines of code. Add schema, relationships and validations
					incrementally.
				</p>
			</div>
			<div class="smallcard">
				<h2>Reactively save data</h2>
				<p>
					Make your app feel native. Make it faster and work offline. Our consistency mechanisms
					make offline transactions as easy as transacting to a central cloud database.
				</p>
			</div>
			<div class="smallcard">
				<h2>Reactively query data</h2>
				<p>
					Don't wait on the network. We'll cache everything and automatically subscribe clients to
					changes.
				</p>
			</div>
			<div class="smallcard">
				<h2>Sync with Homebase</h2>
				<p>
					Homebase keeps your local and cloud data in sync so everything just works. No API needed.
					We'll back it up, sync it, and even help you authenticate and authorize users.
				</p>
			</div>
			<div class="smallcard">
				<h2>Go to production</h2>
				<p>
					When it's time to ship we make it easy. Homebase automatically builds dev and staging
					environments. In prod we've got you covered with telemetry and the first set of
					administration tools for local-first data. We love to sleep too.
				</p>
			</div>
		</div>
	</div>

	<!-- Poweredby Section -->
	<div class="poweredby h-full">
		<div class="col">
			<div class="icon">
				<svg
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="dgixvm-0 hYyDpE"
					><path
						d="M23.001 32C23.001 29.3175 24.4959 26.9171 26.2676 24.9029C28.5916 22.261 30.001 18.7951 30.001 15C30.001 6.71573 23.2853 4.60906e-07 15.001 0C6.71671 -4.60906e-07 0.000978915 6.71573 0.000978454 15C0.000978243 18.7951 1.41038 22.261 3.73432 24.9029C5.50608 26.9171 7.00098 29.3175 7.00098 32C7.00098 34.6825 5.50608 37.0829 3.73432 39.0971C1.41038 41.739 0.000976774 45.2049 0.000976562 49C0.000976102 57.2843 6.71671 64 15.001 64C23.2853 64 30.001 57.2843 30.001 49C30.001 45.2049 28.5916 41.739 26.2676 39.0971C24.4959 37.0829 23.001 34.6825 23.001 32Z"
						class="fill-black"
					/><rect x="34.001" width="30" height="30" rx="15" fill="#F5FF80" /><circle
						cx="49"
						cy="49"
						r="15"
						fill="#D7E4E3"
					/></svg
				>
			</div>
			<div class="text">
				<h2>Homebase is powered by Datahike</h2>
				<p>
					The first open source real-time collaborative relational database that lives in your
					browser.
				</p>
			</div>
		</div>
		<div class="col">
			<div class="icon">
				<svg
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="dgixvm-0 hYyDpE"
					><path
						d="M23.001 32C23.001 29.3175 24.4959 26.9171 26.2676 24.9029C28.5916 22.261 30.001 18.7951 30.001 15C30.001 6.71573 23.2853 4.60906e-07 15.001 0C6.71671 -4.60906e-07 0.000978915 6.71573 0.000978454 15C0.000978243 18.7951 1.41038 22.261 3.73432 24.9029C5.50608 26.9171 7.00098 29.3175 7.00098 32C7.00098 34.6825 5.50608 37.0829 3.73432 39.0971C1.41038 41.739 0.000976774 45.2049 0.000976562 49C0.000976102 57.2843 6.71671 64 15.001 64C23.2853 64 30.001 57.2843 30.001 49C30.001 45.2049 28.5916 41.739 26.2676 39.0971C24.4959 37.0829 23.001 34.6825 23.001 32Z"
						class="fill-black"
					/><rect x="34.001" width="30" height="30" rx="15" fill="#F5FF80" /><circle
						cx="49"
						cy="49"
						r="15"
						fill="#D7E4E3"
					/></svg
				>
			</div>
			<div class="text">
				<h2>Make your data more manageable</h2>
				<p>The best of local caching with the best of the cloud.</p>
			</div>
		</div>
	</div>

	<!-- Pricing Section -->
	<div class="pricing h-full">
		<div class="icon">
			<svg
				width="94"
				height="63"
				viewBox="0 0 94 63"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="sc-1nbhgf6-0 dKfWZW"
				><path
					d="M62.0005 47.9995C62.0005 38.6107 69.6116 30.9995 79.0005 30.9995C87.2848 30.9995 94.0005 24.2838 94.0005 15.9995C94.0005 7.71524 87.2848 0.999512 79.0005 0.999512C70.7162 0.999512 64.0005 7.71524 64.0005 15.9995C64.0005 16.0776 63.9855 16.1543 63.957 16.2254C63.3287 25.042 55.9771 31.9995 47.0005 31.9995C37.6723 31.9995 30.099 24.4865 30.0014 15.1814L28.5138 13.6938C24.4213 9.60123 17.786 9.60123 13.6934 13.6938C9.60089 17.7863 9.60089 24.4216 13.6934 28.5142L16.222 31.0427C25.0407 31.6688 32.0005 39.0214 32.0005 47.9995C32.0005 56.2838 38.7162 62.9995 47.0005 62.9995C55.2847 62.9995 62.0005 56.2838 62.0005 47.9995Z"
					class="fill-black"
				/><circle
					r="15"
					transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 79 48)"
					fill="#F5FF80"
				/><circle
					r="15"
					transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 47 15)"
					fill="#F5FF80"
				/><circle
					r="15"
					transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 15 48)"
					fill="#D7E4E3"
				/><circle
					r="15"
					transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 15 16)"
					class="fill-black"
				/></svg
			>
		</div>
		<h2>Pricing</h2>
		<p>Free for small projects. Pay as you grow. The Datahike DB is free and open-source.</p>
		<button>Request early access</button>
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
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 50%;

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
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 50%;

			svg {
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
			flex-wrap: nowrap;
			justify-content: space-evenly;
			align-items: stretch;
			align-content: flex-start;

			.col {
				width: 22vw;
				max-width: 300px;
				background-color: white;
				padding: 2em;
				border-radius: 1em;
				border-color: rgb(255, 255, 255);
				box-shadow: rgb(0 0 0 / 6%) 8px 26px 92px;
				background-color: rgb(255, 255, 255);
				border-radius: 6px;
				transition: box-shadow 0.2s ease-out 0s, background-color 0.2s ease-out 0s;

				h3 {
					font-size: 1.5em;
					font-weight: 600;
					color: $text-color;
					display: none;
				}

				p {
					font-size: 1em;
					font-weight: 200;
					color: $text-color;
				}
			}

			.col:hover {
				box-shadow: rgb(0 0 0 / 11%) 8px 26px 92px;
			}
		}
	}

	.intergration {
		margin-top: 8em;
		display: flex;
		flex-direction: row;
		gap: 2em;
		width: 75vw;
		justify-content: space-evenly;
		align-items: center;
		align-content: center;

		.col {
			width: 80%;
			svg {
				width: 50%;
			}

			.icons {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				align-items: baseline;
				gap: 2em;
				font-weight: 200;
			}
		}
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
					font-size: 5vw;
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
		flex-direction: row;
		gap: 3em;
		width: 75vw;
		margin-top: 10em;

		.col {
			display: flex;
			gap: 1em;
			width: 45vw;
			flex-wrap: nowrap;
			align-content: flex-start;
			align-items: flex-start;
			justify-content: flex-start;

			.icon {
				width: 10em;
			}

			.text {
				width: 100%;
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
			background-color: #31cb53;
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
			background-color: #58d774;
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

		.cards {
			.row {
				display: -webkit-box;
				width: 100vw;
				overflow: scroll;
				.col {
					width: 300px;
				}
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
				svg {
					width: 100%;
				}
			}
		}

		.easytouse {
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			justify-content: center;
			align-items: center;
		}

		.poweredby {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			align-items: center;

			.col {
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				align-content: center;
				align-items: center;
				justify-content: flex-start;
			}
		}
	}
</style>

import { c as create_ssr_component } from './index-f78c0b16.js';

const css = {
  code: "nav.svelte-1kvtm0s.svelte-1kvtm0s{display:flex;justify-content:space-between;align-items:center;padding:1em 2em;position:sticky;top:0;z-index:100;background-color:white}nav.svelte-1kvtm0s #brand.svelte-1kvtm0s{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:flex-start;gap:2em}nav.svelte-1kvtm0s #brand a.svelte-1kvtm0s{font-size:2.5vw;font-weight:400;color:#000;text-decoration:none}nav.svelte-1kvtm0s #brand #icon.svelte-1kvtm0s{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-around;gap:0.5em}nav.svelte-1kvtm0s #brand #icon div.svelte-1kvtm0s{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:flex-start}nav.svelte-1kvtm0s #brand #icon div h2.svelte-1kvtm0s{font-size:1em;margin:0;color:#0175bb}nav.svelte-1kvtm0s #brand #icon div small.svelte-1kvtm0s{font-size:0.4em}nav.svelte-1kvtm0s #brand #links a.svelte-1kvtm0s{font-size:1em;font-weight:200;color:#000;text-decoration:none;margin:0 1rem}nav.svelte-1kvtm0s #brand #links a.svelte-1kvtm0s:hover{color:rgb(122, 122, 122)}nav.svelte-1kvtm0s #cta.svelte-1kvtm0s{white-space:nowrap}nav.svelte-1kvtm0s #cta a.svelte-1kvtm0s{font-size:1em;font-weight:400;color:white;text-decoration:none;padding:0.5rem 1rem;background-color:#006efe;border-radius:0.5rem}nav.svelte-1kvtm0s #cta a.svelte-1kvtm0s:hover{background-color:#32cccd;color:#000}footer.svelte-1kvtm0s.svelte-1kvtm0s{padding:2rem 5rem;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center;justify-content:flex-start}footer.svelte-1kvtm0s .row.svelte-1kvtm0s{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2em;gap:2em}footer.svelte-1kvtm0s .row .col.svelte-1kvtm0s{flex:1;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}footer.svelte-1kvtm0s .row .col p.svelte-1kvtm0s{white-space:nowrap}footer.svelte-1kvtm0s .row .col .footer-copyright-text.svelte-1kvtm0s{font-size:1rem;font-weight:200;color:rgb(122, 122, 122)}footer.svelte-1kvtm0s .row .col .footer-social-icons.svelte-1kvtm0s{display:flex;justify-content:flex-start;align-items:center}footer.svelte-1kvtm0s .row .col .footer-social-icons .social-icon.svelte-1kvtm0s{font-size:1.5rem;color:#000;margin-right:1em}footer.svelte-1kvtm0s .row .col .footer-social-icons .social-icon.svelte-1kvtm0s:hover{color:rgb(215, 228, 227)}@media(max-width: 768px){nav.svelte-1kvtm0s.svelte-1kvtm0s{flex-direction:column;gap:1em}nav.svelte-1kvtm0s #brand.svelte-1kvtm0s{flex-direction:column;gap:0.5em;align-items:center}nav.svelte-1kvtm0s #brand a.svelte-1kvtm0s{font-size:2em}footer.svelte-1kvtm0s .row.svelte-1kvtm0s:nth-child(1){flex-direction:column;gap:1em;flex-wrap:wrap;align-content:flex-start;justify-content:flex-start;align-items:stretch}footer.svelte-1kvtm0s .row.svelte-1kvtm0s:nth-child(2){flex-direction:column-reverse;flex-wrap:nowrap;align-content:center;justify-content:flex-end}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"svelte-1kvtm0s"}"><div id="${"brand"}" class="${"svelte-1kvtm0s"}"><a id="${"icon"}" href="${"/"}" class="${"svelte-1kvtm0s"}"><img src="${"/images/icononly_transparent_nobuffer.png"}" style="${"height: 50px;"}" alt="${""}">
			<div class="${"svelte-1kvtm0s"}"><h2 class="${"svelte-1kvtm0s"}">WAVE-LINK</h2>
				<small class="${"svelte-1kvtm0s"}">Global Payment Processing</small></div></a>
		<div id="${"links"}" class="${"svelte-1kvtm0s"}"></div></div>
	<div id="${"cta"}" class="${"svelte-1kvtm0s"}"><a href="${"/register"}" class="${"btn svelte-1kvtm0s"}">Create an Account</a></div></nav>

${slots.default ? slots.default({}) : ``}
<br><br>
<hr>
<footer class="${"svelte-1kvtm0s"}">
	<div class="${"row svelte-1kvtm0s"}" style="${"align-items: center;"}"><div class="${"col svelte-1kvtm0s"}"><p class="${"footer-copyright-text svelte-1kvtm0s"}">© 2023 Wavelink. All rights reserved.</p></div>
		<div class="${"col svelte-1kvtm0s"}"><div class="${"footer-social-icons svelte-1kvtm0s"}"><a href="${"https://www.facebook.com/wavelinkpay"}" class="${"social-icon svelte-1kvtm0s"}"><i class="${"fab fa-facebook-f"}"></i></a>
				<a href="${"https://www.linkedin.com/company/wave-eeb/"}" class="${"social-icon svelte-1kvtm0s"}"><i class="${"fab fa-linkedin-in"}"></i></a>
				</div></div>
		<div class="${"col svelte-1kvtm0s"}"></div></div>
</footer>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-4e70fcb3.js.map

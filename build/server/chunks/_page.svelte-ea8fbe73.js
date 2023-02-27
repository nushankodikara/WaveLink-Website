import { c as create_ssr_component, e as escape } from './index-f78c0b16.js';

const css = {
  code: ".hide.svelte-1r9yosp.svelte-1r9yosp{display:none !important}form.svelte-1r9yosp.svelte-1r9yosp{display:flex;justify-content:center;align-items:center;height:100%;padding:5em;min-width:400px;flex-direction:column;flex-wrap:nowrap;align-content:center;gap:5em}form.svelte-1r9yosp .card.svelte-1r9yosp{display:flex;flex-direction:column;gap:1em;color:#343434}form.svelte-1r9yosp .card h2.svelte-1r9yosp{font-size:1.5em;font-weight:600;margin-bottom:1em}form.svelte-1r9yosp .card .radioButton.svelte-1r9yosp{display:flex;flex-direction:row;align-items:center;gap:3em;padding:1em;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1)}form.svelte-1r9yosp .card .radioButton div.svelte-1r9yosp{display:flex;flex-direction:column}form.svelte-1r9yosp .card .radioButton div h2.svelte-1r9yosp{margin:0;font-size:1.2em;font-weight:600}form.svelte-1r9yosp .card .radioButton div h3.svelte-1r9yosp{margin:0.5em 0;font-size:1em;font-weight:400}form.svelte-1r9yosp .card .row.svelte-1r9yosp{display:flex;flex-direction:row;gap:1em}form.svelte-1r9yosp .card .row .col.svelte-1r9yosp{display:flex;flex-direction:column;gap:0.5em}form.svelte-1r9yosp .card .row .col label.svelte-1r9yosp{font-size:1em;font-weight:600}form.svelte-1r9yosp .card .row .col input.svelte-1r9yosp{padding:1em;border:none;border-radius:5px;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);min-width:300px}form.svelte-1r9yosp .card .row .col textarea.svelte-1r9yosp{padding:1em;border:none;border-radius:5px;box-shadow:0 0 10px 0 rgba(0, 0, 0, 0.1);min-width:600px}form.svelte-1r9yosp .card .buttons.svelte-1r9yosp{display:flex;justify-content:space-between;padding-top:1em}form.svelte-1r9yosp .card .buttons button.svelte-1r9yosp{padding:1em 2em;border:none;border-radius:5px;background-color:#343434;color:#fff;font-size:1em;font-weight:600;cursor:pointer}form.svelte-1r9yosp .card .buttons button[disabled].svelte-1r9yosp{background-color:#ccc;cursor:not-allowed}form.svelte-1r9yosp .card .buttons button.svelte-1r9yosp:hover{background-color:#006efe}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<form action="${"https://submit-form.com/gqyflXzr"}" class="${"svelte-1r9yosp"}"><div class="${"card " + escape("", true) + " svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">How would you like to accept payments with Euro Exim Bank?</h2>
			<div class="${"radioButton svelte-1r9yosp"}"><input type="${"radio"}" name="${"Payment Type"}" id="${"individal"}" value="${"Individual"}" class="${"svelte-1r9yosp"}">
				<div class="${"svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">As an individal</h2>
					<h3 class="${"svelte-1r9yosp"}">For freelanceres, sole traders and unregistered business</h3></div></div>
			<div class="${"radioButton svelte-1r9yosp"}"><input type="${"radio"}" name="${"Payment Type"}" id="${"business"}" value="${"Business"}" class="${"svelte-1r9yosp"}">
				<div class="${"svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">As a registered business, non-profit or NGO</h2>
					<h3 class="${"svelte-1r9yosp"}">Your Business is registered and you have a Business Bank Account</h3></div></div>
            ${`<div class="${"buttons svelte-1r9yosp"}"><button disabled class="${"svelte-1r9yosp"}">Back</button>
				<button class="${"svelte-1r9yosp"}">Next</button></div>`}</div>

		<div class="${"card " + escape("hide", true) + " svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Personal Information</h2>
			
			<div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"fullname"}" class="${"svelte-1r9yosp"}">Your Full Name</label>
					<input type="${"text"}" name="${"Full Name"}" id="${"fullname"}" required class="${"svelte-1r9yosp"}"></div>
				<div class="${"col svelte-1r9yosp"}"><label for="${"email"}" class="${"svelte-1r9yosp"}">Your Email Address</label>
					<input type="${"email"}" name="${"Email"}" id="${"email"}" required class="${"svelte-1r9yosp"}"></div></div>
			
			<div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"country"}" class="${"svelte-1r9yosp"}">What country are you from?</label>
					<input type="${"text"}" name="${"Country"}" id="${"country"}" required class="${"svelte-1r9yosp"}"></div>
				<div class="${"col svelte-1r9yosp"}"><label for="${"state"}" class="${"svelte-1r9yosp"}">What state are you based on?</label>
					<input type="${"text"}" name="${"State"}" id="${"state"}" required class="${"svelte-1r9yosp"}"></div></div>
			
			<div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"city"}" class="${"svelte-1r9yosp"}">What city are you based on?</label>
					<input type="${"text"}" name="${"City"}" id="${"city"}" required class="${"svelte-1r9yosp"}"></div>
				<div class="${"col svelte-1r9yosp"}"><label for="${"zipcode"}" class="${"svelte-1r9yosp"}">What is your PIN / ZIP code?</label>
					<input type="${"text"}" name="${"ZIP Code"}" id="${"zipcode"}" required class="${"svelte-1r9yosp"}"></div></div>
			
			<div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"contact"}" class="${"svelte-1r9yosp"}">What is your contact number?</label>
					<input type="${"text"}" name="${"Contact Number"}" id="${"contact"}" required class="${"svelte-1r9yosp"}"></div></div>
            ${`<div class="${"buttons svelte-1r9yosp"}"><button class="${"svelte-1r9yosp"}">Back</button>
				<button class="${"svelte-1r9yosp"}">Next</button></div>`}</div>

		<div class="${"card " + escape("hide", true) + " svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Business Information</h2>
			
			<div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"businessname"}" class="${"svelte-1r9yosp"}">Registered business name</label>
					<input type="${"text"}" name="${"Business Name"}" id="${"businessname"}" required class="${"svelte-1r9yosp"}"></div>
				<div class="${"col svelte-1r9yosp"}"><label for="${"registeredaddress"}" class="${"svelte-1r9yosp"}">Registered address</label>
					<input type="${"text"}" name="${"Registered Address"}" id="${"registeredaddress"}" required class="${"svelte-1r9yosp"}"></div></div>
			
			<div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"businessaddress"}" class="${"svelte-1r9yosp"}">Business address</label>
					<input type="${"text"}" name="${"Business Address"}" id="${"businessaddress"}" required class="${"svelte-1r9yosp"}"></div>
				<div class="${"col svelte-1r9yosp"}"><label for="${"websiteurl"}" class="${"svelte-1r9yosp"}">Website URL</label>
					<input type="${"text"}" name="${"Website URL"}" id="${"websiteurl"}" required class="${"svelte-1r9yosp"}"></div></div>
			${`<div class="${"buttons svelte-1r9yosp"}"><button class="${"svelte-1r9yosp"}">Back</button>
				<button class="${"svelte-1r9yosp"}">Next</button></div>`}</div>

    <div class="${"card " + escape("hide", true) + " svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Business Information</h2>
        
        <div class="${"row svelte-1r9yosp"}"><div class="${"col svelte-1r9yosp"}"><label for="${"businessdescription"}" class="${"svelte-1r9yosp"}">Business description</label>
                <textarea name="${"Business Description"}" id="${"businessdescription"}" cols="${"60"}" rows="${"5"}" required class="${"svelte-1r9yosp"}"></textarea></div></div>

        <h2 class="${"svelte-1r9yosp"}">What&#39;s Your role at this company?</h2>
        <div class="${"radioButton svelte-1r9yosp"}"><input type="${"radio"}" name="${"Job Role"}" id="${"administrator"}" value="${"Company Administrator / Senior Manager"}" class="${"svelte-1r9yosp"}">
            <div class="${"svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Company Administrator / Senior Manager</h2></div></div>
        
        <div class="${"radioButton svelte-1r9yosp"}"><input type="${"radio"}" name="${"Job Role"}" id="${"employee"}" value="${"Employee / Contractor"}" class="${"svelte-1r9yosp"}">
            <div class="${"svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Employee / Contractor</h2></div></div>
        
        <div class="${"radioButton svelte-1r9yosp"}"><input type="${"radio"}" name="${"Job Role"}" id="${"director"}" value="${"Director / Owner"}" class="${"svelte-1r9yosp"}">
            <div class="${"svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Director / Owner</h2></div></div>
        
        <div class="${"radioButton svelte-1r9yosp"}"><input type="${"radio"}" name="${"Job Role"}" id="${"other"}" value="${"Other"}" class="${"svelte-1r9yosp"}">
            <div class="${"svelte-1r9yosp"}"><h2 class="${"svelte-1r9yosp"}">Other</h2></div></div>
        <div class="${"buttons svelte-1r9yosp"}">${`<button class="${"svelte-1r9yosp"}">Back</button>
            <button class="${"svelte-1r9yosp"}">Next</button>`}</div></div>
</form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ea8fbe73.js.map

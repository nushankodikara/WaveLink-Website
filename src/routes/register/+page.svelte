<script lang="ts">
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { 
    Globe2, 
    Building2, 
    User, 
    Briefcase,
    CheckCircle2,
    ArrowRight,
    ArrowLeft
  } from 'lucide-svelte';

  let card = 0;
  let showall = 0;
  let formData = {
    region: '',
    accountType: '',
    fullName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    phone: '',
    businessName: '',
    registeredAddress: '',
    businessAddress: '',
    website: '',
    businessDescription: '',
    role: ''
  };

  let touched = {
    fullName: false,
    email: false,
    country: false,
    state: false,
    city: false,
    zipCode: false,
    phone: false,
    businessName: false,
    registeredAddress: false,
    businessAddress: false,
    website: false,
    businessDescription: false
  };

  const steps = [
    { title: 'Location', icon: Globe2 },
    { title: 'Account Type', icon: User },
    { title: 'Personal Info', icon: Building2 },
    { title: 'Business Info', icon: Briefcase },
    { title: 'Final Details', icon: CheckCircle2 }
  ];

  // Validation functions for each step
  const validateStep = (step: number) => {
    switch(step) {
      case 0:
        return !!formData.region;
      case 1:
        return !!formData.accountType;
      case 2:
        return formData.fullName && 
               formData.email && 
               formData.email.includes('@') &&
               formData.country &&
               formData.state &&
               formData.city &&
               formData.zipCode &&
               formData.phone;
      case 3:
        return formData.businessName && 
               formData.registeredAddress && 
               formData.businessAddress;
      case 4:
        return formData.businessDescription && 
               formData.role;
      default:
        return false;
    }
  };

  const nextCard = () => {
    if (validateStep(card)) {
      const cardElement = document.querySelector('.card-container');
      gsap.to(cardElement, {
        opacity: 0,
        x: -50,
        duration: 0.3,
        onComplete: () => {
          card++;
          gsap.to(cardElement, {
            opacity: 1,
            x: 0,
            duration: 0.3
          });
        }
      });
    }
  };

  const prevCard = () => {
    const cardElement = document.querySelector('.card-container');
    gsap.to(cardElement, {
      opacity: 0,
      x: 50,
      duration: 0.3,
      onComplete: () => {
        card--;
        gsap.to(cardElement, {
          opacity: 1,
          x: 0,
          duration: 0.3
        });
      }
    });
  };

  const markTouched = (field: keyof typeof touched) => {
    touched[field] = true;
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^\+?[\d\s-]{10,}$/.test(phone);
  };

  const validateZipCode = (zip: string) => {
    return /^[\d\s-]{5,}$/.test(zip);
  };

  onMount(() => {
    gsap.from('.progress-bar', {
      width: '0%',
      duration: 1,
      ease: 'power2.out'
    });
  });
</script>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4">
  <!-- Background Elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
  </div>

  <div class="container mx-auto max-w-4xl relative">
    <!-- Progress Steps -->
    <div class="mb-12">
      <div class="flex justify-between items-center relative">
        {#each steps as step, i}
          <div class="flex flex-col items-center relative z-10">
            <div 
              class="w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 mb-2"
              class:bg-blue-600={i <= card}
              class:bg-gray-200={i > card}
            >
              <svelte:component 
                this={step.icon}
                class={`w-6 h-6 ${i <= card ? 'text-white' : 'text-gray-400'}`}
              />
            </div>
            <span 
              class="text-sm font-medium transition-colors duration-300"
              class:text-blue-600={i <= card}
              class:text-gray-400={i > card}
            >
              {step.title}
            </span>
          </div>
        {/each}
        
        <!-- Progress Bar -->
        <div class="absolute top-6 left-0 h-0.5 bg-gray-200 w-full -z-10">
          <div 
            class="progress-bar h-full bg-blue-600 transition-all duration-300"
            style="width: {(card / (steps.length - 1)) * 100}%"
          />
        </div>
      </div>
    </div>

    <!-- Card Container -->
    <div class="card-container bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
      <!-- Location Card -->
      {#if card === 0}
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">Select Your Geographic Area</h2>
          {#each ['United States', 'Europe', 'Africa', 'India'] as region}
            <label class="block">
              <div class="group relative bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:border-blue-500 transition-colors">
                <input 
                  type="radio" 
                  name="region" 
                  value={region}
                  class="absolute inset-0 opacity-0 cursor-pointer"
                  bind:group={formData.region}
                />
                <div class="flex items-center gap-4">
                  <div class="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center">
                    {#if formData.region === region}
                      <div class="w-3 h-3 rounded-full bg-blue-600" />
                    {/if}
                  </div>
                  <span class="text-lg font-medium text-gray-900">{region}</span>
                </div>
              </div>
            </label>
          {/each}
        </div>
      {/if}

      <!-- Account Type Card -->
      {#if card === 1}
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">How would you like to accept payments?</h2>
          {#each [
            { title: 'As an individual', desc: 'For freelancers, sole traders and unregistered business' },
            { title: 'As a registered business, non-profit or NGO', desc: 'Your Business is registered and you have a Business Bank Account' }
          ] as option}
            <label class="block">
              <div class="group relative bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:border-blue-500 transition-colors">
                <input 
                  type="radio" 
                  name="accountType"
                  value={option.title}
                  class="absolute inset-0 opacity-0 cursor-pointer"
                  bind:group={formData.accountType}
                />
                <div class="flex items-center gap-4">
                  <div class="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center">
                    {#if formData.accountType === option.title}
                      <div class="w-3 h-3 rounded-full bg-blue-600" />
                    {/if}
                  </div>
                  <div>
                    <span class="text-lg font-medium text-gray-900">{option.title}</span>
                    <p class="text-sm text-gray-500 mt-1">{option.desc}</p>
                  </div>
                </div>
              </div>
            </label>
          {/each}
        </div>
      {/if}

      <!-- Personal Info Card -->
      {#if card === 2}
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">Personal Information</h2>
          <div class="grid grid-cols-2 gap-6">
            <!-- Full Name -->
            <div class="space-y-2">
              <label class="form-label" for="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName"
                bind:value={formData.fullName}
                on:blur={() => markTouched('fullName')}
                class="form-input {touched.fullName && !formData.fullName ? 'error' : ''}"
                placeholder="John Doe"
              />
              {#if touched.fullName && !formData.fullName}
                <span class="error-message">Full name is required</span>
              {/if}
            </div>

            <!-- Email -->
            <div class="space-y-2">
              <label class="form-label" for="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                bind:value={formData.email}
                on:blur={() => markTouched('email')}
                class="form-input {touched.email && (!formData.email || !validateEmail(formData.email)) ? 'error' : ''}"
                placeholder="you@example.com"
              />
              {#if touched.email && !formData.email}
                <span class="error-message">Email is required</span>
              {:else if touched.email && !validateEmail(formData.email)}
                <span class="error-message">Please enter a valid email address</span>
              {/if}
            </div>

            <!-- Phone -->
            <div class="space-y-2">
              <label class="form-label" for="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone"
                bind:value={formData.phone}
                on:blur={() => markTouched('phone')}
                class="form-input {touched.phone && (!formData.phone || !validatePhone(formData.phone)) ? 'error' : ''}"
                placeholder="+1 234 567 8900"
              />
              {#if touched.phone && !formData.phone}
                <span class="error-message">Phone number is required</span>
              {:else if touched.phone && !validatePhone(formData.phone)}
                <span class="error-message">Please enter a valid phone number</span>
              {/if}
            </div>

            <!-- ZIP Code -->
            <div class="space-y-2">
              <label class="form-label" for="zipCode">ZIP Code</label>
              <input 
                type="text" 
                id="zipCode"
                bind:value={formData.zipCode}
                on:blur={() => markTouched('zipCode')}
                class="form-input {touched.zipCode && (!formData.zipCode || !validateZipCode(formData.zipCode)) ? 'error' : ''}"
                placeholder="12345"
              />
              {#if touched.zipCode && !formData.zipCode}
                <span class="error-message">ZIP code is required</span>
              {:else if touched.zipCode && !validateZipCode(formData.zipCode)}
                <span class="error-message">Please enter a valid ZIP code</span>
              {/if}
            </div>

            <!-- Other address fields -->
            <div class="space-y-2">
              <label class="form-label" for="country">Country</label>
              <input 
                type="text" 
                id="country"
                bind:value={formData.country}
                on:blur={() => markTouched('country')}
                class="form-input {touched.country && !formData.country ? 'error' : ''}"
                placeholder="United States"
              />
              {#if touched.country && !formData.country}
                <span class="error-message">Country is required</span>
              {/if}
            </div>

            <div class="space-y-2">
              <label class="form-label" for="state">State</label>
              <input 
                type="text" 
                id="state"
                bind:value={formData.state}
                on:blur={() => markTouched('state')}
                class="form-input {touched.state && !formData.state ? 'error' : ''}"
                placeholder="California"
              />
              {#if touched.state && !formData.state}
                <span class="error-message">State is required</span>
              {/if}
            </div>

            <div class="space-y-2">
              <label class="form-label" for="city">City</label>
              <input 
                type="text" 
                id="city"
                bind:value={formData.city}
                on:blur={() => markTouched('city')}
                class="form-input {touched.city && !formData.city ? 'error' : ''}"
                placeholder="San Francisco"
              />
              {#if touched.city && !formData.city}
                <span class="error-message">City is required</span>
              {/if}
            </div>
          </div>
        </div>
      {/if}

      <!-- Business Info Card -->
      {#if card === 3}
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">Business Information</h2>
          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="form-label" for="businessName">Business Name</label>
              <input 
                type="text" 
                id="businessName"
                bind:value={formData.businessName}
                on:blur={() => markTouched('businessName')}
                class="form-input {touched.businessName && !formData.businessName ? 'error' : ''}"
                placeholder="Your Business Name"
              />
              {#if touched.businessName && !formData.businessName}
                <span class="error-message">Business name is required</span>
              {/if}
            </div>

            <div class="space-y-2">
              <label class="form-label" for="website">Website</label>
              <input 
                type="url" 
                id="website"
                bind:value={formData.website}
                on:blur={() => markTouched('website')}
                class="form-input"
                placeholder="https://example.com"
              />
            </div>

            <div class="space-y-2">
              <label class="form-label" for="registeredAddress">Registered Address</label>
              <input 
                type="text" 
                id="registeredAddress"
                bind:value={formData.registeredAddress}
                on:blur={() => markTouched('registeredAddress')}
                class="form-input {touched.registeredAddress && !formData.registeredAddress ? 'error' : ''}"
                placeholder="123 Business St"
              />
              {#if touched.registeredAddress && !formData.registeredAddress}
                <span class="error-message">Registered address is required</span>
              {/if}
            </div>

            <div class="space-y-2">
              <label class="form-label" for="businessAddress">Business Address</label>
              <input 
                type="text" 
                id="businessAddress"
                bind:value={formData.businessAddress}
                on:blur={() => markTouched('businessAddress')}
                class="form-input {touched.businessAddress && !formData.businessAddress ? 'error' : ''}"
                placeholder="123 Business St"
              />
              {#if touched.businessAddress && !formData.businessAddress}
                <span class="error-message">Business address is required</span>
              {/if}
            </div>
          </div>
        </div>
      {/if}

      <!-- Final Details Card -->
      {#if card === 4}
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">Final Details</h2>
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">Business Description</label>
              <textarea 
                bind:value={formData.businessDescription} 
                class="w-full px-4 py-2 border rounded-lg h-32" 
                required
              ></textarea>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mt-6">What's Your Role at This Company?</h3>
            {#each [
              'Company Administrator / Senior Manager',
              'Employee / Contractor',
              'Director / Owner',
              'Other'
            ] as role}
              <label class="block">
                <div class="group relative bg-white rounded-xl border border-gray-200 p-4 cursor-pointer hover:border-blue-500 transition-colors">
                  <input 
                    type="radio" 
                    name="role"
                    value={role}
                    class="absolute inset-0 opacity-0 cursor-pointer"
                    bind:group={formData.role}
                  />
                  <div class="flex items-center gap-4">
                    <div class="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-blue-500 flex items-center justify-center">
                      {#if formData.role === role}
                        <div class="w-3 h-3 rounded-full bg-blue-600" />
                      {/if}
                    </div>
                    <span class="text-lg font-medium text-gray-900">{role}</span>
                  </div>
                </div>
              </label>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Navigation Buttons -->
      <div class="flex justify-between mt-8 pt-6 border-t border-gray-100">
        <button 
          class="flex items-center gap-2 px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 
                 transition-colors disabled:opacity-50"
          on:click={prevCard}
          disabled={card === 0}
        >
          <ArrowLeft class="w-4 h-4" />
          Back
        </button>
        
        <button 
          class="flex items-center gap-2 px-6 py-3 rounded-lg transition-colors
                 {validateStep(card) 
                   ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                   : 'bg-gray-300 cursor-not-allowed text-gray-500'}"
          on:click={card === steps.length - 1 ? undefined : nextCard}
          type={card === steps.length - 1 ? 'submit' : 'button'}
          disabled={!validateStep(card)}
        >
          {card === steps.length - 1 ? 'Submit' : 'Continue'}
          <ArrowRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .form-input {
    @apply w-full px-4 py-3 border rounded-lg transition-all duration-200;
    @apply border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none;
    @apply placeholder-gray-400;
  }

  .form-input.error {
    @apply border-red-500 focus:border-red-500 focus:ring-red-200;
  }

  .error-message {
    @apply text-sm text-red-500 mt-1;
  }

  .form-label {
    @apply block text-sm font-medium text-gray-700 mb-1;
  }

  .radio-card {
    @apply relative bg-white rounded-xl border border-gray-200 p-4 cursor-pointer;
    @apply hover:border-blue-500 transition-all duration-200;
  }

  .radio-card.selected {
    @apply border-blue-500 bg-blue-50;
  }
</style>

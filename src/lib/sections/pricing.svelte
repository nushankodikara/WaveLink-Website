<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { 
    ArrowRight, 
    Globe2, 
    Building2,
    CheckCircle2,
    Wallet,
    Clock
  } from 'lucide-svelte';

  onMount(() => {
    // Set initial state
    gsap.set('.pricing-card', {
      opacity: 0,
      y: 30
    });

    // Animate pricing cards
    gsap.to('.pricing-card', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.pricing-container',
        start: 'top center+=100'
      }
    });
  });
</script>

<section class="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
  </div>

  <div class="container mx-auto px-4 relative">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Simple & Transparent Pricing
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Choose the perfect plan for your business needs with our competitive rates
      </p>
    </div>

    <div class="pricing-container max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <!-- International Rates -->
      <div class="pricing-card relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100">
        <!-- Card Header -->
        <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-t-2xl"></div>
        
        <div class="relative">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-blue-100/50 rounded-xl">
              <Globe2 class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">
              International Rates
            </h3>
          </div>

          <!-- Pricing -->
          <div class="mb-8">
            <div class="flex items-baseline gap-1 mb-2">
              <span class="text-4xl font-bold text-blue-600">5%</span>
              <span class="text-gray-500">per transaction</span>
            </div>
            <p class="text-gray-600">For all international transfers</p>
          </div>

          <!-- Features -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-5 h-5 text-blue-600" />
              <span class="text-gray-600">Global coverage</span>
            </div>
            <div class="flex items-center gap-2">
              <Clock class="w-5 h-5 text-blue-600" />
              <span class="text-gray-600">24/7 processing</span>
            </div>
            <div class="flex items-center gap-2">
              <Wallet class="w-5 h-5 text-blue-600" />
              <span class="text-gray-600">Multi-currency support</span>
            </div>
          </div>

          <button class="w-full group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <!-- Domestic Rates -->
      <div class="pricing-card relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100">
        <!-- Card Header -->
        <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-indigo-50 to-transparent rounded-t-2xl"></div>
        
        <div class="relative">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-indigo-100/50 rounded-xl">
              <Building2 class="w-6 h-6 text-indigo-600" />
            </div>
            <h3 class="text-2xl font-semibold text-gray-900">
              Domestic Rates
            </h3>
          </div>

          <!-- Pricing -->
          <div class="mb-8">
            <div class="flex items-baseline gap-1 mb-2">
              <span class="text-4xl font-bold text-indigo-600">2.5%</span>
              <span class="text-gray-500">per transaction</span>
            </div>
            <p class="text-gray-600">Starting rate for local transfers</p>
          </div>

          <!-- Features -->
          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-2">
              <CheckCircle2 class="w-5 h-5 text-indigo-600" />
              <span class="text-gray-600">Local bank support</span>
            </div>
            <div class="flex items-center gap-2">
              <Clock class="w-5 h-5 text-indigo-600" />
              <span class="text-gray-600">Same-day processing</span>
            </div>
            <div class="flex items-center gap-2">
              <Wallet class="w-5 h-5 text-indigo-600" />
              <span class="text-gray-600">Direct bank transfers</span>
            </div>
          </div>

          <button class="w-full group bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            Get Started
            <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>

    <div class="text-center mt-16">
      <p class="text-gray-600 mb-12">Ready to get started with Wavelink?</p>
      <a href="/register" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Create an Account
      </a>
    </div>
  </div>
</section>

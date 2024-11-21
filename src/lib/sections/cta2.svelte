<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { 
    Globe2, 
    CreditCard, 
    Bitcoin,
    ArrowRight
  } from 'lucide-svelte';

  onMount(() => {
    gsap.set('.cta2-content', {
      opacity: 1,
      y: 0
    });
    // Animate content
    gsap.from('.cta2-content', {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate electrons
    const electrons = gsap.utils.toArray('.electron');
    electrons.forEach(electron => {
      gsap.to(electron, {
        motionPath: {
          path: electron.closest('.payment-option').querySelector('.circuit-path'),
          align: electron.closest('.payment-option').querySelector('.circuit-path'),
          autoRotate: true,
          alignOrigin: [0.5, 0.5]
        },
        duration: 'random(3, 5)',
        repeat: -1,
        ease: 'none'
      });
    });

    // Animate options on scroll
    gsap.from('.payment-option', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.options-container',
        start: 'top center+=100'
      }
    });
  });
</script>

<section class="py-24 relative overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
  
  <!-- Main content -->
  <div class="container mx-auto px-4 relative">
    <div class="cta2-content max-w-3xl mx-auto text-center mb-20">
      <div class="flex items-center justify-center gap-3 mb-6">
        <Globe2 class="w-8 h-8 text-blue-600" />
        <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Go Global With Wavelink
        </h2>
      </div>
      
      <p class="text-lg text-gray-600 leading-relaxed">
        A comprehensive platform designed to meet the needs of today's cross-border seller. Pay from any of the popular global currencies, into leading marketplaces, pay your suppliers and manage multiple stores from a single location. Access working capital to reinvest in your business and withdraw earnings in your home currency at low interest rates.
      </p>
    </div>

    <!-- Payment options -->
    <div class="options-container max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
      <!-- Cards Option -->
      <div class="payment-option group relative">
        <!-- Circuit SVG -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
          <path 
            class="circuit-path"
            d="M20,100 C90,100 100,50 200,50 S310,150 380,150" 
            fill="none" 
            stroke="rgba(37, 99, 235, 0.1)" 
            stroke-width="2"
          />
          <circle class="electron" r="4" fill="#2563eb" />
        </svg>
        
        <div class="relative h-[100%] bg-gradient-to-br from-blue-50 to-transparent p-8 rounded-2xl border border-blue-100/50 backdrop-blur-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 bg-blue-100/30 rounded-xl">
              <CreditCard class="w-6 h-6 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">
              Debit Cards & Credit Cards
            </h3>
          </div>
          
          <p class="text-gray-600 mb-6">
            Make a payment anywhere in the world with any Visa and Mastercard.
          </p>

          <button class="group/btn flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Learn More 
            <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <!-- Crypto Option -->
      <div class="payment-option group relative">
        <!-- Circuit SVG -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
          <path 
            class="circuit-path"
            d="M20,150 C90,150 100,100 200,100 S310,50 380,50" 
            fill="none" 
            stroke="rgba(79, 70, 229, 0.1)" 
            stroke-width="2"
          />
          <circle class="electron" r="4" fill="#4f46e5" />
        </svg>
        
        <div class="relative h-[100%] bg-gradient-to-br from-indigo-50 to-transparent p-8 rounded-2xl border border-indigo-100/50 backdrop-blur-sm">
          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 bg-indigo-100/30 rounded-xl">
              <Bitcoin class="w-6 h-6 text-indigo-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900">
              Crypto to Fiat
            </h3>
          </div>
          
          <p class="text-gray-600 mb-6">
            Convert your digital assets into any currency of your choice to pay your bills, shopping, or cashing out from cryptocurrency investments.
          </p>

          <button class="group/btn flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
            Learn More 
            <ArrowRight class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Background Elements -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
  </div>
</section>

<style>
  .payment-option {
    isolation: isolate;
  }

  .electron {
    mix-blend-mode: multiply;
  }
</style>

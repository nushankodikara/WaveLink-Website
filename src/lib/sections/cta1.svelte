<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { DollarSign, Euro, Bitcoin, PoundSterling, ArrowRight } from 'lucide-svelte';

  onMount(() => {
    gsap.set('.cta1-content', {
      opacity: 1,
      x: 0
    });
    // Animate content
    gsap.from('.cta1-content', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate floating currency icons
    gsap.to('.currency-icon', {
      y: -12,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      stagger: 0.3
    });

    // Animate percentage counter
    gsap.to('.savings-counter', {
      innerText: 70,
      duration: 2,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: '.savings-counter',
        start: 'top center+=100'
      }
    });
  });
</script>

<section class="py-20 relative overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
  
  <!-- Animated background shapes -->
  <div class="absolute inset-0">
    <div class="absolute top-0 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
  </div>

  <div class="container mx-auto px-4 relative">
    <div class="flex flex-col lg:flex-row items-center gap-12">
      <!-- Left Content -->
      <div class="cta1-content lg:w-1/2 space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Avoid Extra Fees for 
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Currency Exchange
          </span>
        </h2>
        
        <p class="text-lg text-gray-600 leading-relaxed">
          Avoid high currency exchange conversion rates with Wavelink. No exchange fee during processing
        </p>

        <div class="flex items-center gap-4 py-4">
          <div class="bg-blue-50 rounded-lg px-6 py-3">
            <span class="text-3xl font-bold text-blue-600 savings-counter">0</span>
            <span class="text-3xl font-bold text-blue-600">%</span>
            <p class="text-sm text-blue-600">Average Savings</p>
          </div>
        </div>

        <button class="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start Saving Today
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <!-- Right Animation -->
      <div class="lg:w-1/2 relative">
        <div class="relative h-[400px] w-full">
          <!-- Central circle -->
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
            <div class="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <DollarSign class="w-12 h-12 text-blue-600" />
            </div>
          </div>

          <!-- Floating currency icons -->
          <div class="currency-icon absolute top-0 left-[20%] bg-white p-4 rounded-full shadow-lg">
            <Euro class="w-8 h-8 text-indigo-600" />
          </div>
          <div class="currency-icon absolute top-[30%] right-[10%] bg-white p-4 rounded-full shadow-lg">
            <Bitcoin class="w-8 h-8 text-orange-600" />
          </div>
          <div class="currency-icon absolute bottom-[20%] left-[10%] bg-white p-4 rounded-full shadow-lg">
            <PoundSterling class="w-8 h-8 text-green-600" />
          </div>
          <div class="currency-icon absolute bottom-[10%] right-[30%] bg-white p-4 rounded-full shadow-lg">
            <DollarSign class="w-8 h-8 text-blue-600" />
          </div>

          <!-- Connecting lines -->
          <svg class="absolute inset-0 w-full h-full" style="z-index: -1;">
            <path 
              d="M200,200 L100,100 M200,200 L300,150 M200,200 L100,300 M200,200 L300,250" 
              stroke="rgb(219 234 254)" 
              stroke-width="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</section>

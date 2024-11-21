<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { 
    Wallet, 
    Currency, 
    Globe2, 
    Building2, 
    ShieldCheck 
  } from 'lucide-svelte';

  const features = [
    {
      icon: Wallet,
      title: "Much Affordable",
      description: "Avoid high currency exchange conversion rates with Wavelink. No exchange fee during processing",
      color: "blue"
    },
    {
      icon: Currency,
      title: "No Currency Fee",
      description: "Receive money from all over the world without currency fees",
      color: "indigo"
    },
    {
      icon: Globe2,
      title: "Versatile",
      description: "Receive payments from your customers in any currency",
      color: "purple"
    },
    {
      icon: Building2,
      title: "Local Support",
      description: "Transfer your money to your local bank accounts",
      color: "violet"
    },
    {
      icon: ShieldCheck,
      title: "No hidden fees",
      description: "You will not receive any hidden fee by using any of our services",
      color: "blue"
    }
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fix: Set initial state and then animate
    gsap.set('.feature-card', {
      opacity: 0,
      y: 60
    });

    gsap.to('.feature-card', {
      scrollTrigger: {
        trigger: '.features-grid',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
  });
</script>

<section class="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0 z-0">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" ></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" ></div>
  </div>

  <div class="container mx-auto px-4 relative z-10">
    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Why Choose Wavelink
      </h2>
      <div class="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>

    <!-- Features Grid -->
    <div class="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each features as feature, index}
        <div 
          class="feature-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div class="flex items-center mb-4">
            <div class={`p-3 rounded-lg transition-colors duration-300 ${
              feature.color === 'blue' ? 'bg-blue-50 group-hover:bg-blue-100' :
              feature.color === 'indigo' ? 'bg-indigo-50 group-hover:bg-indigo-100' :
              feature.color === 'purple' ? 'bg-purple-50 group-hover:bg-purple-100' :
              feature.color === 'violet' ? 'bg-violet-50 group-hover:bg-violet-100' :
              'bg-blue-50 group-hover:bg-blue-100'
            }`}>
              <svelte:component 
                this={feature.icon} 
                class={`w-6 h-6 ${
                  feature.color === 'blue' ? 'text-blue-600' :
                  feature.color === 'indigo' ? 'text-indigo-600' :
                  feature.color === 'purple' ? 'text-purple-600' :
                  feature.color === 'violet' ? 'text-violet-600' :
                  'text-blue-600'
                }`}
              />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 ml-4">
              {feature.title}
            </h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
          
          <!-- Decorative Element -->
          <div class="absolute bottom-0 right-0 w-20 h-20 opacity-5 transform rotate-12">
            <svelte:component 
              this={feature.icon} 
              class="w-full h-full"
            />
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Decorative Dots -->
  <div class="absolute right-10 top-20 grid grid-cols-3 gap-2">
    {#each Array(9) as _}
      <div class="w-2 h-2 rounded-full bg-blue-200/50"></div>
    {/each}
  </div>
  
  <div class="absolute left-10 bottom-20 grid grid-cols-3 gap-2">
    {#each Array(9) as _}
      <div class="w-2 h-2 rounded-full bg-indigo-200/50"></div>
    {/each}
  </div>
</section>

<style>
  .feature-card {
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
</style>

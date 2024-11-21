<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { Key, Globe, Shield, Coins } from 'lucide-svelte';

  onMount(() => {
    // Animate main content
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Animate floating elements
    gsap.to('.floating-element', {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
      stagger: 0.2
    });
  });
</script>

<section class="relative min-h-400px bg-gradient-to-br from-blue-50 to-white overflow-hidden py-8">
  <!-- Background Elements -->
  <div class="absolute inset-0 z-0">
    <div class="absolute top-20 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
  </div>

  <!-- Floating Elements -->
  <div class="absolute inset-0 z-0">
    <div class="floating-element absolute top-20 right-[20%]">
      <Shield class="w-8 h-8 text-blue-400/40" />
    </div>
    <div class="floating-element absolute bottom-32 left-[15%]">
      <Coins class="w-10 h-10 text-indigo-400/40" />
    </div>
    <div class="floating-element absolute top-40 left-[25%]">
      <Globe class="w-12 h-12 text-blue-300/40" />
    </div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-4 pt-32 pb-20 relative z-10">
    <div class="hero-content max-w-4xl mx-auto text-center">
      <div class="flex items-center justify-center mb-8">
        <Key class="w-12 h-12 text-blue-600 mr-3" />
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          The Key To A World Of Possibilities
        </h1>
      </div>

      <p class="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
        Your Wavelink account is the key that opens a world of possibilities. Wavelink connects your business to the world, whether it's making international payments, receiving funds, managing your digital business, or accessing capital.
      </p>

      <p class="text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
        Developed by Euro Exim Bank, a trusted name in the international trade finance industry, our platform combines state-of-the-art technology with years of expertise to provide you with a seamless and secure payment experience.
      </p>

      <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Join us Today
      </button>
    </div>
  </div>
</section>

<style>
  section {
    perspective: 1000px;
  }
</style>

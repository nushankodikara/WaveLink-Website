<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { 
    Menu,
    X,
    ChevronDown,
  } from 'lucide-svelte';

  let isOpen = false;
  let isScrolled = false;
  let lastScrollY = 0;
  let isVisible = true;

  // Handle scroll behavior
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Check if scrolled
    isScrolled = currentScrollY > 20;
    
    // Hide/show based on scroll direction
    isVisible = currentScrollY < lastScrollY || currentScrollY < 100;
    
    lastScrollY = currentScrollY;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav
  class="fixed w-full z-50 transition-all duration-300"
  class:bg-white={isScrolled}
  class:shadow-lg={isScrolled}
  class:translate-y-0={isVisible}
  class:-translate-y-full={!isVisible}
>
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <img src="/logo.png" alt="Wavelink" class="h-16" />
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-8">
        <a 
          href="/" 
          class="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <a 
          href="/about" 
          class="text-gray-700 hover:text-blue-600 transition-colors"
        >
          About
        </a>
        <div class="relative group">
          <button class="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
            Services
            <ChevronDown class="w-4 h-4" />
          </button>
          <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div class="bg-white rounded-xl shadow-xl p-4 w-48">
              <a 
                href="/services/international" 
                class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                International Payments
              </a>
              <a 
                href="/services/domestic" 
                class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Domestic Payments
              </a>
              <a 
                href="/services/crypto" 
                class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Crypto Services
              </a>
            </div>
          </div>
        </div>
        <a 
          href="/contact" 
          class="text-gray-700 hover:text-blue-600 transition-colors"
        >
          Contact
        </a>
        <a href="/register" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
          Register
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden p-2"
        on:click={() => isOpen = !isOpen}
      >
        {#if isOpen}
          <X class="w-6 h-6 text-gray-700" />
        {:else}
          <Menu class="w-6 h-6 text-gray-700" />
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden transition-all duration-300 overflow-hidden"
      class:h-0={!isOpen}
      class:h-auto={isOpen}
    >
      <div class="py-4 space-y-4">
        <a 
          href="/" 
          class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          Home
        </a>
        <a 
          href="/about" 
          class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          About
        </a>
        <a 
          href="/services" 
          class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          Services
        </a>
        <a 
          href="/contact" 
          class="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
        >
          Contact
        </a>
        <a href="/register" class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
          Register
        </a>
      </div>
    </div>
  </div>
</nav>

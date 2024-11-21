<script>
  import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin,
    Mail,
    Phone,
    MapPin
  } from 'lucide-svelte';
</script>

<footer class="bg-gray-900 text-white relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
    
    <!-- Decorative grid -->
    <div class="absolute inset-0 opacity-5">
      {#each Array(20) as _}
        <div class="absolute w-20 h-20 border border-white/20 rounded-full"
          style="left: {Math.random() * 100}%; top: {Math.random() * 100}%;"
        ></div>
      {/each}
    </div>
  </div>

  <div class="container mx-auto px-4 py-16 relative">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <!-- Company Info -->
      <div class="space-y-6">
        <img src="/logo-white.svg" alt="Wavelink" class="h-8" />
        <p class="text-gray-400">
          Your trusted partner for international payments and financial services.
        </p>
        <div class="flex items-center gap-4">
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Facebook class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Twitter class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Instagram class="w-5 h-5" />
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors">
            <Linkedin class="w-5 h-5" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
        <ul class="space-y-4">
          <li>
            <a href="/about" class="text-gray-400 hover:text-white transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" class="text-gray-400 hover:text-white transition-colors">
              Our Services
            </a>
          </li>
          <li>
            <a href="/pricing" class="text-gray-400 hover:text-white transition-colors">
              Pricing
            </a>
          </li>
          <li>
            <a href="/contact" class="text-gray-400 hover:text-white transition-colors">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-lg font-semibold mb-6">Services</h3>
        <ul class="space-y-4">
          <li>
            <a href="/services/international" class="text-gray-400 hover:text-white transition-colors">
              International Payments
            </a>
          </li>
          <li>
            <a href="/services/domestic" class="text-gray-400 hover:text-white transition-colors">
              Domestic Payments
            </a>
          </li>
          <li>
            <a href="/services/crypto" class="text-gray-400 hover:text-white transition-colors">
              Crypto Services
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-semibold mb-6">Contact Us</h3>
        <ul class="space-y-4">
          <li class="flex items-center gap-3 text-gray-400">
            <Mail class="w-5 h-5" />
            <span>support@wavelink.com</span>
          </li>
          <li class="flex items-center gap-3 text-gray-400">
            <Phone class="w-5 h-5" />
            <span>+1 (555) 123-4567</span>
          </li>
          <li class="flex items-center gap-3 text-gray-400">
            <MapPin class="w-5 h-5" />
            <span>123 Business Ave, Suite 100<br/>New York, NY 10001</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-16 pt-8 border-t border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm">
          © {new Date().getFullYear()} Wavelink. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <a href="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

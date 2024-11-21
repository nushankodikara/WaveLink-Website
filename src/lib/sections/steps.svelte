<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { 
    Sparkles, 
    Shield, 
    UserPlus, 
    ClipboardList, 
    CheckCircle2 
  } from 'lucide-svelte';

  onMount(() => {
  gsap.registerPlugin(ScrollTrigger);

    // Progress bar animation
    gsap.to('.progress-line', {
      height: '100%',
      scrollTrigger: {
        trigger: '.steps-container',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    // Steps animation
    gsap.from('.step-card', {
      opacity: 0,
      x: 100,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.steps-container',
        start: 'top center',
        end: 'center center',
        toggleActions: 'play none none reverse'
      }
    });
  });
</script>

<section class="py-24 relative bg-gradient-to-b from-white to-blue-50">
  <div class="container mx-auto px-4 relative">
    <div class="flex flex-col lg:flex-row gap-12">
      <!-- Left Sticky Panel -->
      <div class="lg:w-5/12">
        <div class="lg:sticky lg:top-24 space-y-24">
          <!-- Easy Functionality Section -->
          <div class="relative">
            <!-- Background Elements -->
            <div class="absolute -inset-4 z-0">
              <div class="absolute top-0 right-0 w-24 h-24 bg-blue-100/50 rounded-full blur-2xl" />
              <div class="absolute bottom-0 left-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl" />
              <!-- Decorative dots -->
              <div class="absolute right-12 bottom-12 grid grid-cols-3 gap-1.5">
                {#each Array(9) as _}
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-200/50"></div>
                {/each}
              </div>
            </div>

            <!-- Content -->
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-blue-100/30 backdrop-blur-sm rounded-xl">
                  <Sparkles class="w-6 h-6 text-blue-600" />
                </div>
                <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Easy functionality
                </h3>
              </div>
              <p class="text-gray-600 leading-relaxed ml-16 relative">
                Create an account from us or use your own bank account. Run your business in any part of the world in few simple clicks. Operate easily for any industry.
                <!-- Decorative line -->
                <span class="absolute -left-16 top-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-600/20 to-blue-600"></span>
              </p>
            </div>
          </div>

          <!-- Security Section -->
          <div class="relative">
            <!-- Background Elements -->
            <div class="absolute -inset-4 z-0">
              <div class="absolute top-0 left-0 w-28 h-28 bg-indigo-100/50 rounded-full blur-2xl" />
              <div class="absolute bottom-0 right-0 w-36 h-36 bg-blue-100/50 rounded-full blur-2xl" />
              <!-- Decorative circles -->
              <div class="absolute left-12 top-12">
                {#each Array(3) as _, i}
                  <div 
                    class="absolute rounded-full border border-indigo-200/30"
                    style="width: {(i + 1) * 20}px; height: {(i + 1) * 20}px; top: -{i * 10}px; left: -{i * 10}px"
                  ></div>
                {/each}
              </div>
            </div>

            <!-- Content -->
            <div class="relative z-10">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-indigo-100/30 backdrop-blur-sm rounded-xl">
                  <Shield class="w-6 h-6 text-indigo-600" />
                </div>
                <h3 class="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Security
                </h3>
              </div>
              <p class="text-gray-600 leading-relaxed ml-16 relative">
                At our online payment platform, security is our top priority. We use state-of-the-art encryption technology to protect your personal and financial information, and we comply with all industry standards for online security. You can feel confident that your information is safe with us.
                <!-- Decorative line -->
                <span class="absolute -left-16 top-1/2 w-12 h-0.5 bg-gradient-to-r from-indigo-600/20 to-indigo-600"></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Steps Section -->
      <div class="lg:w-7/12 relative steps-container">
        <!-- Progress Line -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100">
          <div class="progress-line absolute top-0 left-0 w-full bg-blue-600 origin-top" style="height: 0%"></div>
        </div>

        <!-- Steps -->
        <div class="space-y-24 pl-20">
          <!-- Step 1 -->
          <div class="step-card relative">
            <div class="absolute left-[-4.5rem] w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <UserPlus class="w-6 h-6" />
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Step 1: Creating Account</h4>
              <p class="text-gray-600">Click on the Create Account button on the top of the page</p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="step-card relative">
            <div class="absolute left-[-4.5rem] w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <ClipboardList class="w-6 h-6" />
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Step 2: Fill the Form</h4>
              <p class="text-gray-600">Fill up the sign up form using your real details and mobile numbers which are in use</p>
              <button class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Create an Account
              </button>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="step-card relative">
            <div class="absolute left-[-4.5rem] w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <CheckCircle2 class="w-6 h-6" />
            </div>
            <div class="bg-white rounded-2xl p-8 shadow-lg">
              <h4 class="text-xl font-bold text-gray-900 mb-4">Step 3: Approval</h4>
              <p class="text-gray-600">Wait until we review your request and send the approval to your email inbox</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .steps-container {
    min-height: 600px;
  }
</style>

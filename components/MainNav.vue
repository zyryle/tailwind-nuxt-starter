<template>
  <!-- <div> -->
    <nav class="bg-darker-blue shadow-md shadow-black">
      <!-- <div class="w-5/6 mx-auto px-4 sm:px-6 lg:px-8"> -->
      <!-- <div class="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-1"> -->
        <div class="flex items-center justify-between h-28 w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <!-- Logo -->
          <div class="flex">
            <a href="/"><img src="~/static/images/logo-white.png" alt="Workflow logo"></a>
          </div>
          <!-- Nav Links -->
          <div class="flex items-center">
            <div class="hidden big-laptop:block">
              <div class="ml-10 flex items-baseline">
                <a href="/"
                  class="px-3 py-2 rounded-md text-base font-medium text-off-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 font-sans-600 font-montserrat">Home</a>
                <a href="#about"
                  class="ml-4 px-3 py-2 rounded-md text-base font-medium text-off-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">About</a>
                <a href="#clients"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-off-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">Our
                  Clients</a>
                <a href="#accomplishments"
                  class="ml-4 px-3 py-2 rounded-md text-base font-medium text-off-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">Accomplishments</a>
                <a href="#tech-stack"
                  class="ml-4 px-3 py-2 rounded-md text-base font-medium text-off-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">Tech
                  Stack</a>
                <a href="#services"
                  class="ml-4 px-3 py-2 rounded-md text-base font-medium text-off-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">Services</a>
                <a href="#testimonials"
                  class="ml-4 px-3 py-2 rounded-md text-base font-medium text-off-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">Testimonials</a>
                <a href="#contact"
                  class="ml-4 px-3 py-2 rounded-md text-base font-medium text-off-white hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 font-montserrat">Contact</a>
              </div>
            </div>
          </div>

          <div class="-mr-2 flex big-laptop:hidden">
            <!-- Mobile menu button -->
            <button @click="toggle"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
              </svg>
              <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      <!-- </div> -->
      <div :class="[isOpen ? '' : 'hidden', 'big-laptop:hidden']">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Our
            Clients</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Accomplishments</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Tech
            Stack</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Services</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Testimonials</a>
          <a href="#"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
        </div>
      </div>
    </nav>

    <!-- <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          Replace with your content
          <div class="px-4 py-6 sm:px-0">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          End replace
        </div>
      </main> -->
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
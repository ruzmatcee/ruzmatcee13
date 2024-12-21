<template>
  <header>
    <nav class="w-full z-40 flex justify-center fixed">
      <div
        class="lg:container na top-8 relative z-40 mx-4 border-[0.1px] w-full max-lg:py-4  border-gray-500 backdrop-blur brightness-110 rounded-full flex flex-wrap items-center  justify-between ">
        <a href="#" class="flex mx-6 items-center brand lg:order-first max-w-xl">
          <span class="text-xl gallient text-white ml-3 md:text-3xl lg:text-xl 2xl:text-2xl z-30 ">Ruzmatcee</span>
        </a>
        <a href="#" type="button"
          class=" button z-30 rounded  duration-500 lg:order-3 max-lg:hidden font-semibold text-white  max-lg:text-2xl lg:text-sm xl:text-lg max-lg:px-10 max-lg:py-3 lg:px-8 py-2 text-center">Biz
          bilan bog'lanish <span class=" px-3  py-2 bg-zinc-700 rounded-full"><i
              class="fa-regular fa-arrow-right -rotate-45 text-white"></i></span>
        </a>
        <button class="open z-30 max-sm:mx-2 mx-8 lg:hidden ">
          <span class="sr-only">Asosiy menuni ochish</span>
          <svg class=" max-md:w-6 w-8 h-8 mx-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          class="z-[999] max-sm:w-[100%] max-lg:w-[40vh]  max-lg:h-[120vh] absolute lg:relative max-lg:bg-[#1a1a1a] max-lg:-top-9 lg:w-[600px] 3xl:w-[800px] navbar">
          <button class="close absolute right-2 top-8 lg:hidden max-sm:mx-2 mx-8">
            <svg class="w-9 h-7 " fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </button>
          <ul
            class="flex relative flex-col lg:order-2 font-semibold my-40 justify-evenly py-6 gap-3 rounded-lg  lg:flex-row  lg:my-0 lg:border-0">
            <li class="w-full flex flex-col lg:items-center">
              <a href="#"
                class="block max-lg:py-2 max-lg:ml-10   max-md:text-lg max-xl:text-3xl lg:text-base 3xl:text-lg text-white hover:text-orange-500 lg:border-0 lg:p-0 ">Home</a>
            </li>
            <li class="w-full flex flex-col lg:items-center">
              <a href="#"
                class="block max-lg:py-2 max-lg:ml-10   max-md:text-lg max-xl:text-3xl lg:text-base 3xl:text-lg text-white hover:text-orange-500  lg:border-0 lg:p-0 ">About</a>
            </li>
            <li class="w-full flex flex-col lg:items-center">
              <a href="#"
                class="block max-lg:py-2 max-lg:ml-10   max-md:text-lg max-xl:text-3xl lg:text-base 3xl:text-lg text-white hover:text-orange-500  lg:border-0 lg:p-0 ">Projects</a>
            </li>
            <li class="w-full flex flex-col lg:items-center">
              <a href="#"
                class="block max-lg:py-2 max-lg:ml-10   max-md:text-lg max-xl:text-3xl lg:text-base 3xl:text-lg text-white hover:text-orange-500  lg:border-0 lg:p-0 ">News</a>
            </li>
            <li class="w-full flex flex-col lg:items-center">
              <a href="#"
                class="block max-lg:py-2 max-lg:ml-10   max-md:text-lg max-xl:text-3xl lg:text-base 3xl:text-lg  text-white hover:text-orange-500  lg:border-0 lg:p-0 ">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  mounted() {
    const openButton = document.querySelector('.open');
    const closeButton = document.querySelector('.close');
    const navbar = document.querySelector('.navbar');
    openButton.addEventListener('click', () => {
      if (window.innerWidth <= 1023) {
        navbar.style.left = '-35px';
        navbar.style.transition = 'left 0.3s ease';
      }
    });
    closeButton.addEventListener('click', () => {
      if (window.innerWidth <= 1023) {
        navbar.style.left = '-150%';
      }
    });

    document.addEventListener('scroll', () => {
      const navbar = document.querySelector('.na');
      if (window.scrollY > 400) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    })

  }
};
</script>
<style scoped>
@media (max-width: 1023px) {
  .navbar {
    left: -150%;
  }
}

.na.scrolled {
  background-color: #1b1b1bd2 !important;
  transition: all 700ms linear;
}

@media (min-width: 1024px) {
  .navbar {
    left: -20px !important;
  }
}
</style>
<template>
    <!-- Hero section -->
    <div class="heroo h-[700px] lg:h-[900px] xl:h-[800px] overflow-hidden">
        <!-- Hero background img -->
        <img src="../assets/imgs/1 (1).jpg" alt=""
            class="hero-img w-full mask2 h-[700px] lg:h-[900px] xl:h-[780px] object-cover object-top -z-10 absolute top-0 left-0" />
        <!-- End hero background img -->

        <!-- Cursor -->
        <div class="z-40 cursor-dot duration-300 w-[5px] bg-black dark:bg-white transition max-sm:hidden h-[5px] fixed top-0 left-0 rounded-full"
            data-cursor-dot></div>
        <div class="cursor-outline duration-300 border-black dark:border-white border-[1px] w-[40px] h-[40px] fixed top-0 left-0 rounded-full"
            data-cursor-outline></div>
        <!-- End Cursor -->

        <!-- Top Scroll button -->
        <div class="progress-wrap fixed bottom-[30px] right-[30px] h-[44px] w-[44px] cursor-pointer block rounded-[50px] z-[60] opacity-0 visited:hidden translate-y-4 transition-all duration-300 mix-blend-difference active-progress:opacity-1 active-progress:visible active-progress:translate-y-0"
            :class="{ 'active-progress': isProgressActive }" @click="scrollToTop">
            <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path fill="none" id="progressPath" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
        </div>
        <!-- End Top Scroll button -->

        <!-- Button Theme toggle -->
        <div class="fixed top-40 z-30 inline-block">
            <!-- Dark mode toggle button -->
            <div class="relative z-50 block border mb-4 border-gray-700 dark:border-gray-500 py-2 px-4 rounded-r-lg">
                <button @click="toggleDarkMode" type="button"
                    class="hs-dark-mode-active:hidden block hs-dark-mode group items-center text-gray-700 font-medium dark:text-gray-500">
                    <svg class="flex-shrink-0 w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </button>
                <button @click="toggleDarkMode" type="button"
                    class="hs-dark-mode-active:block hidden hs-dark-mode group items-center font-medium text-gray-700 dark:text-gray-500">
                    <svg class="flex-shrink-0 w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                </button>
            </div>
            <!-- Dark mode tgle button -->
            <!-- Theme color toggle button -->
            <div class="reletive">
                <button @click="toggleDropdown"
                    class="relative block border border-gray-700 dark:border-gray-500 group py-2 px-4 rounded-r-lg">
                    <i class="fa-regular fa-palette w-[20px] h-[20px] text-gray-700 dark:text-gray-500"></i>
                </button>
                <!-- Dropdown menu -->
                <div v-show="isOpen" @click="closeDropdown"
                    class="absolute theme-colors border border-black dark:border-white left-0 p-2.5 mt-2 space-y-2 ml-[0.5px] origin-top-left rounded-r-lg">
                    <div class="block transition-all color rounded-full w-8 h-8 cursor-pointer hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-white bg-[#14cf93]"
                        @click="changeTextColor('#14cf93')"></div>
                    <div class="block transition-all color rounded-full w-8 h-8 cursor-pointer hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-white bg-[#F97316]"
                        @click="changeTextColor('#F97316')"></div>
                    <div class="block transition-all color rounded-full w-8 h-8 cursor-pointer hover:outline hover:outline-offset-1 hover:outline-1 hover:outline-white bg-[#0284C7]"
                        @click="changeTextColor('#0284C7')"></div>
                </div>
            </div>
            <!-- Theme color toggle button -->
        </div>
        <!-- End button theme toggle -->

        <!-- Hero text Section -->
        <div class="z-20 container mx-auto h-[700px] grid place-items-center py-10 overflow-hidden relative lg:top-20">
            <h1 class="relative hero_text block sm:top-10 leading-normal font-medium">
                <span
                    class="block text-[8vw] sm:text-[9vw] md:text-[5rem] lg:text-[6rem] xl:text-[6.8rem] 2xl:text-[7.6rem] xl:left-4 3xl:-left-10 relative text-white">WEB
                    SAYT
                    <span
                        class="sm:block text-[7vw] sm:text-[9vw] md:text-[5rem] lg:text-[6rem] xl:text-[6.8rem] 2xl:text-[7.6rem] 3xl:left-[42rem] text-white sm:left-[13rem] md:left-[17rem] lg:left-[24rem] xl:left-[30rem] relative">YARATISH</span>
                </span>
                <span
                    class="block text-[8vw] sm:text-[9vw] md:text-[5rem] lg:text-[6rem] xl:text-[6.4rem] 2xl:text-[7.2rem] 2xl:left-8 3xl:-left-20 - relative text-white">PROFESSIONAL
                    <span class="sm:left-40 md:left-60 lg:left-96 xl:left-auto relative">TARZDA</span></span>
                <p
                    class="cursor-scale small max-sm:-bottom-28 sm:top-28 md:top-36 lg:top-[11rem] xl:top-[12rem] 2xl:top-[14.5rem] sm:-left-2 lg:left-0 3xl:-left-12 text-gray-200 z-10 absolute text-sm sm:text-[0.5rem] md:text-xs sm:max-w-[13rem] lg:text-base 3xl:text-lg md:max-w-[17rem] lg:max-w-[23rem] 3xl:max-w-[33rem]">
                    Sayt yaratishning aniq narxini bilib oling va biznesingiz uchun maxsus taklifni oling. <br>
                    Bir yil davomida texnik yordam - sovg'a!
                </p>
            </h1>
        </div>
    </div>
    <!-- End Hero text section -->

    <!-- Statistics section-->
    <div class="containe overflow-hidden py-10 relative 3xl:pt-16 mx-auto">
        <div class="grid place-items-center gap-y-6 grid-cols-1 md:grid-cols-3 lg:px-12">
            <!-- Stats -->
            <div class="flex justify-center align-center gap-x-4">
                <i class="fa-solid fa-circle-check text-2xl dark:text-white text-black"></i>
                <p class="max-lg:font-medium dark:text-white text-black font-semibold text-xl lg:text-2xl">Ko'plab buyurtmalar
                    </p>
            </div>
            <!-- End Stats -->
            <!-- Stats -->
            <div class="flex justify-center align-center gap-x-4">
                <i class="fa-solid fa-circle-check text-2xl dark:text-white text-black"></i>
                <p class="max-lg:font-medium dark:text-white text-black font-semibold text-xl lg:text-2xl">Inavatsion va ishonchli</p>
            </div>
            <!-- End Stats -->
            <!-- Stats -->
            <div class="flex justify-center align-center gap-x-4">
                <i class="fa-solid fa-circle-check text-2xl dark:text-white text-black"></i>
                <p class="max-lg:font-medium dark:text-white text-black font-semibold text-xl lg:text-2xl">Global bozorda 5-yil
                </p>
            </div>
            <!-- End Stats -->
        </div>
    </div>
    <!-- End statistics section -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import ScrollReveal from "scrollreveal";

// State variables
const isOpen = ref(false);
const isProgressActive = ref(false);
const progressPath = ref(null);
const pathLength = ref(0);

// Progress Scroll top button methods
const setupProgress = () => {
    if (progressPath.value) {
        pathLength.value = progressPath.value.getTotalLength();
        progressPath.value.style.transition = "none";
        progressPath.value.style.strokeDasharray = `${pathLength.value} ${pathLength.value}`;
        progressPath.value.style.strokeDashoffset = pathLength.value;
        // Ensure this line is correct for visual updates
        progressPath.value.getBoundingClientRect();
        progressPath.value.style.transition = "stroke-dashoffset 10ms linear";
    }
};

const updateProgress = () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = pathLength.value - (scroll * pathLength.value) / height;
    if (progressPath.value) {
        progressPath.value.style.strokeDashoffset = progress;
    }
    isProgressActive.value = scroll > 150;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Dropdown methods
const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
    isOpen.value = false;
};

// Dark mode toggle
const toggleDarkMode = () => {
    const html = document.getElementById("html-root");
    const isDarkMode = html.classList.contains("dark");

    if (isDarkMode) {
        html.classList.remove("dark");
        localStorage.setItem("html", "light");
    } else {
        html.classList.add("dark");
        localStorage.setItem("html", "dark");
    }
};

// Text color change
const changeTextColor = (color) => {
    document.querySelector("#app").style.color = color;
    localStorage.setItem("color", color);
};

// Mounted lifecycle equivalent
onMounted(() => {
    const links = document.querySelectorAll("a");
    const cursor = document.querySelector(".cursor-dot");
    const follower = document.querySelector(".cursor-outline");

    document.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Animate cursor outline
        follower.animate(
            {
                left: `${posX}px`,
                top: `${posY}px`,
            },
            {
                duration: 1000,
                fill: "forwards",
            }
        );

        // Animate cursor dot
        cursor.animate(
            {
                left: `${posX}px`,
                top: `${posY}px`,
            },
            {
                duration: 400,
                fill: "forwards",
            }
        );
    });

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            follower.classList.add("active");
        });
        link.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
            follower.classList.remove("active");
        });
    });

    // Scroll reveal animation
    ScrollReveal({
        reset: true,
        distance: "40px",
        duration: 1300,
        delay: 500,
    });

    ScrollReveal().reveal(".hero_text", { delay: 50, origin: "bottom" });
    ScrollReveal().reveal(".right", { delay: 50, origin: "right" });

    // Progress Scroll top button
    progressPath.value = document.querySelector('#progressPath');
    setupProgress();
    window.addEventListener("scroll", updateProgress);
    
    // Dark mode and Textcolor LocalStorage
    const savedColor = localStorage.getItem("color");
    if (savedColor) {
        changeTextColor(savedColor);
    }; 
    const darkcolor = localStorage.getItem("html");
    if (darkcolor) {
        toggleDarkMode();
    }
});

</script>


<style>
.cursor-dot.active {
    opacity: 1;
    transform: scale(20);
    background: #cccccc3d;
    border: none;
    transition: all 300ms linear;
}

.cursor-outline.active {
    opacity: 1;
    transform: scale(0);
    transition: all 300ms linear;
}

.cursor-dot,
.cursor-outline {
    transform: translate(-50%, -50%);
    pointer-events: none;
}

.progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.progress-wrap::after {
    position: absolute;
    font-family: "Font Awesome 5 Pro";
    content: "\f077";
    text-align: center;
    line-height: 44px;
    font-size: 13px;
    font-weight: 900;
    color: #ccc;
    left: 0;
    top: 0;
    height: 44px;
    width: 44px;
    cursor: pointer;
    display: block;
    z-index: 1;
    transition: all 400ms linear;
}

body::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 680px;
    top: 0;
    opacity: 0.5;
    left: 0;
    z-index: 10;
    pointer-events: none;
    background: #1d1d1d;
}

@media screen and (min-width: 1024px) and (max-width: 1280px) {
    body::before {
        height: 900px;
    }
}

@media screen and (min-width: 1281px) {
    body::before {
        height: 780px;
    }
}

.progress-wrap svg.progress-circle path {
    stroke: #ccc;
    stroke-width: 4;
    transition: all 400ms linear;
}
</style>
